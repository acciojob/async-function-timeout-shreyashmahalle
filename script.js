document.addEventListener('DOMContentLoaded', function() {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const button = document.getElementById('btn');
  const output = document.getElementById('output');

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function showMessage() {
    const message = textInput.value;
    const delay = Number(delayInput.value);
    output.textContent = '';
    await wait(delay);
    output.textContent = message;
  }

  button.addEventListener('click', showMessage);
});
