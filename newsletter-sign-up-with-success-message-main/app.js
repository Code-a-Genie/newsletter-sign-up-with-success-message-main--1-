const container = document.getElementById("container")
const main = document.getElementById("main")
const signup = document.getElementById("signupForm")
const userEmail = document.getElementById("email")
const  submit = document.getElementById("submitForm")
const  error = document.getElementById("errorText")
const  banner = document.getElementById("banner")
const  successful = document.getElementById("success")
const  dismiss = document.getElementById("dismiss")

function forSuccess(){
    success.classList.add("active")
    container.classList.add("success")
    banner.style.display = "none"
    main.style.display = "none"
}

function validateEmail(){
    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}

Submit.addEventListener("click", (e) => {
     e.preventDefault(e)
     let emailInput = document.getElementById("email")
      userEmail = emailInput.value.trim()
      
      let errorText = document.getElementById("errorText");
      if(validateEmail(email)){
        forSuccess()
        userEmail.innerText = email
        email.value =""

        errorText.classList.remove("active")
        email.classList.remove("active")
      }else{
        errorText.classList.add("active")
        email.classList.add("active")
      }

})

dismiss.addEventListener("click"  () => {
    banner.style.display = "block"
    main.style.display ="block"
    success.classList.remove("active")

})


 