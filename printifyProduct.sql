CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    body_color VARCHAR(50) NOT NULL,
    lid_color VARCHAR(50) NOT NULL,
    inscription TEXT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
