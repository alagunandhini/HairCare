document.addEventListener("DOMContentLoaded", function () {
    load();
});




function load(){
    let cart=JSON.parse(localStorage.getItem("cart")|| "[]");
    console.log(cart)
    const cartContainer=document.getElementById("cart-items");
    const container=document.getElementById("Container")
    cartContainer.innerHTML=""; // to empty previous cart items
    if(cart.length===0){
      container.innerHTML=`<div class="d-flex justify-content-center align-items-center">
    <img src="./empty-cart-1.png" class="img-fluid"/>
  </div>`
  return;
  // return the empty cart img , if no cart items 
}
//getting local storage items 
cart.forEach((items,index)=>{
    const cartItem=document.createElement("tr")
    cartItem.classList.add("mt-4")
    const Total =Number((items.price+"").replace(/[^\d.]/g,""))
    cartItem.innerHTML=`
  <td><p class="mt-5">${index+1}</p></td>
  <td><img src=${items.img} class="img-fluid" style="height: 80px; width: 80px;">
  <p>${items.name}</p>
<p>price: ${items.price}</p></td>


  <td > 
    <div class="d-flex justify-content-center align-items-center mt-5">
      <button class="btn btn-light dec-btn" style="border-radius: 50%;" data-index=${index}>-</button>
      <span class="mx-2">${items.quantity||1}</span>
      <button class="btn btn-light inc-btn " style="border-radius: 50%;" data-index=${index}>+</button>
       </div>
   
   </td>
   <td><p class="mt-5">Rs.${Total * Number((items.quantity||1))}</p></td>
  <td>  <button class="btn btn mt-5 remove-item" data-index=${index} style="color: rgb(255, 68, 68);" >
    <i class="fa-solid fa-trash"></i>
</button></td>
 
`
console.log("price:", items.price, "quantity:", items.quantity);

cartContainer.appendChild(cartItem)

})
//getting individual button in loop
document.querySelectorAll(".remove-item").forEach(button=>{
button.addEventListener("click",function(){
  let index=this.dataset.index;
  RemoveFromCart(index);
});

})
//delete button for remove cart
function RemoveFromCart(index){
  let cart=JSON.parse(localStorage.getItem("cart")||"[]")
  cart.splice(index,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  load();

}

// quantity increase btn
document.querySelectorAll(".inc-btn").forEach(button=>{
  button.addEventListener("click",function (){
    let index=this.dataset.index;
    console.log(index);
    updateQuantity(index,1)

  })
})
//quantity decrease btn
document.querySelectorAll(".dec-btn").forEach(button=>{
  button.addEventListener("click",function (){
    let index=this.dataset.index;
    console.log(index);
    updateQuantity(index,-1)

  })
}) 

//updating the quantity function
function updateQuantity(index,change){
  let cart=JSON.parse(localStorage.getItem("cart")||"[]")
  if(cart[index]){
    let NewQuantity=((cart[index].quantity)||1)+change

    if(NewQuantity<1){
      cart[index].quantity= 1

    }
    else{
      cart[index].quantity=NewQuantity;
      cart[index].Totalprice=Number(cart[index].price)*NewQuantity;
    }
  }
  

  localStorage.setItem("cart",JSON.stringify(cart));
  load();


  
}



    
}
