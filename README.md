# Full Stack Authorization System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is a full-fledged authorization system built using NestJS for the backend and Next.js for the frontend. It incorporates several important security and user management features.

## 🚀 Features

*   **🔒 Session-Based Authentication:** User session management for secure application access.
*   **📧 Email Confirmation:** Email address verification process during registration to enhance security and prevent fake accounts.
*   **🔐 Two-Factor Authentication:** An extra layer of security requiring confirmation via another device or application.
*   **🔄 Password Reset:** The ability to recover a forgotten password via email.
*   **🧑‍💼 User Roles:** Role-based access control system to assign different levels of access to users.
*   **🏗️ FSD (Feature-Sliced Design) Architecture:** The project is organized using Feature-Sliced Design, providing good modularity, scalability, and maintainability.

## 🛠️ Technologies

*   **Backend (NestJS):**
    *   **Framework:** NestJS
    *   **Database ORM:** Prisma
    *   **Session Management:** Redis (ioredis, connect-redis)
    *   **Email Service:** Resend (or configurable with MailerModule)
    *   **Password Hashing:** Argon2
    *   **Validation:** Class-validator, Class-transformer
    *   **reCAPTCHA:** Google reCAPTCHA (@nestlab/google-recaptcha)

*   **Frontend (Next.js):**
    *   **Framework:** Next.js
    *   **UI Library:** Radix UI, Lucide React, Tailwind CSS, tailwindcss-animate
    *   **Form Management:** React Hook Form, Zod (@hookform/resolvers)
    *   **State Management:** @tanstack/react-query
    *   **Theming:** next-themes

## ⚙️ How to Run the Project

1.  **Clone the repository:**

    ```bash
    git clone <your_repository_url>
    cd <project_directory>
    ```

2.  **Install dependencies:**

    ```bash
    cd server
    npm install  # or yarn install
    cd ../client
    npm install  # or yarn install
    cd ..
    ```

3.  **Configure environment variables:**

    *   Create `.env` files and specify the necessary environment variables. Refer to the documentation for each part of the project (backend and frontend) for a list of required variables.

4.  **Start the backend:**

    ```bash
    cd server
    npm run start:dev  # or npm run start:prod
    cd ..
    ```

5.  **Start the frontend:**

    ```bash
    cd client
    npm run dev
    cd ..
    ```

## 📝 Additional Information

*   **FSD:**  Detailed information about Feature-Sliced Design architecture can be found [here](https://feature-sliced.design/).
*   **NestJS Documentation:** [https://docs.nestjs.com/](https://docs.nestjs.com/)
*   **Next.js Documentation:** [https://nextjs.org/docs](https://nextjs.org/docs)

## ⚖️ License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
