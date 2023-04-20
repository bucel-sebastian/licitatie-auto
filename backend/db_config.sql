

CREATE TABLE `db_2023_client_users` (
  `id` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `creation_date` datetime DEFAULT NULL,
  `verify_token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
)


CREATE TABLE `client_sessions` (
    `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `client_id` varchar(255) NOT NULL,
    `session_token` varchar(255) NOT NULL,
    `created_date` datetime NOT NULL
)

