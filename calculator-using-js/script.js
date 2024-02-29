let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;
        
        switch (buttonText) {
            case '=':
                string = string === '' ? '0' : string;
                string = String(eval(string));
                inputBox.value = string;
                break;
            case 'AC':
                string = '';
                inputBox.value = string;
                break;
            case 'DEL':
                string = string.slice(0, -1);
                inputBox.value = string;
                break;
            case '+/-':
                string = String(-eval(string));
                inputBox.value = string;
                break;
            default:
                string += buttonText;
                inputBox.value = string;
                break;
        }
    });
});
