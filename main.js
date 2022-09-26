const elForm = document.querySelector(".site-form");
const elInput = document.querySelector(".form-input");
const text1 = document.querySelector(".text-1");
const text2 = document.querySelector(".text-2");
const text3 = document.querySelector(".text-3");
const title1 = document.querySelector(".title-1");
const title2 = document.querySelector(".title-2");
const title3 = document.querySelector(".title-3");
const invalidText = document.querySelector(".invalid-text");

const arr1 = [];
const arr2 = [];
const arr3 = [];
const arrInvalid = [];

function renderTitle() {
  title1.textContent = `Nechta Fizz ${arr1.length}`;
  title2.textContent = `Nechta Buzz ${arr2.length}`;
  title3.textContent = `Nechta FizzBuzz ${arr3.length}`;
}

renderTitle();

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const inputValue = Number(elInput.value.trim());

  if (inputValue % 5 === 0 && inputValue % 3 === 0) {
    arr3.push(inputValue);
  } else if (inputValue % 5 === 0) {
    arr2.push(inputValue);
  } else if (inputValue % 3 === 0) {
    arr1.push(inputValue);
  } else if (inputValue <= 0) {
    alert("Musbat raqam kiriting");
  } else {
    arrInvalid.push(inputValue);
  }

  render(text1, arr1);
  render(text2, arr2);
  render(text3, arr3);
  render(invalidText, arrInvalid);
  renderTitle();
  elInput.value = "";
});

const render = function (text, arr) {
  text.textContent = arr;
};
