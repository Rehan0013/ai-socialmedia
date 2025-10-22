* * *

# 🖥️ Backend for the Project

This is the **backend server** for the project. It handles authentication, database connections, media uploads, and integration with external APIs like **Gemini** and **ImageKit**.


## ⚙️ Environment Variables

Before running the project, make sure to create a `.env` file in the root directory of your backend and add the following variables:

PORT=3000
MONGODB_URI=

JWT_SECRET=

GEMINI_API_KEY=

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

> 💡 **Note:** Replace the empty values with your actual credentials.

* * *

🚀 Setup Instructions
---------------------

Follow the steps below to set up and run the backend locally:

1.  **Clone the Repository**
    ```bash
    git clone <repository-url>
    ```
2.  **Open the Project**  
    Open the cloned repository in **VS Code** or your preferred editor.
3.  **Install Dependencies**
    ```bash
    npm install
    ```
    or
    ```bash
    npm i
    ```
4.  **Run the Server**
    *   For **development mode** (with auto-restart using `nodemon`):
        ```bash
        npm run dev
        ```
    *   For **production mode**:
        ```bash
        npm start
        ```

* * *

📁 Project Structure (Example)
------------------------------

```
backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
│
├── .env
├── package.json
└── server.js
```

* * *

🧠 Notes
--------

*   Ensure MongoDB is running and the `MONGODB_URI` is correctly configured.
*   Keep your `.env` file private — **never commit it** to version control.
*   The `JWT_SECRET` should be a long, random string for better security.
