INSERT INTO todo (todo_name, todo_info, todo_rank, todo_urgent, todo_danger)
VALUES
(${todo_name}, ${todo_info}, ${todo_rank}, ${todo_urgent}, ${todo_danger});

SELECT * FROM todo;
