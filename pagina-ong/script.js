function abrirModal() {
    let divModal = document.createElement("div");

    divModal.innerHTML = `<h1>Formulario de Registro</h1>
    <p>Para registrarte, necesitamos algunos datos personales.</p>
    <form>
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" id="nombre" required>
    <label for="apellido">Apellido</label>
    <input type="text" name="apellido" id="apellido" required>
    <button onclick="cambiarModal()">Enviar Datos</button>
    </form>`;

    divModal.classList.add("div-modal");

    document.body.appendChild(divModal);
}

function cambiarModal() {
    document.querySelector(".div-modal").innerHTML = `<h1>¡Bienvenido!</h1>
    <p>Gracias por tu apoyo, bienvenido a Volver a Intentar.</p>
    <button onclick="cerrarModal()">Cerrar Modal</button>`;
}

function cerrarModal() {
    document.querySelector(".div-modal").remove();
}