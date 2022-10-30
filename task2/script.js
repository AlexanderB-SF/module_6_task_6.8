const consoleLog = document.querySelector('#consoleLog');
const alertt = document.querySelector('#alert');
const promptt = document.querySelector('#prompt');
const mass = [
    'Служит для вывода информации в консоль',
    'Служит для вывода информации в всплывающем окне',
    'Служит для вывода информации в всплывающем окне с возможностью выбора'
];

function alertModal(selector, mass) {
    selector.addEventListener('click', () => {
        alert(mass);
    });
}

alertModal(consoleLog, mass[0]);
alertModal(alertt, mass[1]);
alertModal(promptt, mass[2]);
