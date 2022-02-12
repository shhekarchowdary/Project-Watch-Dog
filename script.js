$(document).ready(function(){

  $('#signUpForm').submit(function(e) {

    var allGood = true;
    console.log("hehvbhbv")
    e.preventDefault();
    var first_name = $('#signUpName').val();
    var email = $('#signUpEmailId').val();
    var password = $('#signUpPassword').val();
    var rePassword = $('#reEnterPassword').val();
    var role = $( "#signUpRole option:selected" ).val();
    
    console.log(first_name);

    $(".error").remove();
    
    if (first_name.length < 1) {
      $('#signUpName').after('<span class="error">This field is required</span>');
      console.log("jsbjsf");
      allGood = false;
    }
    if (email.length < 1) {
      $('#signUpEmailId').after('<span class="error">This field is required</span>');
      allGood = false;
    } else {
      var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#signUpEmailId').after('<span class="error">Enter a valid email</span>');
        allGood = false;
      }
    }
    if (password.length < 8 && rePassword.length < 8) {
      $('#signUpPassword').after('<span class="error">Password must be at least 8 characters long</span>');
      allGood = false;
    }else{
      if(password != rePassword){
        $('#reEnterPassword').after('<span class="error">Passwords dont match</span>');
        allGood = false;
      }
    } 

    if(allGood){
      const newUser = new User(first_name, email, password, role);
      var newUserJson = JSON.stringify(newUser);
      
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          console.log(req.responseText);
        }
      };
        
      req.open("POST", "https://api.jsonbin.io/v3/b", true);
      req.setRequestHeader("Content-Type", "application/json");
      req.setRequestHeader("X-Master-Key", "$2b$10$ztxUx.cgonTCzFgRnvPqpuAeIHGRrBP1cijK.k5kAKH8TPYsQMIVK");
      req.send(newUserJson);


    }
    
  });

   

});