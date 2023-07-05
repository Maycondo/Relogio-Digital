const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relógio = setInterval(function time() {
    let dataToday = new Date();
    let hrs = dataToday.getHours();
    let min = dataToday.getMinutes();
    let s = dataToday.getSeconds();

    if(hrs < 10) hrs = '0' + hrs;

    if(min < 10) min = '0' + min;

    if(s < 10) s = '0' + s;

    horas.textContent = hrs;
    minutos.textContent = min;
    segundos.textContent = s;
})
