const link = document.querySelector('.edit_link');

link.addEventListener('click', (e) => {
    e.preventDefault();
    link.textContent=(prompt('Введите текст'));
});