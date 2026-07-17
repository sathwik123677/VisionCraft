# 🎨 VisionCraft
<p align="center">
  <img src="./client/src/assets/logo.svg" alt="VisionCraft Logo" width="260"/>
</p>
<p align="center">
  <b>Transform Ideas into Stunning AI Visuals</b>
</p>
<p align="center">
  VisionCraft is a full-stack AI-powered image generation platform that converts natural language prompts into high-quality AI-generated artwork. It features secure authentication, a credit-based generation system, multiple artistic styles, and Razorpay-powered payments.
</p>
---
## ✨ Features
- 🔐 JWT Authentication
- 🎨 AI Image Generation
- 💳 Credit-Based Image Generation
- 💰 Razorpay Payment Integration
- ⚡ Fast & Responsive UI
- 📥 Download Generated Images
- 🖼️ Beautiful Landing Page
- 📱 Fully Responsive Design
- ☁️ MongoDB Database
- 🔒 Protected API Routes
---
## 🚀 Live Demo
> Coming Soon
---
## 🛠 Tech Stack
### Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router
- Framer Motion
### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
### AI
- Stability AI API
### Payments
- Razorpay
---

## 📂 Project Structure

```text
VisionCraft
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   └── App.jsx
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
└── README.md
```
---
## ⚙️ Installation
### Clone Repository
```bash
git clone https://github.com/your-username/VisionCraft.git
```
```bash
cd VisionCraft
```
---
### Frontend
```bash
cd client
npm install
npm run dev
```
---
### Backend
```bash
cd server
npm install
npm run server
```
---
## 🔑 Environment Variables
Create a `.env` file inside the **server** directory.
```env
MONGODB_URI=

JWT_SECRET=

STABILITY_API_KEY=

RAZORPAY_KEY_ID=

RAZORPAY_KEY_SECRET=

CURRENCY=INR
```
---
## 🎯 How It Works
1. User registers or logs in.
2. User purchases credits using Razorpay.
3. Credits are added to the account after payment verification.
4. User enters a prompt.
5. VisionCraft sends the prompt to the AI model.
6. AI generates a high-quality image.
7. One credit is deducted for every successful generation.
8. User can preview and download the generated image.
---
## 🌟 Future Enhancements
- 🖼 Gallery Page
- 📚 Image History
- ❤️ Favorite Images
- 🧠 Prompt Enhancer
- 📦 Multiple Image Generation
- 🎭 More AI Styles
- 🌓 Dark Mode
- ☁️ Cloud Image Storage
---
## 👨‍💻 Author
**Pathivada Sathwik**
- GitHub: https://github.com/sathwik123677
- LinkedIn: https://linkedin.com/in/pathivada-sathwik

<p align="center">
Made with ❤️ using React, Node.js, MongoDB & AI
</p>