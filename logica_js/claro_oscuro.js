document.addEventListener('DOMContentLoaded', () => {
  const btn = document.createElement('button');
  btn.id = 'alternar_tema';
  btn.textContent = 'Cambiar Tema';
  document.body.appendChild(btn);

  btn.addEventListener('click', () => {
    document.body.classList.toggle('tema_negro');
    const tema = document.body.classList.contains('tema_negro') ? 'oscuro' : 'claro';
    localStorage.setItem('tema', tema);
  });

  // Aplica tema guardado si existe
  if (localStorage.getItem('tema') === 'oscuro') {
    document.body.classList.add('tema_negro');
  }
});
