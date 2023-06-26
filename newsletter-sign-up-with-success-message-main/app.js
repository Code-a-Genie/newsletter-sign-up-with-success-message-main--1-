// // declare form using the Id
// const form = document.getElementById("signup-form");
// // add event listener to form
// form.addEventListener('submit', handleSubmit);
// // declare input field using the id 
// const emailInput = document.querySelector("#email");
// // declare the function for the addeventlistener added to form

// function handleSubmit(e){
//     e.preventDefault()
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // store the value from email input field inside currentEmail
//     let currentEmail = emailInput.value.trim();
//     // console.log()
//     let errorMessage = document.querySelector('#errorText')
//     if(emailRegex.test(currentEmail)===true){
//         errorMessage.innerText= ''
//         window.location.href = './thankyou.html'
        
//     }
//     else{
//        errorMessage.innerText= 'Valid email required'
//     }
// }


// Declare form using the Id
const form = document.getElementById("signup-form");
// Add event listener to form
form.addEventListener('submit', handleSubmit);

// Declare input field using the id 
const emailInput = document.querySelector("#email");

// Declare the function for the event listener added to form
function handleSubmit(e){
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Store the value from email input field inside currentEmail
    let currentEmail = emailInput.value.trim();
    let errorMessage = document.querySelector('#errorText');

    if(emailRegex.test(currentEmail) === true){
        errorMessage.innerText = '';
        // Redirect to the thank you page with email as a query parameter
        window.location.href = `./thankyou.html?email=${encodeURIComponent(currentEmail)}`;
    }
    else{
       errorMessage.innerText = 'Valid email required';
    }
}



