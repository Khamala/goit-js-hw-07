const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener('input', onInput);

function onInput(event) {
    
    const value = event.target.value.trim();
    output.textContent = value === '' ? 'Anonymous' : value;

}

