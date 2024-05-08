// TODO: Сделать таймер обратного отсчета.
// TODO: По истечению 5 часов, акция должна закончиться, а цена поменяться.
const timer = <HTMLElement>document.querySelector("#timer");
const price = <HTMLElement>document.querySelector("#price");
const line = <HTMLElement>document.querySelector(".banner__line")

let hours: number = 5;
let minutes: number = 0;
let seconds: number = 0;
let time: number;

let oldPrice: number = 250;
let newPrice: number = 160;

timer.innerHTML = `${hours}:${minutes}0:${seconds}0`; // Предварительный вид таймера
price.innerHTML = `<p class="banner__old-price">R ${oldPrice}.00</p>
<p>R ${newPrice}.00</p>`; // Предварительный вид цены

// ↓ Функция по запуску таймера
const startTimer = () => {
  time = setInterval(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      stopTimer();
    } else {
      countdownTime();
    }
    timer.innerHTML = `${hours}:${minutes}:${seconds}`;
  }, 1000);
};
// ↓ Функция по обратному отсчету часов
const countdownHours = () => {
  if (hours === 0) {
    hours = 59;
  } else {
    hours--;
  }
};
// ↓ Функция по обратному отсчету минут
const countdownMinutes = () => {
  if (minutes === 0) {
    minutes = 59;
    // Если минуты обнуляются, то срабатывает функция по обратному отсчету часов
    countdownHours();
  } else {
    minutes--;
  }
};
// ↓ Функция по обратному отсчету времени, начинается с секунд
const countdownTime = () => {
  if (seconds === 0) {
    seconds = 59;
    // Если секунды обнуляются, то срабатывает функция по обратному отсчету минут
    countdownMinutes();
  } else {
    seconds--;
  }
};
// ↓ Функция по остановке таймера и окончанию акции
const stopTimer = () => {
  clearInterval(time);
  price.innerHTML = `<p>R ${oldPrice}.00</p>`;
  price.style.justifyContent = "center";
  line.style.display = "none"
};

export {startTimer}