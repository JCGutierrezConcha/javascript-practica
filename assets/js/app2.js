const btn_1 = document.getElementById("btn-1");
const btn_2 = document.getElementById("btn-2");
const btn_3 = document.getElementById("btn-3");
const btn_4 = document.getElementById("btn-4");
const btn_5 = document.getElementById("btn-5");
const btn_6 = document.getElementById("btn-6");
const caja = document.getElementById("caja");

btn_1.addEventListener('click', () => {
    caja.style.backgroundColor = '#e53e3e';
});

btn_2.addEventListener('click', () => {
    caja.style.backgroundColor = '#dd6b20';
})

btn_3.addEventListener('click', () => {
    caja.style.backgroundColor = '#faf089';
});

btn_4.addEventListener('click', () => {
    caja.style.backgroundColor = '#48bb78';
});

btn_5.addEventListener('click', () => {
    caja.style.backgroundColor = '#81e6d9';
});

btn_6.addEventListener('click', () => {
    caja.style.backgroundColor = '#d53f8c';
});
