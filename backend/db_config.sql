

CREATE TABLE `client_users` (
    id varchar(255) NOT NULL PRIMARY KEY,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    phone_number varchar(255) NOT NULL
)