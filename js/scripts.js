$(document).ready(function() {
  $("#output").click(function() {
    event.preventDefault();
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
   
   

  if (sideA === sideB && sideB === sideC) {
    alert("Your triangle is Equilateral");

  } else if (sideA === sideB && sideB !== sideC || sideB === sideC && sideB !== sideA || sideA === sideC && sideA !== sideB) 
  { 
    alert("Your triangle is isosceles");

  } else if (sideA + sideB <= sideC || sideB + sideC <= sideA || sideC + sideA <= sideB) {

    alert("Your triangle is scalene");

  }else {
       alert("Not a triangle");
    }



    // alert(This is not a triangle!)
  
  

  });
});