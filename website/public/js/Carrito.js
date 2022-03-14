window.addEventListener("load", function() {

//variables
let allContainerCart = document.querySelectorAll('.cont-art');
let containerBuyCart = document.querySelector('.card-items');
let amountProduct = document.querySelector('.count-product');
let priceTotal = document.querySelector('.price-total')
let carritoButton = document.getElementsByClassName("botonCarrito")




let buyThings =[];
let totalCard = 0;
let countProduct = 0;



//funciones



    for (var i = 0 ; i < carritoButton.length; i++) {
        carritoButton[i].addEventListener('click',addProduct);
    }

    //containerBuyCart.addEventListener('click', deleteProduct);

    
    
    

    function addProduct(e){

        const selectProduct = e.target.parentElement
    }



// function addProduct(e){
//     //e.preventDefault();
//     if (e.target.classList.contains('botonCarrito')) {

//         const selectProduct = e.target.parentElement
//         readTheContent(selectProduct);

//     }
// }

// function deleteProduct(e) {
//     if (e.target.classList.contains('delete-product')) {
//         const deleteId = e.target.getAttribute('data-id');

//         buyThings.forEach(value => {
//             if (value.id == deleteId) {
//                 let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
//                 totalCard =  totalCard - priceReduce;
//                 totalCard = totalCard.toFixed(2);
//             }
//         });
//         buyThings = buyThings.filter(product => product.id !== deleteId);
        
//         countProduct--;
//     }
//     loadHtml();
// }




// function readTheContent(productos){
//     const infoProduct = {
//         image:productos.querySelector('article div div a img').getAttribute('src'),
//         title:productos.querySelector('.descrip').getAttribute('data-id'),
//         price:productos.querySelector('.precio').getAttribute('data-id'),
//         id:productos.querySelector('.botonCarrito').getAttribute('type'),
//         amount: 1
//     }

//     console.log(infoProduct.title)

//     totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
//     totalCard = totalCard.toFixed(2);


//     const exist = buyThings.some(product => product.id === infoProduct.id);
//     if(exist){
//         const pro = buyThings.map(product => {
//             if(product.id === infoProduct.id){
//                 product.amount++
//                 return product;
//             }else{
//                 return product
//             }
//         });
//         buyThings = [...pro];
//     }else{
//         buyThings=[...buyThings,infoProduct]
//         countProduct++;

//     }

//     loadHtml();
//     console.log(infoProduct);

// }
// function loadHtml(){
//     clearHtml();
//     buyThings.forEach(product => {
//         const {image, title, price, amount, id} = product;
//         const row = document.createElement('div');
//         row.classList.add('item');
//         row.innerHTML = `
//             <img src="${image}" alt="">
//             <div class="item-content">
//                 <h5>${title}</h5>
//                 <h5 class="cart-price">${price}$</h5>
//                 <h6>Cantidad: ${amount}</h6>
//             </div>
//             <span class="delete-product" data-id="${id}">X</span>
//         `;

//         containerBuyCart.appendChild(row);
//         priceTotal.innerHTML = totalCard;
//         amountProduct.innerHTML = countProduct;

//     });
// }
//  function clearHtml(){
//     containerBuyCart.innerHTML = '';
//  }
















//cierre de window
})
