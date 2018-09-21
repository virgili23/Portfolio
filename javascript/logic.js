/*
49
51
70
99
77
94/99

91hp
*/

// Navigation bar scrolling properties

// function that runs when page loads so changes will stay after a refresh
$(function() {
  // Run on load
  changeHeaderColor();
  //mobileNav();
  // on scroll, run this function again, as the condition will change once scrolled
  $(window).scroll(changeHeaderColor);
  // Run function again on any resize done
  $(window).resize(changeHeaderColor);
});


// adds the following css after user has scrolled this far down
function changeHeaderColor() {

  nav = $('#nav');
//600 is max for mobile, but 650 just to be safe
  if ( ($(window).scrollTop() > nav.height()) && (( $(window).width() > 650 )) ) {
    nav.css("background-color", "rgba(0,0,0,0.8)");
  } else {
    nav.css("background", "transparent");
  }
};

// function mobileNav() {

//   if ( $(window).width() < 701 ) {
//     nav.css("background-color", "blue");
//   }
// }






// change background color after scroll
// $(function() {
//   $(document).scroll(function() {
//     nav = $('.fixed-top');
//     nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
//   });
// });

// change text color after scroll
// $(function() {
//   $(document).scroll(function() {
//     var navLinks = $('.nav-link');
//     navLinks.toggleClass('changed', $(this).scrollTop() > nav.height());
//   });
// });



    
    