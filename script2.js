const sum = document.querySelector('.sum').value;
const button = document.querySelector('.button');
const total = document.querySelector('.total');

let interestRate = 18.5;

const deposit = 30000;

const growth = 150;

const currency = 'руб';

console.log(`Ваш депозит на начало расчетного периода составлял ${deposit + " " + currency} `); // Ваш депозит на начало расчетного периода составлял 30000 руб

let message = `Согласно вашему тарифу, вам была присвоена ставка ${interestRate}%`;
console.log(message);// Согласно вашему тарифу, вам была присвоена ставка 18.5%

let message2 = 'К концу расчетного прирост составил ' + growth + ' ' + currency + ' и на данный момент ваш депозит составляет ' + (deposit + growth + currency);
console.log(message2); // К концу расчетного прирост составил 150 руб и на данный момент ваш депозит составляет 30150 руб

let message3;
let total2;
button.addEventListener('click', () => {
    const sum = document.querySelector('.sum').value;
    total2 = +sum + ((sum / 100) * 7);
    message3 = 'Через год у вас будет' + total2 + ' ' + currency + ' на счету';
    total.textContent = (message3); // Через год у вас будет XXX руб. на счету", где вместо ХХХ выведите сколько получится на счету с учетом процентной ставки 7% годовых
});

