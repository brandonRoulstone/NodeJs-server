import { getProducts, getProduct, addProduct, deleteProduct, editProduct } from "../Model/db.js";

export default {
    allProducts : async (req, res) => {

        try {
            res.send(await getProducts(req.body.prodName))
        } catch (err){
            res.json({
                status : res.statusCode,
                msg: `failed to retrieve ${req.url}`
            })
        }

    },
    singleProduct : async (req, res) => {

        try {
            res.send(await getProduct(+req.params.id))
        } catch (err) {
            res.json({
                status : res.statusCode,
                msg: `failed to retrieve ${req.url}`
            })
        }

    },
    deleteProductByID : async (req, res) => {

        try {

            await deleteProduct(+req.params.id);

            res.send(await getProducts());

        } catch (err) {
            
            res.json({
                status : res.statusCode,
                msg: `failed to retrieve ${req.url}`
            })

        }

    },
    addProductToDB : async (req, res) => {

        try{

            const { prodName,  quantity, amount, Category, prodUrl} = req.body;

            await addProduct(prodName,  quantity, amount, Category, prodUrl);
    
            res.send(await getProducts())

        } catch (err) {
            res.json({
                status : statusCode,
                msg: `failed to retrieve ${req.url}` 
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
            res.json({
                status : statusCode,
                msg: `failed to retrieve ${req.url}`
            })
        }
    }  
} 