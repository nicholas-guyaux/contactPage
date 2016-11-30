document.getElementById("submit").onclick = function(){
  if(!validateEmail(document.getElementById("email").value))
  {
    alert("Please enter a valid email");
  }
  else if(document.getElementById("email").value != document.getElementById("confirmEmail").value)
  {
    alert("Confirm email does not match");
  }
  else if(!document.getElementById("firstName").value)
  {
    alert("Please enter your first name");
  }
  else if(!document.getElementById("lastName").value)
  {
    alert("Please enter your last name");
  }
  else {
    alert("Thank you, your order has been placed");
  }
}





function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
