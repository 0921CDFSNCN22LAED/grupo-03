window.addEventListener("load",function(){

    let res = document.getElementById("res");
    let sum = document.getElementById("sum");
    let count = document.querySelector(".count");

    console.log(res);

        res.addEventListener("click",()=>{

            if(count.value >0){

                count.value--;
            }

        })

        sum.addEventListener("click",()=>{

            

                count.value++;
            

        })
      



    
})