function addition(num1, num2) {
    // Convert num1 and num2 to numbers if they are not already
  num1 = Number(num1);
  num2 = Number(num2);

  // Check if either num1 or num2 is NaN (indicating invalid numbers)
  // If NaN, set the value to 0
  num1 = isNaN(num1) ? 0 : num1;
  num2 = isNaN(num2) ? 0 : num2;
}

module.exports = addition;