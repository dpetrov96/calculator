const CALCULATOR_RESULT_SELECTOR = 'result'

function displayResult(input) {
  document.getElementById(CALCULATOR_RESULT_SELECTOR).value += input;
  return input;
}

function clearResult() {
  document.getElementById(CALCULATOR_RESULT_SELECTOR).value = '';
}

function calculate() {
  const output = document.getElementById(CALCULATOR_RESULT_SELECTOR).value;
  const result = eval(output);
  document.getElementById(CALCULATOR_RESULT_SELECTOR).value = result;
  return result;
}
