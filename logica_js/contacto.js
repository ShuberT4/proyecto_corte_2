document.getElementById('contactoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!name || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Ingresa un correo válido.');
        return;
    }

    const confirmacionMensaje = document.getElementById('confirmacionMensaje');
    confirmacionMensaje.textContent = `¡Gracias, ${name}! Tu mensaje ha sido enviado.`;
    confirmacionMensaje.style.display = 'block';

    document.getElementById('contactoForm').reset();
});
