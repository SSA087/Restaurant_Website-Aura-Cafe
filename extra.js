function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }

  function submit_form() {
    var txt;  
    if (confirm("Your response has been submitted will get back to you soon...!")) {
      txt = "";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }
  
  function closeForm() {
    document.getElementById("form-div").style.display = "none";
    document.getElementById("demo").innerHTML = "Thank-You...";
  }

  function validateform() 
{
  let x = document.forms["myform"]["iname"].value;
  let y = document.forms["myform"]["inum"].value;
  let z = document.forms["myform"]["iperson"].value;
  let t = document.forms["myform"]["itime"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else if (y == "") {
    alert("Mobile number must be filled out");
    return false;
  }
  else if (z == "") {
    alert("Number of persons is required");
    return false;
  }
  else if (t == "") {
    alert("Time should be specified");
    return false;
  }
  else if (x == "" && y =="" || x == "" && z =="" || x == "" && t =="" || z == "" && y =="" || t == "" && y =="" || x == "" && y =="" && z =="" || x == "" && y =="" && t =="" || t == "" && y =="" && z =="" || x == "" && t =="" && z =="" || x == "" && y =="" && z ==""&&t=="") {
    alert("Error in filling out the form!");
    return false;
  }
  else
    document.getElementById("popupForm").style.display = "block";

    
    // document.getElementById("Go").innerHTML=("Your request has been taken and we will get back to you soon...");

}
