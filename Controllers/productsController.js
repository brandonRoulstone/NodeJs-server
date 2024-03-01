import { getProducts, getProduct, addProduct, deleteProduct, editProduct } from "../Model/db.js";

export default {
    allProducts : async (req, res) => {

        try {
            res.send(await getProducts(req.body.prodName))
        } catch (err){
            console.error("Internal error")
            res.status(404).json({
                msg: "internal error"
            })
        }

    },
    singleProduct : async (req, res) => {

        try {
            res.send(await getProduct(+req.params.id))
        } catch (err) {
            console.error("Internal error")
            res.status(404).json({
                msg: "internal error"
            })
        }

    },
    deleteProductByID : async (req, res) => {

        try {

            await deleteProduct(+req.params.id);

            res.send(await getProducts());

        } catch (err) {
            
            console.error("Internal error")
            res.status(404).json({
                msg: "internal error"
            })

        }

    },
    addProductToDB : async (req, res) => {

        try{

            const { prodName,  quantity, amount, Category, prodUrl} = req.body;

            await addProduct(prodName,  quantity, amount, Category, prodUrl);
    
            res.send(await getProducts())

        } catch (err) {
            console.error("Internal error")
            res.status(404).json({
                msg: "internal error"
            })
        } 
    },
    editProductByID : async (req, res) => {
        try {
            let {prodName, quantity, amount, Category, prodUrl} = req.body

            const [product] = await getProduct(+req.params.id);
    
            prodName ? prodName : {prodName} = product
    
            quantity ? quantity : {quantity} = product
    
            amount ? amount : {amount} = product
    
            Category ? Category : {Category} = product
    
            prodUrl ? prodUrl : {prodUrl} = product
    
            await editProduct(prodName, quantity, amount, Category, prodUrl, +req.params.id)
    
            res.send(await getProducts());
            
        } catch (err) {
            console.error("Internal error")
            res.status(404).json({
                msg: "internal error"
            })
        }
    }  
} 