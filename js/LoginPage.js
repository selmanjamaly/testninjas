var objPeople = [
{
  username: "test",
  password: "123"
},
{
  username: "selman",
  password: "123"
}
]

function Login() {

var username = document.getElementById("email").value;
var password = document.getElementById("pwd1").value;


for (i= 0; i< objPeople.length; i++)   {
  if(username == objPeople[i].username && password == objPeople[i].password) {
    window.location="Dashboard.html";
    return
  }
}
    window.alert("incorrect username and password");
}


function ResetLogin() {
  document.getElementById("email").value = '';
  document.getElementById("pwd1").value = '';
}

function logout()
{
    window.location="Page.html";
}
function gobackto()
{
    window.location="Dashboard.html";
}
