$(document).ready(function() {

  var navbarOffest = $(".navbar").offset().top;

  $(window).on("scroll", function() {
    var navbarHeight = $(".navbar").outerHeight();

    if ($(window).scrollTop() >= navbarOffest) {
      $(".navbar").addClass("navbar-fixed-top");
      $("body").css("padding-top", navbarHeight + "px");
    } else {
      $(".navbar").removeClass("navbar-fixed-top");
      $("body").css("padding-top", "0");
    }
  });
});
