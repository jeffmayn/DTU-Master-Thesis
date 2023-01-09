import mysql from "mysql2";
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// create connection
/*
const db = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "mydb"
});
*/

const db = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME
});

export default db;

