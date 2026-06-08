-- Create table for albums
CREATE TABLE albums (
    code        char(5),
    title       varchar(50),
    artist_id   integer,
    release_date date,
    genre       varchar(20),
    duration    interval hour to minute,
    CONSTRAINT unique_release UNIQUE(release_date)
);

-- Insert some sample data
INSERT INTO albums (code, title, artist_id, release_date, genre) VALUES
    ('A1001', 'Dark Side of the Moon', 1, '1973-03-01', 'Rock'),
    ('B2020', 'Thriller', 2, '1982-11-30', 'Pop'),
    ('C3030', 'Kind of Blue', 3, '1959-08-17', 'Jazz'),
    ('D4040', 'Back in Black', 4, '1980-07-25', 'Rock'),
    ('E5050', '21', 5, DEFAULT, 'Soul');