function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const feedback = document.getElementById('feedback');
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
  
    const lengthCriteria = password.length >= 8;
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCharCriteria = /[\W_]/.test(password);
  
    let score = 0;
    if (lengthCriteria) score++;
    if (uppercaseCriteria) score++;
    if (lowercaseCriteria) score++;
    if (numberCriteria) score++;
    if (specialCharCriteria) score++;
  
    if (password.length === 0) {
      feedback.textContent = '';
      feedback.className = '';
    } else if (score <= 2) {
      feedback.textContent = 'Weak Password – Try adding more complexity!';
      feedback.className = 'weak';
    } else if (score === 3 || score === 4) {
      feedback.textContent = 'Medium Strength – You can improve this password.';
      feedback.className = 'medium';
    } else {
      feedback.textContent = 'Strong Password – Good job!';
      feedback.className = 'strong';
    }
  
    // Suggestions
    if (!lengthCriteria) {
      suggestions.innerHTML += '<li>Add at least 8 characters</li>';
    }
    if (!uppercaseCriteria) {
      suggestions.innerHTML += '<li>Include an uppercase letter (A-Z)</li>';
    }
    if (!lowercaseCriteria) {
      suggestions.innerHTML += '<li>Include a lowercase letter (a-z)</li>';
    }
    if (!numberCriteria) {
      suggestions.innerHTML += '<li>Include a number (0-9)</li>';
    }
    if (!specialCharCriteria) {
      suggestions.innerHTML += '<li>Include a special character (!@#$...)</li>';
    }
  }
  
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');
    
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      toggleIcon.textContent = '🙈';
    } else {
      passwordInput.type = 'password';
      toggleIcon.textContent = '👁️';
    }
  }
  