import express from 'express';
import { config } from 'dotenv'; 
config();
import cors from 'cors';
import cookieParser from "cookie-parser";
import  productRoute from './Routes/ProductsRoute.js';
import userRoute from './Routes/UserRoute.js';
import auth from './Middleware/validateUser.js';
import authenticate from './Middleware/userVerification.js';
import loginRoute from './Routes/LoginRoute.js'


const app = express(); 
const PORT_NO = process.env.MYSQL_ADDON_PORT || 4000; 

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use(express.static('public'));
 
app.use('/products', productRoute); 
app.use('/users', userRoute); 
app.use('/login',authenticate, loginRoute)  

app.listen(PORT_NO, () => {
    console.log(`server initialized on http://localhost:${PORT_NO}`);
});  