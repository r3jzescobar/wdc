

//    document.getElementById("demo").innerHTML =
//     "navigator.cookieEnabled is " + navigator.cookieEnabled;

var txt = "";
txt += "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
txt += "<p>Browser Name: " + navigator.appName + "</p>";
txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
txt += "<p>Browser Language: " + navigator.language + "</p>";
txt += "<p>Browser Online: " + navigator.onLine + "</p>";
txt += "<p>Platform: " + navigator.platform + "</p>";
txt += "<p>User-agent header: " + navigator.userAgent + "</p>";

document.getElementById("demo").innerHTML = txt;

function validateForm() {
    
  var max_char = 6;
   var name = document.getElementById("name");
   var pass = document.getElementById("pass");

   if(name.value == "" ){
       alert("Please input your username")
   }
  
   if(name.value.length > max_char){
       alert("Password length exceeed!")
   }
   if(pass.value == ""){
    alert("Please input your password")
    }
    
}

function paraMoveOut(){
    document.getElementById("abc").setAttribute("style","color:yellow");
}

function paraMoveOn() {

    document.getElementById("abc").setAttribute("style","color:blue");
}
