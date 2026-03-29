import { Request, Response } from "express";
import { db } from "../config/db"; // ✅ Fix: was "../config/db"

export const getSales = async (_req: Request, res: Response) => {
  try {
    const [rows] = await db.query(
      "SELECT id, product_name, quantity, price, date FROM sales ORDER BY id DESC"
    );

    const formattedRows = (rows as any[]).map((item) => ({
      id: item.id,
      productName: item.product_name,
      quantity: item.quantity,
      price: Number(item.price),
      date: item.date,
    }));

    res.json(formattedRows);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil data penjualan",
      error,
    });
  }
};

export const createSale = async (req: Request, res: Response) => {
  try {
    const { productName, quantity, price, date } = req.body;

    if (!productName || !quantity || !price || !date) {
      return res.status(400).json({
        message: "Semua field wajib diisi",
      });
    }

    const [result] = await db.query(
      "INSERT INTO sales (product_name, quantity, price, date) VALUES (?, ?, ?, ?)",
      [productName, quantity, price, date]
    );

    res.status(201).json({
      message: "Data penjualan berhasil ditambahkan",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan data penjualan",
      error,
    });
  }
};

export const deleteSale = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM sales WHERE id = ?", [id]);

    res.json({
      message: "Data penjualan berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus data penjualan",
      error,
    });
  }
};