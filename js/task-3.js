const input = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

input.addEventListener('input', () => {
  const name = input.value.trim();
  nameOutput.textContent = name ? name : 'Anonymous'; 
});