window.addEventListener("load",function(){


    let formulario = document.querySelector("form");



    formulario.addEventListener("submit",function(e){


        let errores = [];
        let ulErrors = document.querySelector(".alert-validation")
        ulErrors.innerHTML = "";
        
        

        let firstName = document.getElementById("firstName")
        let lastName = document.querySelector("form #lastName");
        let phone = document.querySelector("form #phone");
        let adress = document.querySelector("form #adress");
        let location = document.querySelector("form #location");
        let state = document.querySelector("#state");

        

        if( firstName.value = ""){
            
            errores.push("El campo nombre no puede estar vacio");
        }else if(firstName.value.length < 2){
            
            errores.push("El campo nombre tiene que tener al menos 2 caracteres");
        }
        if( lastName.value == ""){
            errores.push("El campo apellido no puede estar vacio");
        }else if(lastName.value.length < 4){
            
            errores.push("El campo apellido tiene que tener al menos 2 caracteres");
        }
        if( phone.value == ""){
            errores.push("El campo telefono no puede estar vacio");
        }else if(phone.value.length < 8){
           
            errores.push("El campo telefono tiene que tener al menos 8 numeros");
        }
        if( adress.value == ""){
            errores.push("El campo direccion no puede estar vacio");
        }else if(adress.value.length < 2){
            
            errores.push("El campo direccion tiene que tener al menos 2 caracteres");
        }
        if( location.value == ""){
            errores.push("El campo localidad no puede estar vacio");
        }else if(location.value.length < 4){

            errores.push("El campo localidad tiene que tener al menos 4 caracteres");
        }
        if( state.value == ""){
            errores.push("El campo provincia no puede estar vacio");
        }else if(state.value.length < 4){

            errores.push("El campo provincia tiene que tener al menos 4 caracteres");
        }
        

        if(errores.length > 0){

            e.preventDefault();

            ulErrors.classList.remove("alert-validation");
            ulErrors.className += "alert"

            ulErrors.innerHTML += "<li>" + "<strong>"+ "Por favor revise los siguientes errores" +"</strong>" + "</li>"
            for(error of errores){
                ulErrors.innerHTML += "<li>" + error + "</li>"
            }
            
            
        } 

        if(errores.length == 0){

            alert("El usuario ha sido creado exitosamente")
            
            formulario.submit();
            

        }

        
    })

})