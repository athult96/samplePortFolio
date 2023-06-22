function validatename(){
    let text=document.getElementById("fname").value
    let regex=/^[a-zA-Z ]+$/
    if(regex.test(text)){
        document.getElementById("name-warning").innerHTML="succes"
        document.getElementById("name-warning").style.color="green"
        return true
    }else{
        document.getElementById("name-warning").innerHTML="Failed"
        document.getElementById("name-warning").style.color="Red"
        return false
    }
}

function validateLastName(){
    let text=document.getElementById("lname").value
    let regex=/^[a-zA-Z ]+$/
    if(regex.test(text)){
        document.getElementById("lname-warning").innerHTML="succes"
        document.getElementById("lname-warning").style.color="green"
        return true
    }else{
        document.getElementById("lname-warning").innerHTML="Failed"
        document.getElementById("lname-warning").style.color="Red"
        return false
    }
}

function validateMobNum(){
    let text=document.getElementById("mnum").value
    let regex=/^[0-9]{9}/
    if(regex.test(text)){
        document.getElementById("mnum-warning").innerHTML="succes"
        document.getElementById("mnum-warning").style.color="green"
        return true
    }else{
        document.getElementById("mnum-warning").innerHTML="Failed"
        document.getElementById("mnum-warning").style.color="Red"
        return false
    }
} 

function validateEmail(){
    let text=document.getElementById("email").value
    let regex=/^([a-zA-Z0-9\.]+)@([a-zA-Z0-9\.]{2,20})\.([a-zA-Z]{2,6})(.[a-z]{2,6})?$/;
    if(regex.test(text)){
        document.getElementById("email-warning").innerHTML="succes"
        document.getElementById("email-warning").style.color="green"
        return true
    }else{
        document.getElementById("email-warning").innerHTML="Failed"
        document.getElementById("email-warning").style.color="Red"
        return false
    }
} 

function validateSubmission() {
    validatename()
    validateLastName()
    validateMobNum()
    validateEmail()
    
    if(  validatename()&& validateLastName()&&  validateMobNum()&&  validateEmail() )
    return true
    else
    return false
}