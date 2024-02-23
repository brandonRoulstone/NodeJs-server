import mysql from 'mysql2';
import { config } from 'dotenv';
config();

const pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    database: process.env.MYSQL_ADDON_DB,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    multipleStatements: true,
    connectionLimit: 30
}).promise()

export { pool };
