let button = document.getElementsByClassName('submit')

  function successMessage(){
    if(submit=true){
      document.getElementById('main').className += 'hide';
      document.getElementById("active").className = "success-message";
  
    }

  }
  

  function validateEmail(email) {
    // Create a RegExp object with the regex
    var regex = /^ [a-zA-Z0-9-_]+ (. [a-zA-Z0-9-_]+)*@ [a-z0-9]+ (- [a-z0-9]+)* (. [a-z0-9]+ (- [a-z0-9]+)*)*. [a-z] {2,4}$/;
    // Test the email against the regex
    return regex.test (email);
  }