// getting product details when add to cart is clicked
document.querySelectorAll(".add-to-cart").forEach(button=>{
    const productId=button.dataset.id;
    console.log("buttonId",productId)
    let cart =JSON.parse(localStorage.getItem("cart")||"[]"); //checking wheather the product is already in cart 
    if(cart.some(items=>items.id===productId)){
        button.disabled=true;
        button.textContent="Added";
    }
    button.addEventListener("click",(e)=>{
        e.preventDefault(); //to remove the browser defaults
        const products={
            id:e.target.dataset.id,
            name:e.target.dataset.name,
            price:e.target.dataset.price,
            img:e.target.dataset.img
        }
        console.log(products)
        let cart=JSON.parse(localStorage.getItem("cart")||"[]");// convert already stored cart items(in json format) into  array.if not found empty array will store. 
        if(!cart.some(items=>items.id===productId)){

        cart.push(products)
        localStorage.setItem("cart",JSON.stringify(cart))//save the cart array in json format in local storage 
        button.disabled=true;
        button.textContent="Added";
        }
    })
})