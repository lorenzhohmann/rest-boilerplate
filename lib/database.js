const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
});

connection.connect((err) => {
  if (err) {
    console.log(`\u001b[31m[ERR] Could not establish database connection`);
    return;
  }
  console.log(`\x1b[0m[LOG] Database connected successfully`);
});

module.exports = connection;
