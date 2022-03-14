window.addEventListener("load", function() {

//variables
let allContainerCart = document.querySelectorAll('.cont-art');
let buyThings =[];
let containerBuyCart = document.querySelector('.card-items');



//funciones

for (var i = 0 ; i < allContainerCart.length; i++) {
    allContainerCart[i].addEventListener('click',addProduct);

}


function addProduct(e){
    e.preventDefault();
    if(e.target.classList.contains('botonCarrito')){
    const selectProduct = e.target.parentElement
         readTheContent(selectProduct);
    } 
}

function readTheContent(productos){
    const infoProduct = {
        image:productos.querySelector('article div div a img').getAttribute('src'),
        title:productos.querySelector('.descrip').getAttribute('data-id'),
        price:productos.querySelector('.precio').getAttribute('data-id'),
        id:productos.querySelector('.botonCarrito').getAttribute('type'),
        amount: 1
    }
    buyThings=[...buyThings,infoProduct]
    loadHtml
    console.log(infoProduct);

}
function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

    });
}
 function clearHtml(){
    containerBuyCart.innerHTML = '';
 }
















//cierre de window
})
