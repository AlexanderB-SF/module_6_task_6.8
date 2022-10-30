let inputText = document.querySelector('input'),
    duplicateField = document.querySelector('#duplicateField');
const button = document.querySelector('button');

duplicateField.addEventListener('keydown', (e) => {
    e.preventDefault();
});

inputText.addEventListener('keydown', (e) => {
    duplicateField.value += e.key;
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(inputText.value);
    inputText.value = "";
    duplicateField.value = "";
});
