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







## ⚙️ Kurulum
1️⃣ Repoyu Klonla
git clone https://github.com/<KULLANICI_ADI>/MERN-STACK_real-time-chat-app.git
cd MERN-STACK_real-time-chat-app/real-time-chat-app

🖥️ Backend Kurulumu (server)
cd server
npm install

.env Dosyası

server/.env

PORT=5000
MONGO_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=supersecretkey
CLIENT_URL=http://localhost:5173

Sunucuyu Başlat
npm run dev
# veya
npm start


Başarılı çalışınca:

✅ Server 5000 portunda çalışıyor
✅ MongoDB bağlantısı başarılı

💻 Frontend Kurulumu (client)

Yeni bir terminal aç:

cd client
npm install

.env Dosyası

client/.env

VITE_API_URL=http://localhost:5000

Frontend’i Başlat
npm run dev


Ardından tarayıcıda:

http://localhost:5173

🔐 Kimlik Doğrulama Akışı

Kullanıcı kayıt olur → backend şifreyi hashleyip MongoDB’ye kaydeder.

Giriş yapıldığında backend JWT üretir → frontend’e gönderir.

Frontend, token ve kullanıcıyı localStorage’a kaydeder.

Kullanıcı /chat sayfasına yönlendirilir.

🔌 Socket.io Olay Akışı
Client → Server

join — kullanıcı giriş yapınca

send:message — mesaj gönderme olayı

Server → Client

receive:message — tüm kullanıcılara mesaj yayını

user:online — kullanıcı bağlandı

user:offline — kullanıcı ayrıldı

Event isimleri client ve server arasında birebir uyumludur.

🌐 API Endpoint’leri
Auth
POST /api/auth/register

Kullanıcı kaydı.

POST /api/auth/login

JWT üretir.

Users
GET /api/users

Sistemdeki tüm kullanıcıları listeler.

Messages (Genişletmeye uygun)
GET /api/messages/:receiverId

Belirli iki kullanıcı arasındaki mesaj geçmişini döner.

🧪 Geliştirilebilecek Özellikler

Özel mesajlaşma (private chat)

Oda sistemi / grup sohbetleri

Mesaj geçmişinin MongoDB’ye kaydı

Yazıyor... bildirimi (typing indicator)

Okundu bilgisi (read receipts)

Kullanıcı avatarları

Responsive tasarım

Bildirim sistemi

🎯 Projenin Amacı

Bu proje ile:

Gerçek zamanlı WebSocket mantığı

Socket.io ile event-driven mimari

JWT doğrulama akışı

MongoDB veritabanı yönetimi

React + Vite SPA geliştirme

Client – Server entegrasyonu

gibi modern web geliştirme teknikleri uygulanmıştır.
