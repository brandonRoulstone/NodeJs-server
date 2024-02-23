import mysql from 'mysql2';
import { config } from 'dotenv';
config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_USERPASS,
    multipleStatements: true,
    connectionLimit: 30
}).promise()

export { pool };
