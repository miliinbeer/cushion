// ↓ Импорт происходит от компилируемых javascript файлов, а не typescript
import { products, sizes } from "./data.js";
import { startTimer } from "./timer.js";
const images = document.querySelector(".products__images");
const previews = document.querySelector(".products__previews");
const selectColor = document.querySelector("#select-color");
const selectSize = document.querySelector("#select-size");
startTimer(); // ← Функция по запуску таймера
images.innerHTML = `<img class="products__image" src="${products[0].image}" alt="${products[0].name}"/>`;
// ↓ Функция по добавлению изображений из массива объектов в раздел с превью
products.forEach((item) => previews.append(createPreviews(item)));
// ↓ Функция по отображению изображения при нажатии на превью
products.forEach((item, index) => {
    const preview = (document.querySelectorAll(".products__preview"));
    preview[index].addEventListener("click", () => {
        images.innerHTML = `
    <img class="products__image" src="${item.image}" alt="${item.name}">
    `;
    });
});
// ↓ Функция по отображению превью
function createPreviews(item) {
    let images = document.createElement("div");
    images.innerHTML = `
  <img src="${item.image}"
  class="products__preview"
  alt="${item.name}"/>`;
    return images;
}
// ↓ Функция по добавлению вариантов с цветом из массива объектов в раздел выбора цвета
products.forEach((item) => selectColor.append(createOption(item)));
// ↓ Функция по отображению вариантов с цветом
function createOption(item) {
    let option = document.createElement("option");
    option.classList.add("products__option");
    option.setAttribute("value", item.name);
    option.text = `${item.name}`;
    return option;
}
// ↓ Функция по добавлению вариантов с размером из массива в раздел выбора размера
sizes.forEach((item) => selectSize.append(createSizes(item)));
// ↓ Функция по отображению вариантов с размером
function createSizes(size) {
    let option = document.createElement("option");
    option.text = `${size}`;
    return option;
}
// ↓ Событие по нажатию вариант с цветом
selectColor.addEventListener("change", (event) => {
    // arrow.classList.toggle("active");
    // ↓ Для доступа к свойству value, event.target приводится к типу HTMLInputElement
    const value = event.target.value;
    // ↓ Value - это пункт (option) из списка элемента c вариантами цвета (select)
    let option = value;
    // ↓ Функция по отображению изображения при нажатии на вариант с цветом
    products.forEach((item) => {
        if (option === item.name) {
            images.innerHTML = `
    <img class="products__image" src="${item.image}" alt="${item.name}">
    `;
        }
    });
});
