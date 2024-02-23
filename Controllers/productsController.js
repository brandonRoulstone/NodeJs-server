import { getProducts, getProduct, addProduct, deleteProduct, editProduct } from "../Model/db.js";

export default {
    allProducts : async (req, res) => {

        res.send(await getProducts(req.body.prodName))

    },
    singleProduct : async (req, res) => {

        res.send(await getProduct(+req.params.id))

    },
    deleteProductByID : async (req, res) => {

        await deleteProduct(+req.params.id);

        res.send(await getProducts());

    },
    addProductToDB : async (req, res) => {

        const { prodName,  quantity, amount, Category, prodUrl} = req.body;

        await addProduct(prodName,  quantity, amount, Category, prodUrl);

        res.send(await getProducts())
    },
    editProductByID : async (req, res) => {
        
        let {prodName, quantity, amount, Category, prodUrl} = req.body

        const [product] = await getProduct(+req.params.id);

        prodName ? prodName : {prodName} = product

        quantity ? quantity : {quantity} = product

        amount ? amount : {amount} = product

        Category ? Category : {Category} = product

        prodUrl ? prodUrl : {prodUrl} = product

        await editProduct(prodName, quantity, amount, Category, prodUrl, +req.params.id)

        res.send(await getProducts());
    }  
} 