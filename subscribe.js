    window.onload = function () {
      const params = new URLSearchParams(window.location.search);
      const email = params.get("email");
      document.getElementById("email-display").textContent = email;
    };
  