import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "EasyPayZ",
  password: process.env.DB_PWD,
  port: 3306,
});

connection.addListener("error", (err) => {
  if (err instanceof Error) {
    console.log(`Got an createConnection error:`, err);
  }
});

export default connection;
