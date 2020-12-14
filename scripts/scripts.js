var user;
var pass;
var first;
var last;


function check(e)
{
  e.preventDefault();
  user = document.getElementById("username").value;
  pass = document.getElementById("password").value;
  first = document.getElementById("first").value;
  last = document.getElementById("last").value;
  if(user== "" || pass == "" || first==""||last=="") {
    alert("Vui lòng kiểm tra lại!");
    }
  else form.submit();  
}
function kiemtra(e)
{
  e.preventDefault();
  user = document.getElementById("username").value;
  pass = document.getElementById("password").value;
  if(user== "" || pass == "") {
    alert("Vui lòng kiểm tra lại!");
    }
  else form.submit();
}


function display()
{

}