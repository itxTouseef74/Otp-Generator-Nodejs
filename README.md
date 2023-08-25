# OTP Generator App with Node.js

This repository contains an OTP (One-Time Password) generator application built using Node.js, Express, bcrypt for password hashing, JWT for authentication, express-session for user sessions, dotenv for managing environment variables, lodash for utility functions, mongoose for database interaction, and otp-generator for OTP generation.

## Features

- User Registration: Register new users with secure password storage.
- OTP Generation: Generate OTPs for user authentication.
- JWT Authentication: Secure user authentication using JSON Web Tokens.
- User Sessions: Maintain user sessions with the help of express-session.
- Secure Passwords: Hash user passwords using bcrypt.
- API Routes: Form a REST API to handle user registration, OTP generation, and authentication.

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/itxTouseef74/Otp-Generator-Nodejs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd otp-generator-nodejs
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Set up your environment variables:

    - Fill in the required environment variables in `.env`, such as your database URI, JWT secret, and session secret.

## Running the Application

1. Start the application:

   ```bash
   npm start
   ```

2. The server will run on `http://localhost:20001`.

## API Endpoints

- **POST** `/api/user/signup`: Register a new user.
- **POST** `/api/user/signup/verify`: Verify Otp and user login.

## Dependencies Used

- Express: Web framework for building APIs and handling routes.
- bcrypt: For hashing and verifying user passwords.
- JWT: For generating and verifying JSON Web Tokens.
- express-session: For managing user sessions.
- dotenv: For managing environment variables.
- lodash: For utility functions.
- mongoose: MongoDB object modeling for database interaction.
- otp-generator: For generating OTPs.

## Contributing

Contributions are welcome! If you want to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes and commit them: `git commit -m "Add your feature"`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Create a pull request explaining your changes.

## Acknowledgments

- This project was developed to showcase the implementation of OTP generation and authentication using Node.js and various libraries.
