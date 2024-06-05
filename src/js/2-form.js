const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const emailInput = form.elements.email;

const messageInput = form.elements.message;

const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  emailInput.value = formData.email;
  messageInput.value = formData.message;
}

const saveToLocalStorage = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const updateFormData = event => {
  formData[event.target.name] = event.target.value.trim();
  saveToLocalStorage();
};

form.addEventListener('input', updateFormData);

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
