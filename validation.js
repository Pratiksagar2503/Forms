function view() {
  var p = document.getElementById("pwd");
  if (p.type == "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}

function views() {
  var p2 = document.getElementById("cpwd");
  if (p2.type == "password") {
    p2.type = "text";
  } else p2.type = "password";
}

function show() {
  var nm = document.getElementById("nm").value;
  var no = document.getElementById("no").value;
  var eml = document.getElementById("eml").value;
  var pwd = document.getElementById("pwd").value;
  var cpwd = document.getElementById("cpwd").value;
  var rad = document.getElementsByClassName("rad");
  var check = document.getElementsByClassName("check");
  var fl = document.getElementById("fl").files.length;
  var name = /^[a-zA-Z ]+$/;
  var number = /^[6-9]\d{9}$/;
  var mail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  var pswd = /^((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*~?])){8,12}/;

  if (nm == " ") {
    alert("Please Enter a Name");
  } else if (!nm.match(name)) {
    alert("Name must include Alphabets only");
  } else if (!no.match(number)) {
    alert(
      "Contact number must include numbers only and can be of only 10 digits"
    );
  } else if (!eml.match(mail)) {
    alert("E-mail must contain @ ");
  } else if (pwd !== cpwd) {
    alert("Password not matched ");
  } else if (!pwd.match(pswd)) {
    alert(
      "Password must contain atleast one lowercase, one Uppercase one number,one special character and must be of 8 to 14 characters "
    );
  } else if (document.getElementById("slt").value == "none") {
    alert("Select your City!!");
    return false;
  } else if (!(rad[0].checked || rad[1].checked)) {
    alert("Please select your gender");
  } else if (!(check[0].checked || check[1].checked || check[2].checked)) {
    alert("Please selecet your language!!");
  }else if(fl== 0){
    alert("Please Upload your Picture!")
  }
}
