// Toggle Hamburger menu display on click
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const headerLinks = document.querySelector('.header-links');

    hamburgerMenu.addEventListener('click', function () {
        headerLinks.classList.toggle('show');
    });

    var username = document.getElementById('username');
    var loginForm = document.getElementById('login-form');
    var usernameErrPara = document.getElementById('username-err');

    if (username) {
        username.addEventListener('input', function(e){
            console.log(e.target.value);
            var pattern = /^[\w]{6,8}$/;
            var currentValue = e.target.value;
            var valid = pattern.test(currentValue);

            if(valid){
                usernameErrPara.style.display = 'none';
            } else {
                usernameErrPara.style.display = 'block';
            }
        });
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