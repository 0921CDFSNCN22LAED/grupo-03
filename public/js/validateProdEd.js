window.addEventListener("load", function() {
    let formulario = document.querySelector("form.editProd");

    formulario.addEventListener("submit", function(e) {

        let errors = [];

        let nameField = document.querySelector("input.name");

        if (nameField.value.length < 5) {
            errors.push("El campo de nombre tiene que tener 5 al menos caracteres!");
        }

        let descField = document.querySelector("input.desc");

        if (descField.value.length < 3) {
            errors.push("La descripcion tiene que tener al menos 3 caracteres");
        }

        let priceField = document.querySelector("input.price");

        if (priceField.value <= 0) {
            errors.push("El importe del precio no puede ser un numero menor o igual a cero");
        }

        let discField = document.querySelector("input.disc");

        if (discField.value <= 0 && discField.value != -1) {
            errors.push("El descuento no puede ser un numero menor o igual a cero");
        }

        console.log(errors);
        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector("div.errorsCreateForm ul");
            ulErrors.innerHTML = "";
            ulErrors.innerHTML += "<li>" + "<strong>" + "Tiene que revisar los siguientes campos con errores" + "</strong>" + "</li>";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>"
            }
        }
    });
})