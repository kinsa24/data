-- ============================================
-- Database: DataPenjualan
-- Table: sales
-- ============================================
 
CREATE DATABASE IF NOT EXISTS datapenjualan;
 
USE datapenjualan;
 
CREATE TABLE IF NOT EXISTS sales (
  id           INT            NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255)   NOT NULL,
  quantity     INT            NOT NULL,
  price        DECIMAL(15, 2) NOT NULL,
  date         DATE           NOT NULL,
 
  PRIMARY KEY (id)
);