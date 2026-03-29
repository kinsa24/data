import { useEffect, useState } from "react";
import SalesForm from "./components/SalesForm";
import SalesTable from "./components/SalesTable";
import type { Sale } from "./types/sale";

function App() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchSales = async () => {
    try {
      const response = await fetch(`${API_URL}/api/sales`);
      const data = await response.json();
      console.log("DATA DARI BACKEND:", data);
      setSales(data);
    } catch (error) {
      console.error("Error fetch sales:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  const handleAddSale = async (sale: Omit<Sale, "id">) => {
    try {
      const response = await fetch(`${API_URL}/api/sales`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sale),
      });

      if (!response.ok) {
        throw new Error("Gagal tambah data");
      }

      await fetchSales();
    } catch (error) {
      console.error("Error add sale:", error);
    }
  };

  const handleDeleteSale = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/api/sales/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Gagal hapus data");
      }

      await fetchSales();
    } catch (error) {
      console.error("Error delete sale:", error);
    }
  };

  return (
    <main className="container">
      <header>
        <h1 className="page-title">Sales Dashboard</h1>
        <p className="page-description">
          Manage and track sales transactions in real-time. Connected to Express
          backend with MySQL database.
        </p>
      </header>

      <div className="dashboard-layout">
        <SalesForm onAddSale={handleAddSale} />
        {loading ? (
          <div className="loading-state">
            <p>Loading sales data...</p>
          </div>
        ) : (
          <SalesTable sales={sales} onDeleteSale={handleDeleteSale} />
        )}
      </div>
    </main>
  );
}

export default App;
