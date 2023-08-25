const bcrypt = require('bcrypt');
const _ = require("lodash");
const axios = require('axios');
const otpGenerator = require('otp-generator');

const User = require('../Model/userModel'); // Import the User model
const Otp = require('../Model/otpModel');
const { upperCase, first } = require('lodash');

module.exports.signUp = async (req, res) => {
    try {
        const user = await User.findOne({
            number: req.body.number
        });

        if (user) {
            return res.status(404).send("User already registered");
        }
        const numericOTP = otpGenerator.generate(6, {
            digits: true,
            alphabets: false,
            upperCase: false,
            specialChars: false,
            excludeSimilarCharacters: true, // Exclude similar-looking characters like '1' and 'l'
            exclude: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        });

        const number = req.body.number;
        console.log(numericOTP);

     

        const otp = new Otp({ number: number, otp: numericOTP });
        const salt = await bcrypt.genSalt(10);
        otp.otp = await bcrypt.hash(otp.otp, salt);
        const result = await otp.save();
        return res.status(200).send("OTP sent successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error sending OTP");
    }
};

module.exports.verifyOtp = async (req, res) => {
   const otpHolder=await Otp.find({
    number:req.body.number
   });
   if(otpHolder.length ===0) 
   return res.status(400).send("you use and experied Otp 🤦‍♂️");
const rightOtpFind = otpHolder[otpHolder.length - 1];
const validUser =await bcrypt.compare(req.body.otp, rightOtpFind.otp);

if(rightOtpFind.number === req.body.number && validUser){
    const user=new User(_.pick(req.body,["number"]));
    const token=user.generateJWT();
    const result=await user.save();
    const OTPDelete = await Otp.deleteMany({
        number:rightOtpFind.number
    });
    return res.status(200).send({
        message:"user registeretion successfully",
        token:token,
        data:result
    })

}else{
    return res.status(400).send("you otp is incorrect")
}
};
