// Toggle Hamburger menu display on click
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const headerLinks = document.querySelector('.header-links');

    hamburgerMenu.addEventListener('click', function () {
        headerLinks.classList.toggle('active');
    });

// JavaScript for form validation
    document.getElementById('login-form').addEventListener('submit', function(event) {
            // Get the email input value
            var email = document.getElementById('email').value;
            // Regular expression for validating email
            var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            // Check if the email matches the pattern
            if (!emailPattern.test(email)) {
                // Show error message
                document.getElementById('email-err').style.display = 'block';
                // Prevent form submission
                event.preventDefault();
            } else {
                // Hide error message
                document.getElementById('email-err').style.display = 'none';
            }
        });
   
    

let today = new Date();
let christmasYear = today.getFullYear();

if (today.getMonth() == 11 && today.getDate() > 25) {
  christmasYear = christmasYear + 1;
}

let christmasDate = new Date(christmasYear, 11, 25);
let dayMilliseconds = 1000 * 60 * 60 * 24;

let remainingDays = Math.ceil(
  (christmasDate.getTime() - today.getTime()) /
   (dayMilliseconds)
);