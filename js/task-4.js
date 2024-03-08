const form = document.querySelector('.login-form');

form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
        return alert('All form fields must be filled in');
    };

    console.log({email: emailValue, password: passwordValue});

    event.currentTarget.reset();
};
