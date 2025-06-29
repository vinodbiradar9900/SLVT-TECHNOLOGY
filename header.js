fetch('../Html/header.html')
  .then(res => res.text())
  .then(data => {
    // Insert header HTML
    document.getElementById('header-placeholder').innerHTML = data;

    // Now that header is loaded, highlight the active nav link
    const currentPage = location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");

      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  })
  .catch(err => console.error('Error loading header:', err));




// Load Header & Add Login Display
// Load Header & Add Login Display
fetch('../html/header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    const username = localStorage.getItem("loggedInUser");
    const userDisplay = document.getElementById("userDisplay");

    if (username && userDisplay) {
      userDisplay.innerHTML = `
        <span>👤 Logged in as <strong>${username}</strong></span>
        <button id="logoutBtn" style="
          margin-right : 15px;

           padding: 6px 12px;
          background: #ffffff;
          color: #004080;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
        ">Logout</button>
      `;

      document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        location.reload(); // or window.location.href = 'login.html';
      });
    }
  });


