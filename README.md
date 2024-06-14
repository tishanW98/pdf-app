# PDF Application

Welcome to the PDF Application! This application allows you to manage and view PDF files.

## Features

- **Upload PDF Files:** Upload your PDF documents securely.
- **View PDF Files:** View uploaded PDF files directly in the browser.
- **User Authentication:** Secure authentication using JWT tokens.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- MongoDB installed and running (or access to a MongoDB instance)
- NPM package manager installed
- Code editor (e.g., Visual Studio Code, Sublime Text)

## Installation

Follow these steps to get the PDF Application up and running:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/pdf-application.git
   cd pdf-application
   ```

2. **Install dependencies:**

Copy code
npm install

3. **Set up environment variables:**
   Create a .env file in the root directory based on .env.example and configure the environment variables.

4. **Start the server:**

Copy code
cd backend
npm run dev

5. **Start the client (React frontend):**

Copy code
cd frontend/pdf-app
npm install
npm run dev

6. **Usage**
   Authentication
   Signup: Navigate to /signup to create a new account.
   Login: Navigate to /login to access your account.
   Uploading PDF Files
   Upload: Once authenticated, navigate to /upload to upload PDF files.
   View PDFs: Navigate to /pdfs to view all uploaded PDF files.

7. **API Endpoints**

The following API endpoints are available:

POST /user/signup: Create a new user account.
POST /auth/login: Authenticate and login a user.
POST /pdf/upload: Upload a PDF file.
GET /pdfs: Get all uploaded PDF files.
