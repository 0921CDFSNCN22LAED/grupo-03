window.addEventListener("load", function() {
    let formulario = document.querySelector("form.createProd");

    formulario.addEventListener("submit", function(e) {

        let errors = [];

        let nameField = document.querySelector("input.name");

        if (nameField.value == "") {
            errors.push("El campo de nombre tiene que estar completo");
        } else if (nameField.value.length < 5) {
            errors.push("El campo de nombre tiene que tener 5 al menos caracteres!");
        }

        let descField = document.querySelector("input.desc");

        if (descField.value == "") {
            errors.push("Tiene que indicar una descripcion ");
        }

        const sizeField = document.querySelector("input[name = 'size']");

        if (sizeField.value == "") {
            errors.push("El campo de tamaño tiene que estar completo");
        }

        let priceField = document.querySelector("input.price");

        if (priceField.value == "") {
            errors.push("El campo precio no puede estar vacio");
        } else if (priceField.value <= 0) {
            errors.push("El importe del precio no puede ser un numero menor o igual a cero");
        }

        let discField = document.querySelector("input.disc");

        if (discField.value == "") {
            errors.push("El descuento no puede estar vacio");
        } else if (discField.value <= 0 && discField.value != -1) {
            errors.push("El descuento no puede ser un numero menor o igual a cero");
        }

        let categoryField = document.querySelector("select.category");

        if (categoryField.value == "") {
            errors.push("El campo categoria debe seleccionar una opcion")
        }

        let tipoField = document.querySelector("select.tipo");

        if (tipoField.value == "") {
            errors.push("En el campo tipo debe seleccionarse una opcion")
        }

        let imageField = document.querySelector("input.img-create");
        let imageExtensions = /(.jpg|.jpeg|.png|.gif|.webp)$/i

        if (imageField.value == "") {
            errors.push("La imagen no puede estar vacio");
        } else if (!allowedExtensions.exec(imageField)) {
            errors.push("la extencion no esta permitida");
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