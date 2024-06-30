import throttle from 'lodash.throttle';

const OBJECT_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const { email, message } = feedbackForm.elements;

feedbackForm.addEventListener('input', throttle(onInputData, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem(OBJECT_KEY)) || {};
reloadPage();

function onInputData(event) {
    dataForm = {
        email: email.value,
        message: message.value
    };
    localStorage.setItem(OBJECT_KEY, JSON.stringify(dataForm));
}

function reloadPage() {
    if (dataForm) {
        email.value = dataForm.email || '';
        message.value = dataForm.message || '';
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    if (email.value === '' || message.value === '') {
        return alert('Error: All fields must be filled out.');
    }
    console.log({ email: email.value, message: message.value });

    localStorage.removeItem(OBJECT_KEY);
    feedbackForm.reset();
    dataForm = {};
}
