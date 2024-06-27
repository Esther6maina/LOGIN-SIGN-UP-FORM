function showError(message) {
  const errorMessageElement = document.querySelector('.form__input-error-message');
  errorMessageElement.textContent = message;
  errorMessageElement.style.display = 'block';
}

// Function to hide error message
function hideError() {
  const errorMessageElement = document.querySelector('.form__input-error-message');
  errorMessageElement.style.display = 'none';
}
