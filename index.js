let form = document.querySelector('form');
form.noValidate = true;

form.addEventListener('submit', formSubmit);

var allInputs = document.querySelectorAll('input');
[...allInputs].forEach(element => {
    element.addEventListener('input', CheckValidation);
});

const emailError = document.querySelector(".email");
const countryError = document.querySelector(".country");
const zipError = document.querySelector(".zip");
const passwordError = document.querySelector(".password");
const confirmError = document.querySelector(".confirm");



function CheckValidation(e) {
    let ele = e.target;
    switch (ele.id) {
        case 'country':
            if (ele.validity.valid) {
                countryError.textContent = '';
            }
            else {
                showCountryError();
            }
            break;

        case 'mail':
            if (ele.validity.valid) {
                emailError.textContent = '';
            }
            else {
                showEmailError();
            }
            break;

        case 'zip':
            if (ele.validity.valid) {
                zipError.textContent = '';
            }
            else {
                showZipError();
            }
            break;

            case 'password':
            if (ele.validity.valid) {
                passwordError.textContent = '';
            }
            else {
                showPasswordError();
            }
            break;

            case 'confirmpassword':
                if(!form.password.value || ele.value.length >= form.password.value.length &&  form.password.value !== ele.value){
                    confirmError.textContent = 'Password and confirm password did not match.';
                    return;
                }
                if (ele.validity.valid) {
                    confirmError.textContent = '';
                }
                else {
                    showConfirmPasswordError();
                }
                break;
    



        default:
            break;
    }
    // if(email.validity.valid){
    //     emailError.textContent = '';
    //     emailError.className = "errorSignal"
    // }
    // else{
    //     showEmailError()
    // }
}


function showConfirmPasswordError() {
    let confirm = form.confirmpassword;
    if (confirm.validity.valueMissing) {
        confirmError.textContent = "You need to enter an confirm password";
    }

    else if (confirm.validity.tooShort) {
        confirmError.textContent = `confirm password should be at least ${confirm.minLength} characters; you entered ${confirm.value.length}.`;
    }
}

function showPasswordError() {
    let password = form.password;
    if (password.validity.valueMissing) {
        passwordError.textContent = "You need to enter an password address";
    }

    else if (password.validity.tooShort) {
        passwordError.textContent = `password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
    }
}


function showZipError() {
    let zip = form.zip;
    if (zip.validity.valueMissing) {
        zipError.textContent = "You need to enter an zip address";
    }

    else if (zip.validity.tooShort) {
        zipError.textContent = `zip should be at least ${zip.minLength} characters; you entered ${zip.value.length}.`;
    }
}

function showCountryError() {
    let country = form.country;
    if (country.validity.valueMissing) {
        countryError.textContent = "You need to enter an country address";
    }

    else if (country.validity.tooShort) {
        countryError.textContent = `country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
    }
}

function showEmailError() {
    let email = form.mail;
    if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an email address";
    }
    else if (email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an email address';
    }
    else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
    }
}

function formSubmit(e) {
    let invalid = true;
    if(form.password && form.confirmpassword){
        if(form.password.value === form.confirmpassword.value){
            invalid = false;
        }
    }
    if (invalid || !form.checkValidity()) {
        e.preventDefault();
        e.stopImmediatePropagation();
        alert('failure')

    }

    else {
        alert('success')
    }
}