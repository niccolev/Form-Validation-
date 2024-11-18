
    // elements
    const form = document.getElementById('form');
    const username = document.getElementById('login');
    const password = document.getElementById('pass');
    const password2 = document.getElementById('pass2');
    const email = document.getElementById('email');
    const checkNewsletter = document.getElementById('newsletter');
    const checkConditions = document.getElementById('terms');

    // error messages
    const usernameError = document.createElement('p');
    usernameError.classList.add('error');
    username.after(usernameError);

    const passwordError = document.createElement('p'); //creating a new <p> element in the registeration doc
    passwordError.classList.add('error'); // adding an .error class to be able to style the error <p> in CSS
    password.after(passwordError); //used to plant the <p> after the invalid element (beside or under)

    const password2Error = document.createElement('p');
    password2Error.classList.add('error');
    password2.after(password2Error);

    const emailError = document.createElement('p');
    emailError.classList.add('error');
    email.after(emailError);

    // Newsletter checkbox alert 
    checkNewsletter.addEventListener('change', () => {
        if (checkNewsletter.checked) {
            alert('You may receive spam emails.');
        }
    });

    // validation function
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default submission

        let isValid = true;

        // validate email using regex
        const emailRegex = /^([a-z\d\.-]+)@([a-z\-]+)\.([a-z]{2,5})$/; 
        if (emailRegex.test(email.value)) {
            emailError.innerText = '';
            email.classList.remove('error');
        } else {
            emailError.innerText = 'Please enter a valid email address.';
            isValid = false;
        }

        // validate username - not empty and no longer than 30 chars 
        if (username.value.trim() === '' || username.value.length >= 30) {
            usernameError.innerText = 'Login name cant be empty and less than 30 characters.';
            isValid = false;
        } else {
            usernameError.innerText = '';
            username.value = username.value.toLowerCase();
        }

        // validate password length
        if (password.value.length < 8) {
            passwordError.innerText = 'Password must contain at least 8 characters.';
            isValid = false;
        } else {
            passwordError.innerText = '';
        }

        // validate matching passwords
        if (password.value !== password2.value || password2.value.trim() === '') {
            password2Error.innerText = 'Passwords do not match.';
            isValid = false;
        } else { 
            password2Error.innerText = '';
        }

        // check if conditions checkbox is checked
        if (!checkConditions.checked) {
            alert('You must accept the terms and conditions.');
            isValid = false;
        }

        // Submit form if everything is valid
        if (isValid) {
            form.submit();
        }
    });

