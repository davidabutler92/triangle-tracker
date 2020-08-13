$(document).ready(function() {
  $("#triangle-form").submit(function(event) {
    event.preventDefault();

    const sideA = parseInt($("input#side-a").val());
    const sideB = parseInt($("input#side-b").val());
    const sideC = parseInt($("input#side-c").val());
    // console.log(sideC, sideB, sideA);

    if (sideA === sideB && sideA === sideC) {
      $(".results#equilateral").show();
    } else if (sideA === sideB || sideA === sideC || sideB ===sideC) {
    }
  });
});