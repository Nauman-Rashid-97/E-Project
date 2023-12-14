function Go(){

var uid = document.getElementById("username").value;
var uemail = document.getElementById("email").value;
var uphone = document.getElementById("phone").value;
var umessage = document.getElementById("Message").value;

var usr = localStorage.setItem("Name",uid);
var uel = localStorage.setItem("Email",uemail);
var uph = localStorage.setItem("Phone",uphone);
var umes = localStorage.setItem("Message",umessage)


}