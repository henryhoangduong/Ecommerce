use ecommerce;
CREATE TABLE Users (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name varchar(255),
    email varchar(255),
    address text,
    phone varchar(255),
    role int default 0,
    password varchar(255)
);

CREATE TABLE Products (
    id int NOT NULL,
    name varchar(255),
    description text,
    price decimal,
    category_id int,
    brand varchar(255),
    PRIMARY KEY (id),
    image_url varchar(4000),
    FOREIGN KEY (category_id) REFERENCES Themes(id)
);



CREATE TABLE Themes (
    id int  primary key Not null,
    name varchar(255)
);

Create table Orders(
	id int primary key not null AUTO_INCREMENT,
    customer_id int,
    order_date date,
    total_amount decimal,
    payment_method varchar(255),
    foreign key (customer_id) references Users(id)
);
Create table Order_item(
	id int primary key not null,
    product_id int,
    order_id int,
    quantity int,
    price decimal,
    foreign key (product_id) references Products(id),
    foreign key (order_id) references Orders(id)
);

create table Reviews(
	id int primary key not null,
    customer_id int,
    product_id int,
    rating decimal,
    comment text,
    foreign key (product_id) references Products(id),
    foreign key (customer_id) references Users(id)
);

create table Carts(
	id int primary key not null auto_increment,
    user_id int,
    product_id int,
    quantities int,
    foreign key (product_id) references Products(id),
    foreign key (user_id) references Users(id)
);

Insert into Carts values (1,1,1,10);
select * from users;

SELECT
    Carts.id AS cart_id,
    Products.name,
    Users.name,
    quantities
FROM
    Carts
JOIN
    Products ON Carts.product_id = Products.id
JOIN
    Users ON Carts.user_id = Users.id
WHERE
    Carts.id = 1;

/*Admin lấy lịch sử danh sách của order*/
SELECT *
FROM Orders
ORDER BY order_date DESC;

/*Đổi user id 2 thành 1*/
UPDATE Users
SET user_id = 1
WHERE user_id = 2;