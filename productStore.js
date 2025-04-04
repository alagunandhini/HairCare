// getting product details when add to cart is clicked
document.querySelectorAll(".add-to-cart").forEach(button=>{
    button.addEventListener("click",(e)=>{
        const products={
            id:e.target.dataset.id,
            name:e.target.dataset.name,
            price:e.target.dataset.price,
            img:e.target.dataset.img
        }
        console.log(products)
        let cart=JSON.parse(localStorage.getItem("cart")||"[]");// convert already stored cart items(in json format) into  array.if not found empty array will store. 
        cart.push(products)
        localStorage.setItem("cart",JSON.stringify(cart))//save the cart array in json format in local storage 

    })
})