function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    rendeerCart(); //actualiza el carrito en la vista previa
  }
function getCart(){
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}  
function rendeerCart(){
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');

    if(!cartItems || !total) return; //seguridad

    cartItems.innerHTML = '';
    let cart = getCart();
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toLocaleString()}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });
    total.textContent = totalPrice.toLocaleString();
}
document.addEventListener('DOMContentLoaded', () => {
    rendeerCart(); 
});
document.getElementById('clear-cart').addEventListener('click', () => {
    localStorage.removeItem('cart'); // Elimina el carrito del almacenamiento
    location.reload(); // Recarga la página para actualizar la vista
  });
  
