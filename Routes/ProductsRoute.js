import express from 'express';
import controller from '../Controllers/productsController.js'

const router = express.Router()

router.route('/')
    .get(controller.allProducts)
    .post(controller.addProductToDB)

router.route('/:id') 
    .get(controller.singleProduct)
    .delete(controller.deleteProductByID)
    .patch(controller.editProductByID)

export default router;



