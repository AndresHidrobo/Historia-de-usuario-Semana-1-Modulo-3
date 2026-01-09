let start = document.getElementById("btn-start");
start.addEventListener("click", start_process); 
function start_process(){
    const nombre = prompt("Ingresa tu nombre:");// Solicita el nombre del usuario
    let edad_usuario = prompt("Ingresa tu edad:");// Solicita la edad del usuario
    // se convierte la edad a número
    let edad = Number(edad_usuario);

    if (nombre == null || nombre.trim().length === 0) { // Verificación de si el nombre no está vacio
        console.error(
            "Error: Por favor, ingresa un nombre válido"
        );
    }
    else if (isNaN(edad) || edad_usuario.trim().length === 0) { // Verificación de si la edad es válida
        console.error(
            "Error: Por favor, ingresa una edad válida en números"
        );

    } else {
        if (edad < 18) {
            alert(
                `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
            );
        } else {
            alert(
                `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
            );
        }
    }

}

