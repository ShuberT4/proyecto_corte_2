document.getElementById('reservacionform').addEventListener('submit', function(event) {
event.preventDefault();

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const date = document.getElementById('date').value.trim();
const guests = document.getElementById('guests').value.trim();

if (!name || !email || !date || !guests){
    alert('Por Favor, Completar Todos Los Campos.');
 return;
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
if (!emailPattern.test(email)){
    alert('Ingrese Un Correo Valido');
    return;
}

document.getElementById('confirmacionMensage').textContent = 
    `Tu Reserva Ha Sido Registrada, ${name}!`;
document.getElementById('confirmacionMensage').style.display = 'block';

document.getElementById('reservacionform').reset();
});