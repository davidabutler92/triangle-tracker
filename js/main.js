$(document).ready(function() {
  $("#triangle-form").submit(function(event) {
    event.preventDefault();

    const sideA = parseInt($("input#side-a").val());
    // console.log(sideA);
  });
});