function showForm(formName) {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const buttons = document.querySelectorAll('.toggle-btn');
 
    if (formName === 'login') {
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
      buttons[0].classList.add('active');
      buttons[1].classList.remove('active');
    } else {
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
      buttons[1].classList.add('active');
      buttons[0].classList.remove('active');
    }
  }

  

    document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
 
    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const messageDiv = document.getElementById("message");
 
    if (name && email && password) {
      messageDiv.textContent = "Signup successful! Welcome, " + name + " 🎉";
      messageDiv.className = "message success";
    } else {
      messageDiv.textContent = "Please fill all fields.";
      messageDiv.className = "message error";
    }
  });