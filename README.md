# 💬 MERN STACK – Gerçek Zamanlı Sohbet Uygulaması

Bu proje, **MERN Stack** (MongoDB, Express, React, Node.js) ve **Socket.io** kullanarak geliştirilmiş, gerçek zamanlı bir sohbet uygulamasıdır.  

Amaç:

- WebSocket tabanlı **gerçek zamanlı veri iletişimini** anlamak  
- **Olay odaklı (event-driven)** bir mimariyi deneyimlemek  
- JWT ile **kimlik doğrulama** ve korumalı alan mantığını görmek  
- Modern frontend (React + Vite) ile backend (Express + Socket.io) entegrasyonunu öğrenmek  

---

## 🚀 Özellikler

- ✅ **JWT tabanlı kimlik doğrulama**
  - Kayıt ol / giriş yap
  - Oturum bilgisi `localStorage` üzerinde tutulur
- ✅ **Gerçek zamanlı mesajlaşma**
  - Socket.io ile anlık mesaj alışverişi
  - Birden fazla istemci arasında senkron sohbet
- ✅ **Kullanıcı listesi**
  - Sisteme kayıtlı kullanıcıları listeleme
- ✅ **Çevrimiçi / bağlantı durumu takibi (temel)**
  - Kullanıcı bağlandığında/ayrıldığında socket event’leri
- ✅ **Node.js + Express + MongoDB**
  - Kullanıcı verileri MongoDB’de tutulur
- ✅ **Modern frontend**
  - React + Vite ile hızlı geliştirme ortamı
  - Basit ve anlaşılır arayüz

> Not: Proje şu an temel chat işlevlerini içerir. Gruplar, özel mesajlar, mesaj geçmişinin MongoDB’ye kaydedilmesi gibi özellikler üzerine genişletmeye uygundur.

---

## 🧱 Kullanılan Teknolojiler

### Frontend
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [Socket.io Client](https://socket.io/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Socket.io](https://socket.io/)
- [JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 📁 Proje Klasör Yapısı

```bash
real-time-chat-app/
│
├── server/                  # Backend (Express + Socket.io + MongoDB)
│   ├── config/
│   │   └── db.js            # MongoDB bağlantı ayarları
│   ├── controllers/
│   │   ├── authController.js
│   │   └── messageController.js (isteğe bağlı)
│   ├── middleware/
│   │   └── authMiddleware.js # JWT kontrolü
│   ├── models/
│   │   ├── User.js
│   │   └── Message.js       # (genişletme için)
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── messageRoutes.js # (genişletme için)
│   ├── socket/
│   │   └── socketHandler.js # Socket.io event yönetimi
│   ├── .env                 # Ortam değişkenleri (localde)
│   ├── server.js            # Express + Socket.io sunucusu
│   └── package.json
│
└── client/                  # Frontend (React + Vite)
    ├── public/
    ├── src/
    │   ├── api/
    │   │   └── api.js       # Axios instance
    │   ├── components/
    │   │   ├── Sidebar.jsx
    │   │   ├── ChatWindow.jsx
    │   │   └── MessageInput.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   ├── pages/
    │   │   ├── LoginRegister.jsx
    │   │   └── ChatPage.jsx
    │   ├── socket.js        # Socket.io client bağlantısı
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .env
    ├── package.json
    └── vite.config.js
