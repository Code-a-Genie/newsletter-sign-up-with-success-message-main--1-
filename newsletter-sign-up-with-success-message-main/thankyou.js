// const currentMessage = document.querySelector("#message")
// let currentEmail = emailInput.value.trim();
// currentEmail.addEventListener()
// currentMessage.textContent =`A confirmation email has been sent to  ${currentEmail} . 
// Please open it and click the button inside to confirm your subscription. `

// Get the email value from the URL query parameters
const urlSearchParams = new URLSearchParams(window.location.search);
const email = urlSearchParams.get('email');
// Display the email value in the thank you message
const successMessage =document.getElementById("message")
const successMessageText = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
successMessage.textContent = successMessageText;
// Add event listener to the dismiss button
const dismissButton = document.getElementById("dismiss")
dismissButton.addEventListener('click', handleDismiss)

function handleDismiss(){
    window.location.href = './index.html'
}






