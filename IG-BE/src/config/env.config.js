require('dotenv').config();

const envConfig= {
    port: process.env.PORT,
    db_url: process.env.DB_URL
}

module.exports = envConfig;

