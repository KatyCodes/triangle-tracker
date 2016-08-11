//back end

//front end
$(document).ready(function() {
  $("form").submit(function(event) {
    var side1 = parseInt($("input#uno1").val());
      // alert(side1)
    var side2 = parseInt($("input#dos2").val());
      // alert(side2)
    var side3 = parseInt($("input#tres3").val());
      // alert(side3)

    if (side1 === side2 && side2 === side3){
      alert("Your triangle is equilateral")
    }
    else if (side1 === side2 && side2 != side3){
      alert("Your triangle is an isoceles")
    }
    else if (side3 === side2 && side2 != side1){
      alert("Your triangle is an isoceles")
    }
    else if (side1 === side3 && side3 != side2){
      alert("Your triangle is an isoceles")
    }



   event.preventDefault();
  });
  });
