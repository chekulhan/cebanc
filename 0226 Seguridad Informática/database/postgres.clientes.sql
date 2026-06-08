CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    email VARCHAR(50),
    telefono VARCHAR(20),
    preferencias TEXT,
    fecha_registro DATE
);

-- Insertar algunos registros
INSERT INTO clientes (nombre, email, telefono, preferencias, fecha_registro) VALUES
('Juan Pérez', 'juan@example.com', '600123456', 'todos', '2022-05-10'),
('Carlos Sánchez', 'carlos@example.com', '600987654', 'todos', '2023-01-20'),
('Laura Fernández', 'laura@example.com', '600555444', 'todos', '2023-03-15'),
('Maria García', 'maria@example.com', '600333222', 'todos', '2021-11-05');
