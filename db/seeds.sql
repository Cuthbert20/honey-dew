CREATE TABLE todo (
todo_id SERIAL PRIMARY KEY,
todo_name VARCHAR(100),
todo_info VARCHAR(255),
todo_rank INT,
todo_urgent BOOLEAN,
todo_danger BOOLEAN
)

INSERT INTO todo (todo_name, todo_info, todo_rank, todo_urgent, todo_danger)
VALUES
('Wash Dishes', 'clean and scrub dishes after dinner', 5, false, false),
('Build Cabin', 'build a cabin from the ground up', 7, true, false),
('Kill Wasps', 'get spray and kill wasps and then knock down hives', 9, true, true)

SELECT * FROM todo