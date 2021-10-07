const fs = require('fs');
const path = require('path');
const configDirectory = path.resolve(process.cwd(), 'config');
var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit: 4425,
  host: 'db-mysql-nyc1-72197-do-user-9969707-0.b.db.ondigitalocean.com',
  database: 'defaultdb',
  user: 'doadmin',
  password: 'VaQflNfEBIOzJicH',
  port: '25060',
  ssl: {
    ca: '-----BEGIN CERTIFICATE-----\nMIIEQTCCAqmgAwIBAgIUKsdAYlcr5x/4m67+zuXMidYdB9UwDQYJKoZIhvcNAQEM\nBQAwOjE4MDYGA1UEAwwvYmFiYTYyYzMtYTQyYy00NjI5LThjZTktY2QyMzFjOTJk\nZTc0IFByb2plY3QgQ0EwHhcNMjExMDA2MDI0NzAwWhcNMzExMDA0MDI0NzAwWjA6\nMTgwNgYDVQQDDC9iYWJhNjJjMy1hNDJjLTQ2MjktOGNlOS1jZDIzMWM5MmRlNzQg\nUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAPE0JqaU\nSfMqGaZZig8Xiw0rjsAvQSUCD5lRTKDpzxcT4jefbylk+L3coOyRH9ynE+0k2fRN\nMtbu7iuwoVRHsBjMMjnMHyMgye8oy878VlnBZzDXbsZi8A1RA/KFHDVDRc67R9Wr\nHWCkySqEbjt1w/KtYF9/E6/Cr+PHn58yG5l84EpP/h0KTUV19rUGxsYCa4ou0eE4\ny+us0KwcmY0cY1rLJ9StwcJ35vaC6ZAVAVPobEWLDjPrMWOa5Xxr1tyzqhX9o5gZ\nLNCrTRnQ1OiP5CxzwfzwQIHDuVmZTaVrdaDu/kuATslqq0xt+E34qSZ8xfNsL8Lo\nQRpsqp39HG/LahA2cIBMNif4wui3lSBrLgP8FJIpbvf1EGEEpNaY8CwyM8gLHmyR\nM0QjUJc1n5z1jEIMoxwPZuWpwD1oCO9VmC6RTkw5pcf4PHBOf28sxDm1lLI+lJKQ\nBhk3ZyGHW3F8gzALAtrGvm/AVW/TA7jMEdAqlRFu99w8hgEG4CeftCqi6wIDAQAB\noz8wPTAdBgNVHQ4EFgQUuW7unmXkBUtTSyPXPbGmjt9tbyYwDwYDVR0TBAgwBgEB\n/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBADAEqfg2rdOGJmQ5\nKsvnonOESUvL4EjqnUPBzOKRp2n5suvjPjWAvsNRPi8YxXkLJnjMaQ6xy/UwaemM\n3UuoEfWj5u8yZbriNBBEka9UG2/668zUf7XYuPa5U042BPxTo/EoBNjpRFQPBURM\nLzqVysC99uGBrFiBvVcjwGK7f2MgS27809Oc/BQXMOfV4ME7cnCyOoOvgN1P/1/B\nSbmrieBqhQgNwLtOpkF6VypzdfZzFfvos1BQg171xkCxlBGr+Z+djgbJcWlAFp+p\nyqgYk84MfBIzyE5Ml+Sy8oaxHVCqe/9g/6wZheD1TzC/lxNTZUaVRapkDJqvn/q9\njgRny3VXKSGg/RSAlQCx4azWVNF0fyy3V/41QQUyYmLiTGDB4qVPbybD0l+/Ozx2\nIDiaO1l7DAu354Rg15KSWt5QSgkTc6Cb9De0f1+K/U3oe7DNVXi9O2oRdRvi1xw8\nzX77h3D4XJBPgsopBsrl3RTwleMz78xvfA2r0i4UBxWwKsM+xw==\n-----END CERTIFICATE-----',
  },
});

const connect = async () => {
  try {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) throw err; // not connected!
        connection.query(
          "INSERT into `users` VALUES(NULL,'Added New Name')",
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
