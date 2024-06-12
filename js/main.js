document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const button = document.getElementById('form-btn');
    const input = document.getElementById('form-input');

    const validateEmail = (email) => {
        const regEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+(com|ru)$/;
        if (regEx.test(email)) {
            input.value = '';
            input.blur();
            alert("Welcome to the team!");
        } else {
            input.focus();
            alert("Email is invalid");
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateEmail(input.value);
    });

    
    button.addEventListener('click', (e) => {
        e.preventDefault();
        validateEmail(input.value);
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            validateEmail(input.value);
        }
    });
});