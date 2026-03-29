# 📊 Data Penjualan

Aplikasi dashboard penjualan fullstack berbasis **React + TypeScript** (frontend) dan **Express + MySQL** (backend).

---

## 🛠️ Tech Stack

| Layer | Teknologi |
|---|---|
| Frontend | React, TypeScript, Vite |
| Backend | Node.js, Express, TypeScript |
| Database | MySQL |
| HTTP Client | Fetch API |
| ORM/Driver | mysql2 |

---

## 📁 Struktur Project

```
DataPenjualan/
├── backend/
│   ├── src/
│   │   ├── App.ts                  # Express app & middleware
│   │   ├── server.ts               # Entry point server
│   │   ├── db.ts                   # Koneksi MySQL pool
│   │   ├── controllers/
│   │   │   └── salesController.ts  # Logic GET, POST, DELETE
│   │   └── routes/
│   │       └── salesRoutes.ts      # Definisi route /api/sales
│   ├── .env                        # Konfigurasi environment
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx                 # Root component & fetch logic
│   │   ├── main.tsx                # Entry point React
│   │   ├── index.css               # Global styling
│   │   ├── components/
│   │   │   ├── SalesForm.tsx       # Form tambah data
│   │   │   └── SalesTable.tsx      # Tabel data penjualan
│   │   └── types/
│   │       └── sale.ts             # Type definition Sale
│   ├── .env                        # Konfigurasi Vite
│   ├── package.json
│   └── tsconfig.json
│
└── schema.sql                      # SQL schema tabel sales
```

---

## ⚙️ Setup & Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/DataPenjualan.git
cd DataPenjualan
```

### 2. Setup Database MySQL

Import schema ke MySQL:

```bash
mysql -u root -p < schema.sql
```

Atau buka `schema.sql` lewat phpMyAdmin / TablePlus / DBeaver dan jalankan.

### 3. Setup Backend

```bash
cd backend
npm install
```

Buat file `.env` di folder `backend/`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=datapenjualan
PORT=5000
```

Jalankan backend:

```bash
npm run dev
```

Backend berjalan di `http://localhost:5000`

### 4. Setup Frontend

```bash
cd frontend
npm install
```

Buat file `.env` di folder `frontend/`:

```env
VITE_API_URL=http://localhost:5000
```

Jalankan frontend:

```bash
npm run dev
```

Frontend berjalan di `http://localhost:5173`

---

## 🗄️ Skema Database

```sql
CREATE TABLE sales (
  id           INT            NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255)   NOT NULL,
  quantity     INT            NOT NULL,
  price        DECIMAL(15, 2) NOT NULL,
  date         DATE           NOT NULL,
  PRIMARY KEY (id)
);
```

---

## 🔌 API Endpoints

Base URL: `http://localhost:5000`

| Method | Endpoint | Deskripsi |
|---|---|---|
| GET | `/api/sales` | Ambil semua data penjualan |
| POST | `/api/sales` | Tambah data penjualan baru |
| DELETE | `/api/sales/:id` | Hapus data berdasarkan ID |

### Contoh Request Body (POST)

```json
{
  "productName": "Laptop Asus",
  "quantity": 2,
  "price": 7500000,
  "date": "2026-03-29"
}
```

### Contoh Response (GET)

```json
[
  {
    "id": 1,
    "productName": "Laptop Asus",
    "quantity": 2,
    "price": 7500000,
    "date": "2026-03-29T00:00:00.000Z"
  }
]
```

---

## ✨ Fitur

- ✅ Tampilkan data penjualan dari MySQL
- ✅ Tambah data penjualan baru via form
- ✅ Hapus data penjualan
- ✅ Hitung total penjualan otomatis
- ✅ Format mata uang Rupiah (IDR)
- ✅ Format tanggal Bahasa Indonesia
- ✅ Responsive design (mobile-friendly)

---

## 📝 Lisensi

MIT License — bebas digunakan dan dimodifikasi.
