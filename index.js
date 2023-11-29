function generateOtp(){
    let generateOtp = Math.floor(1000 + Math.random() * 9999);

    console.log(generateOtp);
    window.localStorage.setItem("otp", generateOtp);
}

function validateOtp(){
    let validOtp = document.querySelector("#validOtp").value;

    let otp = window.localStorage.getItem("otp");

    if(validOtp == otp){
        alert("Valid Otp")
    }else{
        alert("Invalid Otp")
    }
}