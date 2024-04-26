CREATE table users (
  id serial primary key,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL unique,
  created timestamp default current_timestamp
);

INSERT INTO
  users (name, email)
VALUES
  ('Gilberto', 'gilvarsan@gmail.com');