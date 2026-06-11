-- Create schema
CREATE SCHEMA eurovision;

-- Lookup table for countries
CREATE TABLE eurovision.paises (
    codigo CHAR(3) PRIMARY KEY,  -- e.g. 'ESP', 'SWE'
    nombre TEXT NOT NULL         -- e.g. 'Spain', 'Sweden'
);

-- Table for voters
CREATE TABLE eurovision.votantes (
    id SERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    pais_codigo CHAR(3) REFERENCES eurovision.paises(codigo)
);

-- Table for performances (actuaciones)
CREATE TABLE eurovision.actuaciones (
    id INTEGER PRIMARY KEY,  -- Manual ID
    cancion TEXT NOT NULL,
    pais_codigo CHAR(3) REFERENCES eurovision.paises(codigo)
);

-- Join table for votes
CREATE TABLE eurovision.votos (
    votante_id INTEGER REFERENCES eurovision.votantes(id) ON DELETE CASCADE,
    actuacion_id INTEGER REFERENCES eurovision.actuaciones(id) ON DELETE CASCADE,
    puntos INTEGER NOT NULL,
    PRIMARY KEY (votante_id, actuacion_id),
    CHECK (puntos IN (1, 2, 3, 4, 5, 6, 7, 8, 10, 12))
);


INSERT INTO eurovision.paises (codigo, nombre) VALUES
('ESP', 'Spain'),
('SWE', 'Sweden'),
('ITA', 'Italy'),
('NOR', 'Norway'),
('FIN', 'Finland'),
('FRA', 'France'),
('UKR', 'Ukraine'),
('CHE', 'Switzerland'),
('ISL', 'Iceland'),
('DEU', 'Germany');

INSERT INTO eurovision.votantes (nombre, pais_codigo) VALUES
('Alice', 'ESP'),
('Bob', 'SWE'),
('Carla', 'ITA');

INSERT INTO eurovision.actuaciones (id, cancion, pais_codigo) VALUES
(101, 'Euphoria', 'SWE'),
(102, 'Soldi', 'ITA'),
(103, 'SloMo', 'ESP'),
(104, 'Give That Wolf a Banana', 'NOR'),
(105, 'Cha Cha Cha', 'FIN'),
(106, 'Voilà', 'FRA'),
(107, 'Stefania', 'UKR'),
(108, 'Tout l’univers', 'CHE'),
(109, '10 Years', 'ISL'),
(110, 'Ghost', 'DEU');


INSERT INTO eurovision.votos (votante_id, actuacion_id, puntos) VALUES
(1, 105, 12),  -- Finland
(1, 101, 10),  -- Sweden
(1, 102, 8),   -- Italy
(1, 103, 7),   -- Spain
(1, 104, 6),   -- Norway
(1, 106, 5),   -- France
(1, 107, 4),   -- Ukraine
(1, 108, 3),   -- Switzerland
(1, 109, 2),   -- Iceland
(1, 110, 1);   -- Germany

INSERT INTO eurovision.votos (votante_id, actuacion_id, puntos) VALUES
(2, 101, 12),
(2, 102, 10),
(2, 103, 8),
(2, 104, 7),
(2, 105, 6),
(2, 106, 5),
(2, 107, 4),
(2, 108, 3),
(2, 109, 2),
(2, 110, 1);



-- vista para ver los puntos de los votos 
SELECT a.pais_codigo, a.cancion, SUM(v.puntos) AS total
FROM eurovision.votos AS v
INNER JOIN eurovision.actuaciones AS a ON v.actuacion_id = a.id
GROUP BY a.pais_codigo, a.cancion
ORDER BY total DESC;