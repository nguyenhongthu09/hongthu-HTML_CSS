// Get phần tử giỏ hàng
const ToCart = document.getElementById("gio-hang-to-cart");
document.getElementById("add-to-cart-button").addEventListener("click", function (){

    ToCart.style.display= "block";
});
document.getElementById('close').addEventListener("click", function(){
          ToCart.style.display= "none";
})
