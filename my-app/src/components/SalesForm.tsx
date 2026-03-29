import { useState, type FormEvent } from "react";
import type { Sale } from "../types/sale";

type SalesFormProps = {
  onAddSale: (sale: Omit<Sale, "id">) => void;
};

function SalesForm({ onAddSale }: SalesFormProps) {
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!productName || !quantity || !price || !date) {
      alert("Semua field harus diisi.");
      return;
    }

    onAddSale({
      productName,
      quantity: Number(quantity),
      price: Number(price),
      date,
    });

    setProductName("");
    setQuantity("");
    setPrice("");
    setDate("");
  };

  return (
    <section className="form-card">
      <div className="form-header">
        <p className="section-label">Input Form</p>
        <h2 className="section-title">Tambah Data Penjualan</h2>
        <p className="section-subtitle">
          Masukkan data transaksi baru melalui form berikut.
        </p>
      </div>

      <form className="sales-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="productName">Nama Produk</label>
            <input
              id="productName"
              type="text"
              placeholder="Masukkan nama produk"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Jumlah</label>
            <input
              id="quantity"
              type="number"
              placeholder="Masukkan jumlah"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Harga Satuan</label>
            <input
              id="price"
              type="number"
              placeholder="Masukkan harga"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Tanggal</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-button">
            Submit Data
          </button>
        </div>
      </form>
    </section>
  );
}

export default SalesForm;