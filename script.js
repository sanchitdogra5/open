const insection1 = document.querySelector('.in-section1');
const insection2 = document.querySelector('.in-section2');
const insection3 = document.querySelector('.in-section3');
const plus2 = document.querySelector('.plus2');
const plus21 = document.querySelector('.plus21');
const plus22 = document.querySelector('.plus22');
const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const number3 = document.querySelector('.number3');
number1.style.fontStyle = 'normal';
number1.style.transition = 'font-style 0.2s ease';
number2.style.fontStyle = 'normal';
number2.style.transition = 'font-style 0.2s ease';
number3.style.fontStyle = 'normal';
number3.style.transition = 'font-style 0.2s ease';
plus2.style.transform = 'rotate(90deg)';
plus21.style.transform = 'rotate(90deg)';
plus22.style.transform = 'rotate(90deg)';
insection1.style.display = 'none';
insection2.style.display = 'none';
insection3.style.display = 'none';
function openSection1() {
    if (insection1.style.display === 'none') {
        insection1.style.display = 'block';
        plus2.style.transform = 'rotate(0deg)';
        number1.style.fontStyle = 'italic';
    }
    else {
        insection1.style.display = 'none';
        plus2.style.transform = 'rotate(90deg)';
        number1.style.fontStyle = 'normal';
    }
}
function openSection2() {
    if (insection2.style.display === 'none') {
        insection2.style.display = 'block';
        plus21.style.transform = 'rotate(0deg)';
        number2.style.fontStyle = 'italic';
    }
    else {
        insection2.style.display = 'none';
        plus21.style.transform = 'rotate(90deg)';
        number2.style.fontStyle = 'normal';
    }
}
function openSection3() {
    if (insection3.style.display === 'none') {
        insection3.style.display = 'block';
        plus22.style.transform = 'rotate(0deg)';
        number3.style.fontStyle = 'italic';
    }
    else {
        insection3.style.display = 'none';
        plus22.style.transform = 'rotate(90deg)';
        number3.style.fontStyle = 'normal';
    }
}