  
 function validate(){
    var pass = document.getElementById("password").value;
    var cpass = document.getElementById("cpassword").value;
    

    if (pass !== cpass) {
        alert("Passwords do not match");
        document.getElementById("cpassword").value = "";
        document.getElementById("cpassword").focus();
        return false;
        
    }
    else{
        
        return true;
    }

     
   
}