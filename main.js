/* ========================WRITE YOUR JS FROM HERE======================== */

//Show Password
    function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function loginfun(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if(username.value === "incubateind" && password.value === "Incubateind1" )
        {
             
            alert("You LogIn Successfully!");
            return false;
        }
    else{
        alert("Something went wrong!");
        return true;
    }
}