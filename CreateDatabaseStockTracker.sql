Create Database StockTracker
Go

CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY (1, 1),
    FirstName VARCHAR (50) NOT NULL,
    LastName VARCHAR (50) NOT NULL,
    UserName VARCHAR (50) NOT NULL,
	Email VARCHAR (50) NOT NULL,
    Password VARCHAR (100) NOT NULL,
    UserType SMALLINT not null,
	Address VARCHAR (100)
);
Go

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY (1, 1),
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	Date DATETIME,
	OrderStatus SMALLINT NOT NULL DEFAULT(0)
);
Go

CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY (1, 1),
    CategoryName VARCHAR (50) NOT NULL,
	CategoryDescription VARCHAR (250) NOT NULL
);
Go

CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY (1, 1),
	ProductName VARCHAR (50) NOT NULL,
    Price FLOAT NOT NULL,
	StockNum INT NOT NULL DEFAULT(0),
	CategoryID INT FOREIGN KEY REFERENCES Categories(CategoryID),
);
Go

CREATE TABLE OrderItems (
    OrderID INT FOREIGN KEY REFERENCES Orders(OrderID),
	UserID INT FOREIGN KEY REFERENCES Users(UserID),
	Quantity INT NOT NULL
);
Go