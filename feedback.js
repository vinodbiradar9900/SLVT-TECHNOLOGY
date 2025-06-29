document.getElementById('submitBtn').addEventListener('click', function() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        return alert('Please fill in all fields.');
      }

      // Simulate successful submission
      // In real usage, replace this with fetch()/AJAX to your endpoint
      // .then(() => { ... show thank you ... })

      // Disable fields and button
      [ 'name', 'email', 'message' ].forEach(id => {
        document.getElementById(id).disabled = true;
      });
      document.getElementById('submitBtn').disabled = true;

      // Show thank-you message
      document.getElementById('thankyou').style.display = 'block';
    });