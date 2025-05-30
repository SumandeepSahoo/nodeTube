# 🎬 nodeTube-backend

A robust backend for a video streaming platform built with **Node.js**, **Express.js**, and **MongoDB**, supporting features like video uploads, user authentication, subscriptions, and more.

---

## 🚀 Features

- 🔐 **Authentication & Authorization**: Secure login/signup using JWT.
- 📹 **Video Upload**: Upload and manage videos using **Multer** and **Cloudinary**.
- 👤 **User Management**: View, update, and manage user accounts.
- 🔄 **Subscriptions**: Support for subscribing/unsubscribing between users.
- 🔎 Advanced querying using MongoDB Aggregation Pipelines for analytics and dynamic filtering.
- ⚙️ **Scalable Architecture**: Modular MVC structure for maintainability.
- ☁️ **Cloud Integration**: Store videos and thumbnails securely in the cloud.

---

## 🧠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT
- **File Handling**: Multer
- **Media Storage**: Cloudinary
- **Others**: dotenv, CORS, Morgan

---

## 🗂️ Project Structure
```
src/
│
├── controllers/ # Business logic
├── models/ # Mongoose models
├── routes/ # Route definitions
├── middlewares/ # Auth, Multer, Error handling
├── utils/ # Helper classes and functions
├── db/ # MongoDB connection setup
├── constants.js # Constant values
├── index.js # App start point
└── app.js # Express app setup
```


---

## ⚙️ Installation & Setup

```
# 1. Clone the repo
git clone https://github.com/your-username/nodeTube-backend.git
cd nodeTube-backend

# 2. Install dependencies
npm install

# 3. Create environment file
touch .env
```

---
## ⚙️ Add the following to your .env file:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---
## ⚙️ Run the app:
```
npm run dev
```

---
## 🤝 Contributions

Contributions, issues, and feature requests are welcome!

If you’d like to contribute:

1. 🍴 Fork the repository
2. 🌿 Create a new branch (`git checkout -b feature/your-feature-name`)
3. ✍️ Make your changes
4. ✅ Commit your changes (`git commit -m 'Add some feature'`)
5. 📤 Push to the branch (`git push origin feature/your-feature-name`)
6. 🔁 Open a Pull Request

---
