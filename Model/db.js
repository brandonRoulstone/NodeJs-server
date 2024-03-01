import { pool } from "../Config/config.js";


// returns all products
const getProducts = async () => {
    const [products] = await pool.query(`
     SELECT * FROM products
    `)
    return products
}

// Gets product by id
const getProduct = async (id) => {
    const [product] = await pool.query(`
    SELECT * FROM products WHERE prodID = ?
    `, [id]);
    // handling error for finding the existing parameter in the array/database
    if(!id || isNaN(id) || id > product){
        
        throw error();
    }

    return product
}

//Edit product
const editProduct = async (prodName, quantity, amount, Category, prodUrl, prodID) => {
    const [product] = await pool.query(`
    UPDATE products SET prodName = ?, quantity = ?, amount = ?, Category = ?, prodUrl = ? WHERE prodID = ?
    `, [prodName, quantity, amount, Category, prodUrl, prodID])
}

// Add product to table
const addProduct = async (prodName, quantity, amount, Category, prodUrl) => {
    const [product] = await pool.query(`
        INSERT INTO products (prodName, quantity, amount, Category, prodUrl) VALUES (?, ?, ?, ?, ?)
    `, [prodName, quantity, amount, Category, prodUrl])
    return getProducts(product.insertId)
}


const deleteProduct = async (id) => {
    const [product] = await pool.query(`
        DELETE FROM products WHERE prodID = ?
    `, [id])
}

// admin verification
const checkUser = async (emailAdd) => {
    const [[{userPass}]] = await pool.query(`
    SELECT userPass FROM Users WHERE emailAdd = ?`,
     [emailAdd]);
     console.log(userPass);
    return userPass
} 

// Gets all users in table
const getUsers = async (id) => {
    const [users] = await pool.query(`
     SELECT * FROM Users
    `,[id])
    return users
}


// Gets a user in table
const getUser = async (id) => {
    const [user] = await pool.query(`
     SELECT * FROM Users WHERE userID = ?
    `,[id])

    if (!id || isNaN(id) || id > user){

        throw error()
        
    }
    return user
}

// delete a user from database
const deleteUser = async (id) => {

    const [user] = await pool.query(`
        DELETE FROM Users WHERE userID = ?
    `, [id])

}

// edit a single users information
const editUser = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, userID) => {

    const [user] = await pool.query(`
     UPDATE Users SET firstName = ?, lastName = ?, userAge = ?, Gender = ?, userRole = ?, emailAdd = ?, userPass = ?, userProfile = ? WHERE userID = ?
    `, [firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile, userID])

}

// adds user to database
const addUser = async (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) => {
    const [user] = await pool.query(`
        INSERT INTO Users (firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile])

    return getUsers(user.insertId)
}



export { getProducts, getProduct, addProduct, deleteProduct, editProduct, checkUser, getUsers, getUser, deleteUser, editUser, addUser }