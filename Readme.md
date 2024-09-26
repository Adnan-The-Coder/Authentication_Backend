# Authentication Project

This is a simple authentication project built with Express, MongoDB, and several supporting libraries including CORS, Bcrypt.js, Crypto, and Mongoose. The application includes user registration, login, logout, password reset, email verification, and welcome emails.

## Technologies Used

- **Node.js** with **Express** for the backend server
- **MongoDB** for the database
- **Mongoose** for object data modeling (ODM)
- **Bcrypt.js** for password hashing
- **Crypto** for generating secure tokens
- **CORS** for enabling Cross-Origin Resource Sharing
- **dotenv** for managing environment variables
- **Nodemailer** for sending emails (using Mailtrap)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Setup

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. Create a ```.env``` file in the root directory of the project and add the following environment variables:
```
MONGO_URI=<your_mongo_db_connection_string>
PORT=5000
JWT_SECRET=<your_jwt_secret>
NODE_ENV=development
MAILTRAP_TOKEN=<your_mailtrap_token>
MAILTRAP_ENDPOINT=<your_mailtrap_endpoint>
CLIENT_URL=<your_client_url>
```

3. Install the required dependencies:
```npm i ```

4. Start the development server:
``` npm run dev ```


Now the server is running on ```http://localhost:5000```


## API ENDPOINTS
You can test the API using Postman. Here are some key endpoints:
- Sign Up ``` POST /api/auth/signup ```
- Login ``` POST /api/auth/login  ```
- Logout ``` POST /api/auth/logout ```
- Forgot Password ``` POST /api/auth/forgot-password ```
- Reset Password ``` POST /api/auth/reset-password/<tokenHere> ```
- Email Verification: This is handled automatically.


 ## Welcome Emails
 - Upon successful signup, a welcome email will be sent to the user.



