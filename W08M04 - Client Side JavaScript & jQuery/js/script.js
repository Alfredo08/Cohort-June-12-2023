
const $homeMenu = $('#home');

$homeMenu.on('click', (event) => {
    console.log("You just clicked the home menu item!");
    console.log(event);
    const $menuItems = $('li').text("***");
    console.log($menuItems);
});
/*
const homeMenu = document.querySelector("#home");

homeMenu.addEventListener('click', (event) => {
    console.log("You just clicked the home menu item!");
    console.log(event);
    const menuItems = document.querySelectorAll('li');
    
    for(let i = 0; i < menuItems.length; i ++){
        menuItems[i].innerText += "*";
    }

});

*/

/*
const $signUpForm = $('form');

$signUpForm.on('submit', (event) => {
    event.preventDefault();

    const $fullName = $('#fullName');
    const $email = $('#email');
    const $password = $('#password');
    const $passConfirmation = $('#passwordConfirmation');
    const $passwordErrorMessage = $('#passwordConfErrorMessage');
    const $country = $('#country');
    const $gender = $('.gender:checked');

    if($password.val() !== $passConfirmation.val()){
        console.log("Passwords do not match!");
        $passwordErrorMessage.text('Passwords do not match!');
    }
    else{
        $passwordErrorMessage.text('');
    }

    console.log(`FullName: ${$fullName.val()} 
                 Email: ${$email.val()}
                 Password: ${$password.val()}
                 Pass confirmation: ${$passConfirmation.val()}
                 Country: ${$country.val()}
                 Gender: ${$gender.val()}`);

    const $formResults = $('#formSubmission');
    $formResults.html(`
        <div>
            <h2> FullName: ${$fullName.val()} </h2>
            <p> Email: ${$email.val()} </p>
            <p> Password: ${$password.val()} </p>
            <p> Country: ${$country.val()} </p>
            <p> Gender: ${$gender.val()} </p>
        </div>
    `);
});
*/


const signUpForm = document.querySelector('form');

signUpForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = document.querySelector('#fullName');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const passConfirmation = document.querySelector('#passwordConfirmation');
    const passwordErrorMessage = document.querySelector('#passwordConfErrorMessage');
    const country = document.querySelector('#country');
    const gender = document.querySelectorAll('.gender');

    if(password.value !== passConfirmation.value){
        console.log("Passwords do not match!");
        passwordErrorMessage.innerText = "Passwords do not match!";
    }
    else{
        passwordErrorMessage.innerText = "";
    }
    let textGender = "";
    for(let i = 0; i < gender.length; i ++){
        if(gender[i].checked){
            textGender = gender[i].value;
        }
    }
    
    console.log(`FullName: ${fullName.value} 
                 Email: ${email.value}
                 Password: ${password.value}
                 Pass confirmation: ${passConfirmation.value}
                 Country: ${country.value}
                 Gender: ${textGender}`);

    const formResults = document.querySelector('#formSubmission');
    formResults.innerHTML = `
        <div>
            <h2> FullName: ${fullName.value} </h2>
            <p> Email: ${email.value} </p>
            <p> Password: ${password.value} </p>
            <p> Country: ${country.value} </p>
            <p> Gender: ${textGender} </p>
        </div>
    `;
});

