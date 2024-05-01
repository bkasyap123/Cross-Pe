import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "EasyPayZ",
  password: process.env.DB_PWD,
});

export default connection;
