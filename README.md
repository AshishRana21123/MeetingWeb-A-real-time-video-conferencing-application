# MeetingWeb - Real-Time Video Conferencing Application

MeetingWeb is a real-time video conferencing web application that allows users to create and join online meetings using a unique meeting code.

The application provides real-time video and audio communication along with features such as chat, screen sharing, meeting history, and user authentication.

## 🚀 Features

- User Registration and Login
- Create and Join Meetings
- Real-Time Video and Audio Calling
- Screen Sharing
- Real-Time Chat
- Meeting History
- Unique Meeting Codes
- Real-Time User Join/Leave Notifications
- Responsive User Interface

## 🛠️ Technologies Used

### Frontend
- React.js
- React Router
- Material UI
- Axios
- WebRTC
- Socket.IO Client

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB
- Mongoose
- JWT-style Token Authentication
- Bcrypt

## 🔄 How the Application Works

1. User registers an account.
2. User logs in with their username and password.
3. After login, the user can enter a meeting code.
4. The meeting code is stored in the user's meeting history.
5. Users joining the same meeting code are connected through Socket.IO.
6. WebRTC establishes peer-to-peer audio and video communication between users.
7. Socket.IO is used for signaling and real-time chat communication.
8. Users can also share their screen during the meeting.

## 📹 Real-Time Communication

The application uses **WebRTC** for peer-to-peer audio and video communication.

**Socket.IO** is used for:
- Signaling
- User join/leave notifications
- Real-time chat
- Exchanging WebRTC connection information

## 🗄️ Database

MongoDB is used to store:

- User information
- Encrypted passwords
- Authentication tokens
- Meeting history

## 📁 Project Structure

```text
MeetingWeb/
│
├── Backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── controllers/
│   │
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   └── App.js
│   │
│   └── package.json
│
└── README.md

cd Backend
npm install
npm run dev

cd frontend
npm install
npm start

PORT=8000
MONGODB_URI=your_mongodb_connection_string

👨‍💻 Author
Ashish Rana
Computer Science Engineering Student