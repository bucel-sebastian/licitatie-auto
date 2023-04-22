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

CREATE TABLE `db_2023_client_sessions` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `client_id` varchar(255) NOT NULL,
  `session_token` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL
)

CREATE TABLE `db_2023_auctions` (
  `id` int(11) NOT NULL PRIMARY KEY,
  `status` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `seller` varchar(255) NOT NULL,
  `seller_type` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `short_description` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `make` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `year` varchar(255) NOT NULL,
  `vin` varchar(255) NOT NULL,
  `mileage` varchar(255) NOT NULL,
  `engine` varchar(255) NOT NULL,
  `drivetrain` varchar(255) NOT NULL,
  `transmission` varchar(255) NOT NULL,
  `transmission_desc` varchar(255) NOT NULL,
  `body_style` varchar(255) NOT NULL,
  `exterior_color` varchar(255) NOT NULL,
  `interior_color` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `create_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `admin_take` text NOT NULL,
  `highlights` text NOT NULL,
  `equipment` text NOT NULL,
  `modifications` text NOT NULL,
  `known_flaws` text NOT NULL,
  `recent_service_history` text NOT NULL,
  `other_items_included` text NOT NULL,
  `ownership_history` text NOT NULL,
  `seller_notes` text NOT NULL,
  `featured_image` text NOT NULL,
  `images` text NOT NULL,
  `videos` text NOT NULL,
  `car_report_link` text NOT NULL,
  `car_report_type` varchar(255) NOT NULL
)

CREATE TABLE `db_2023_auctions_comments` (
  `id` varchar(255) NOT NULL PRIMARY KEY,
  `auction` varchar(255) NOT NULL,
  `parent` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `message_type` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `create_date` datetime NOT NULL,
  `likes` int(11) NOT NULL DEFAULT 0
)

CREATE TABLE `db_2023_auctions_bids` (
  `id` varchar(255) NOT NULL PRIMARY KEY,
  `client` varchar(255) NOT NULL,
  `auction` varchar(255) NOT NULL,
  `value` varchar(255) NOT NULL,
  `create_date` varchar(255) NOT NULL
)

CREATE TABLE `db_2023_auctions_questions` (
  `id` varchar(255) NOT NULL PRIMARY KEY,
  `client` varchar(255) NOT NULL,
  `auction` varchar(255) NOT NULL,
  `question` text NOT NULL,
  `answer` text NOT NULL,
  `create_date` datetime NOT NULL
)