
   document.getElementById('jobApplicationForm').addEventListener('submit', function(e) {
      e.preventDefault();

      // TODO: Add real submission via fetch/ajax here
      // fetch('/submit', { method: 'POST', body: new FormData(this) })
      //   .then(...).catch(...);

      // Simulate success:
      this.style.display = 'none';
      document.getElementById('thankYou').style.display = 'block';
    });



      document.getElementById('jobApplicationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Optional: Perform form validation or AJAX submission here

    // Show dialog box
    alert("✅ Applied Successfully!");

    // Optional: show thank you section
    document.getElementById('thankYou').style.display = 'block';

    // Redirect to homepage after short delay (e.g., 2 seconds)
    setTimeout(function() {
      window.location.href = "index.html"; // Change this to your actual homepage
    }, 2000);
  });