import express from 'express';


const router = express.Router()

router.route('/')
    .post((req, res) => console.log("data has been sent"))
 

export default router