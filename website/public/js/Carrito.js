window.addEventListener("load", function() {

//variables
let allContainerCart = document.querySelector('wrap-art');



//funciones

for (var i = 0 ; i < allContainerCart.length; i++) {
    allContainerCart[i].addEventListener('click',addProduct);
    
}


function addProduct(e){
    console.log(e.target);
}

})

