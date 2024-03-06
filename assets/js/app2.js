const btn_1 = document.getElementById("btn-1");
const btn_2 = document.getElementById("btn-2");
const btn_3 = document.getElementById("btn-3");
const btn_4 = document.getElementById("btn-4");
const btn_5 = document.getElementById("btn-5");
const btn_6 = document.getElementById("btn-6");
const caja = document.getElementById("caja");

color1 = btn_1.style.backgroundColor;
color2 = btn_2.style.backgroundColor;
color3 = btn_3.style.backgroundColor;
color4 = btn_4.style.backgroundColor;
color5 = btn_5.style.backgroundColor;
color6 = btn_6.style.backgroundColor;


btn_1.addEventListener('click', () => {
    caja.style.backgroundColor = color1;
});

btn_2.addEventListener('click', () => {
    caja.style.backgroundColor = color2;
})

btn_3.addEventListener('click', () => {
    caja.style.backgroundColor = color3;
});

btn_4.addEventListener('click', () => {
    caja.style.backgroundColor = color4;
});

btn_5.addEventListener('click', () => {
    caja.style.backgroundColor = color5;
});

btn_6.addEventListener('click', () => {
    caja.style.backgroundColor = color6;
});
