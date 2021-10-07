const fs = require('fs');
const path = require('path');
const configDirectory = path.resolve(process.cwd(), 'config');
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'db-mysql-nyc1-72197-do-user-9969707-0.b.db.ondigitalocean.com',
  database: 'defaultdb',
  user: 'doadmin',
  password: 'VaQflNfEBIOzJicH',
  port: '25060',
  ssl: {
    ca: fs.readFileSync(configDirectory + '../../cert/mysql-ca.crt'),
  },
});

const connect = async () => {
  try {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        connection.query(
          'SELECT * FROM users',
          function (error, results, fields) {
            connection.release();
            console.log(results);
            return error ? reject(error) : resolve(results);
          }
        );
      });
    });
  } catch (error) {
    throw error;
  }
};

export default async (req, res) => {
  try {
    const results = await connect();
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(200).json({ name: 'Error' });
  }
};
