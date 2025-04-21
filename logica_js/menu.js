// Selección de enlaces en el menú
const links = document.querySelectorAll("nav ul li a");

// Agregar eventos de clic a los enlaces
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    link.style.color = "#ffa500";
    setTimeout(() => {
      link.style.color = "#fff";
    }, 300);
    window.location.href = link.getAttribute("href");
  });
});
