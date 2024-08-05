const formData = { email: '', message: '' };

const formArea = document.querySelector('.feedback-form');
const emailArea = formArea.querySelector('input[name="email"]');
const messageArea = formArea.querySelector('textarea[name="message"]');

const keyLs = 'feedback-form-state';
// console.log(emailArea);
const dataFromLs = () => {
  const savedData = localStorage.getItem(keyLs);
  if (savedData) {
    const parsedDataFromLs = JSON.parse(savedData);
    emailArea.value = parsedDataFromLs.email ?? '';
    messageArea.value = parsedDataFromLs.message ?? '';
    formData.email = parsedDataFromLs.email ?? '';
    formData.message = parsedDataFromLs.message ?? '';
  }
};

dataFromLs();

formArea.addEventListener('input', event => {
  const element = event.target;
  formData[element.name] = element.value.trim();
  localStorage.setItem(keyLs, JSON.stringify(formData));
});

formArea.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Заповніть всі поля, будь ласка!');
    return;
  }

  console.log(formData);

  localStorage.removeItem(keyLs);
  formData.email = "";
  formData.message = "";
  formArea.reset();
});
