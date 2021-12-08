const button = document.querySelector(".btn");
const resultDiv = document.querySelector(".result");

const generateRandomNumbers = (quantity = 1, min = 1, max = 100) => {
  const randomNumbers = new Array(quantity)
    .fill(null)
    .map(() => Math.floor(Math.random() * (max - min)) + min);
  return randomNumbers;
};

const prepareResults = (numbers) => {
  return numbers
    .sort((a, b) => a - b)
    .map(
      (num) => `<div class =${num % 2 == 0 ? "left" : "right"}> ${num}</div>`
    )
    .join("");
};

const handleClick = () => {
  const numbers = generateRandomNumbers(20);
  resultDiv.innerHTML = prepareResults(numbers);
};

button.addEventListener("click", handleClick);
