//Action for adding Item to Cart,action is nothing but arrow function which contains type and p


export const delCart=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}