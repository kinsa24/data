import type { Sale } from "../types/sale";

type SalesTableProps = {
  sales: Sale[];
  onDeleteSale: (id: number) => void;
};

function SalesTable({ sales, onDeleteSale }: SalesTableProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (value: string) => {
    return new Intl.DateTimeFormat("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(value));
  };

  const totalRevenue = sales.reduce(
    (acc, sale) => acc + sale.quantity * sale.price,
    0,
  );

  return (
    <section className="sales-section">
      <div className="sales-header">
        <div>
          <p className="section-label">Sales Overview</p>
          <h2 className="section-title">Data Penjualan</h2>
          <p className="section-subtitle">
            Ringkasan transaksi penjualan yang telah tercatat.
          </p>
        </div>
      </div>

      <div className="sales-header-info">
        <div className="info-card">
          <span className="info-card-label">Total Transactions</span>
          <strong className="info-card-value">{sales.length}</strong>
        </div>
        <div className="info-card">
          <span className="info-card-label">Total Revenue</span>
          <strong className="info-card-value">
            {formatCurrency(totalRevenue)}
          </strong>
        </div>
      </div>

      <div className="table-card">
        <div className="table-card-header">
          <h3 className="table-card-title">Daftar Transaksi</h3>
          <span className="table-badge">{sales.length} transaksi</span>
        </div>

        <div className="table-wrapper">
          <table className="sales-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Produk</th>
                <th>Jumlah</th>
                <th>Harga</th>
                <th>Tanggal</th>
                <th>Total</th>
                <th className="action-column">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {sales.length > 0 ? (
                sales.map((sale) => (
                  <tr key={sale.id} className="sales-row">
                    <td>
                      <span className="id-badge">#{sale.id}</span>
                    </td>
                    <td className="product-cell">{sale.productName}</td>
                    <td>{sale.quantity}</td>
                    <td>{formatCurrency(sale.price)}</td>
                    <td>{formatDate(sale.date)}</td>
                    <td className="total-cell">
                      {formatCurrency(sale.quantity * sale.price)}
                    </td>
                    <td className="action-cell">
                      <button
                        type="button"
                        className="delete-button"
                        onClick={() => onDeleteSale(sale.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>
                    <div className="empty-state">
                      <p className="empty-state-title">
                        Belum ada data penjualan
                      </p>
                      <p className="empty-state-text">
                        Data transaksi akan muncul di tabel ini setelah
                        ditambahkan.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default SalesTable;
