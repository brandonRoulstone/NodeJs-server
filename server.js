import express from 'express';
import { config } from 'dotenv'; 
config();
import cors from 'cors';
import cookieParser from "cookie-parser";
import  productRoute from './Routes/ProductsRoute.js';
import userRoute from './Routes/UserRoute.js'


const app = express(); 
const PORT_NO = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use(express.static('public'));
 
app.use('/products', productRoute); 
app.use('/users', userRoute); 

app.listen(PORT_NO, () => {
    console.log(`server initialized on http://localhost:${PORT_NO}`);
}); 