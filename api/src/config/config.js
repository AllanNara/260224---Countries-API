require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST, API_URL, PORT } = process.env;

const URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`;

module.exports = {
  db: {
    URI,
    user: DB_USER,
    pass: DB_PASSWORD,
    host: DB_HOST
  },
  apiUrl: API_URL,
  port: PORT
}