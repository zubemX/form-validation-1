

 const myForm = document.querySelector("#myform")

 const firstNameInput = document.querySelector("#firstname")

 const lastNameInput = document.querySelector("#lastname")

 const errorMsg = document.querySelector("#error")

 const emailAddress = document.querySelector("#email")

 const phoneNumber = document.querySelector("#yourno")

 const passWord = document.querySelector("#password")


myForm.addEventListener("submit", validate)


 function validate(e){

    e.preventDefault()

    if(firstNameInput.value == "" || lastNameInput.value == "" || emailAddress.value == "" || phoneNumber.value == "" ){
        errorMsg.textContent = "Please Enter All Fields"
    }else if(passWord.value == "" || passWord.value.length < 6 ){
            errorMsg.textContent = "Password muct contain 6 char"
    }


 }