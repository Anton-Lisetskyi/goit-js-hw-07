const form = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();

  if (
    form.elements.email.value.trim() === '' ||
    form.elements.password.value.trim() === ''
  ) {
    alert('All form fields must be filled in');
    return;
  }
const formData = {
    [form.elements.email.name]: form.elements.email.value.trim(),
    [form.elements.password.name]: form.elements.password.value.trim(),
  };

  console.log(formData);

  form.reset();
};

form.addEventListener('submit', onFormSubmit);