# ExpressLearning 🐋

โปรเจคนี้เป็นการเรียนรู้การสร้าง REST API ด้วย **Node.js + Express + MongoDB (Mongoose)**

---

## 🗂️ โครงสร้างโปรเจค

```
expresslerning/
├── index.js                        # จุดเริ่มต้นของแอป (Entry Point)
├── databaseconnect.js              # เชื่อมต่อ MongoDB
├── .env                            # ตัวแปร environment (CONNECTION_STRING, API_PORT)
├── controllers/
│   └── user.Controller.js          # รับ request และส่ง response
├── services/
│   └── user.service.js             # logic การทำงานกับ database
├── models/
│   └── User.js                     # โครงสร้างข้อมูล User (Mongoose Schema)
├── routes/
│   ├── router.js                   # รวม router ทั้งหมด
│   ├── user.router.js              # กำหนด route ของ User
│   └── family.router.js            # กำหนด route ของ Family
└── middlewares/
    └── check.middleware.js         # ตรวจสอบ ID ก่อนเข้า controller
```

---

## 🔄 การทำงานของระบบ (Flow)

```
Request → index.js → router.js → user.router.js → middleware → controller → service → model → MongoDB
```

| ชั้น | ไฟล์ | หน้าที่ |
|------|------|---------|
| **Entry Point** | `index.js` | เริ่มแอป, เชื่อม middleware และ router |
| **Database** | `databaseconnect.js` | เชื่อมต่อ MongoDB Atlas |
| **Router** | `routes/router.js` | รวม route ทั้งหมดเข้าด้วยกัน |
| **Route** | `routes/user.router.js` | กำหนด path และเรียก controller |
| **Middleware** | `middlewares/check.middleware.js` | ตรวจสอบความถูกต้องของ ID (ต้องมี 24 ตัวอักษร) |
| **Controller** | `controllers/user.Controller.js` | รับ req/res และเรียก service |
| **Service** | `services/user.service.js` | logic การ query ข้อมูลจาก database |
| **Model** | `models/User.js` | กำหนด Schema ของ User |

---

## 🛣️ API Endpoints

| Method | Path | หน้าที่ |
|--------|------|---------|
| `GET` | `/user` | ดึงข้อมูล User ทั้งหมด |
| `GET` | `/user/:id` | ดึงข้อมูล User ตาม ID |
| `POST` | `/user` | สร้าง User ใหม่ |
| `PUT` | `/user/:id` | แก้ไขข้อมูล User |
| `DELETE` | `/user/:id` | ลบ User |

---

## 👤 โครงสร้างข้อมูล User

```json
{
  "name": "string (required)",
  "birthdate": "Date",
  "phone": "string",
  "email": "string (required, unique)",
  "password": "string (required)"
}
```

---

## ⚙️ การติดตั้งและรัน

### 1. ติดตั้ง dependencies
```bash
npm install
```

### 2. ตั้งค่า .env
```env
CONNECTION_STRING=mongodb+srv://<user>:<password>@cluster0.xxx.mongodb.net/
API_PORT=3000
```
> ⚠️ ถ้า password มีอักขระพิเศษ เช่น `@` ให้ encode เป็น `%40`

### 3. เปิด IP Whitelist ใน MongoDB Atlas
- ไปที่ **Security → Database & Network Access → IP Access List**
- กด **+ Add IP Address**
- ใส่ `0.0.0.0/0` เพื่ออนุญาตทุก IP (สำหรับ dev)

### 4. รันโปรเจค
```bash
npm run dev
```

---

## 🪜 ขั้นตอนการพัฒนา (Development Journey)

1. **สร้างโปรเจคเริ่มต้น** — ติดตั้ง Express และสร้าง `index.js` พร้อม route พื้นฐาน `/` และ `/whale`
2. **แยก Router** — แยก route ออกจาก `index.js` มาไว้ใน `routes/` และสร้าง `router.js` เป็นตัวรวม
3. **สร้าง Controller** — แยก logic การตอบ response ออกมาไว้ใน `controllers/user.Controller.js`
4. **สร้าง Service** — แยก logic การทำงานกับ database ออกมาไว้ใน `services/user.service.js`
5. **เชื่อมต่อ MongoDB Atlas** — สร้าง `databaseconnect.js` และตั้งค่า `.env` พร้อมแก้ปัญหา
   - encode `@` ใน password เป็น `%40`
   - เพิ่ม IP Whitelist ใน MongoDB Atlas
6. **สร้าง Model** — กำหนด Mongoose Schema ใน `models/User.js`
7. **สร้าง Middleware** — สร้าง `check.middleware.js` ตรวจสอบ ID ว่ามี 24 ตัวอักษร (MongoDB ObjectId format)
8. **ครบ CRUD** — เชื่อมทุกชั้นเข้าด้วยกันให้ครบ GET / POST / PUT / DELETE

---

## 📦 Dependencies

| Package | หน้าที่ |
|---------|---------|
| `express` | Web framework |
| `mongoose` | MongoDB ODM |
| `dotenv` / `dotenvx` | จัดการ environment variables |
| `nodemon` | Auto-restart เมื่อไฟล์เปลี่ยน (dev) |
