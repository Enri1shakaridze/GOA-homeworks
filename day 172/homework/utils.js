async function getProducts() {
    try{
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        console.log(data)
    }
    catch (err){
        console.log(err)
    }
}
async function getUsers() {
    try{
        let response = await fetch('https://fakestoreapi.com/users');
        let data = await response.json();
        console.log(data)
    }
    catch (err){
        console.log(err)
    }
}

// export (Named xport) ------------------
// export {getProducts}
// export {getUsers}

// module.exports ------------------------
// module.exports = {getProducts, getUsers}