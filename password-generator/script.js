const upperCase = document.querySelector("#uppercase");
const lowerCase = document.querySelector("#lowercase");
const number = document.querySelector("#number");
const range = document.querySelector("#range");
const rangeNumber = document.querySelector("#range-number");
const form = document.querySelector(".form");
const symbol = document.querySelector("#symbol");
const passwordDisplay = document.querySelector(".pass-display");

const upperCaseCodes = arrayFromLowToHigh(65, 90);
const lowerCaseCodes = arrayFromLowToHigh(97, 122);
const numberCodes = arrayFromLowToHigh(48, 57);
const symbolCodes = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));

rangeNumber.addEventListener("input", syncCharAmount);
range.addEventListener("input", syncCharAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("clicked");

  const charAmount = rangeNumber.value;
  const includeNumber = number.checked;
  const includeUppercase = upperCase.checked;
  const inlcudeSymbol = symbol.checked;
  const password = generatePassword(
    charAmount,
    includeUppercase,
    inlcudeSymbol,
    includeNumber
  );
  passwordDisplay.innerText = password;
});

function generatePassword(
  charAmount,
  includeUppercase,
  includeSymbol,
  includeNumber
) {
  let charCodes = lowerCaseCodes;

  if (includeUppercase) charCodes = charCodes.concat(upperCaseCodes);
  if (includeSymbol) charCodes = charCodes.concat(symbolCodes);
  if (includeNumber) charCodes = charCodes.concat(numberCodes);

  const passwordCharacters = [];

  for (let i = 0; i < charAmount; i++) {
    const charCode = charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(charCode));
  }
  return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i < high; i++) {
    array.push(i);
  }
  return array;
}

function syncCharAmount(e) {
  console.log("called");
  const value = e.target.value;
  range.value = value;
  rangeNumber.value = value;
}
