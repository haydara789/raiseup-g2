// strat show password
var showPassword = document.querySelector('.show-password')
var passwordinput = document.querySelector('[type=password]')

showPassword.addEventListener('click', function () {
    // passwordinput.setAttribute('type','text')
    var type = passwordinput.getAttribute('type')
    // console.log(type);

    if (type == 'text') {
        showPassword.innerHTML = '<i class="fa-solid fa-eye"></i>'
        passwordinput.setAttribute('type', 'password')
    } else {
        showPassword.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
        passwordinput.setAttribute('type', 'text')
    }
});
// end show password
// strat email validation
var emailinput = document.querySelector('[type=email]');
var emailHelp = document.querySelector('#emailHelp');
emailinput.addEventListener('blur', function () {
    var value = emailinput.value
    if (value == '') {
        emailHelp.classList.add('text-danger')
        emailHelp.innerHTML = "email is required";
    } else if (!value.includes('@') || !value.includes('')) {
        emailHelp.innerHTML = "email must be valid mail";
        emailinput.classList.add('border', 'border-danger')
    } else {
        emailinput.classList.remove('border', 'border-danger')
        emailHelp.innerHTML = "";
    }
});
// end email validation
// strat actice navbar
var navlinks = document.querySelectorAll('.nav-link')
navlinks.forEach(addActiveClass => {
    addActiveClass.addEventListener('click', function () {
        navlinks.forEach(reomveActiveClass => {
            reomveActiveClass.classList.remove('active')
        })
        addActiveClass.classList.add('active')
    })
});
// end actice navbar
//strat scroll to top
var scrollToTop = document.querySelector('.scroll-to-top')

scrollToTop.addEventListener('click', function () {
    window.scrollTo(0, 0)
});

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= 500) {
        scrollToTop.style.display = 'block'
    } else {
        scrollToTop.style.display = 'none'
    }
});
//end scroll to top
