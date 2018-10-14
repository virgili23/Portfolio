// Navigation bar scrolling properties

// function that runs when page loads so changes will stay after a refresh
$(function() {
  changeHeaderColor();
  //scrollMarker();
  //mobileNav();
  // on scroll, run this function again, as the condition will change once scrolled
  $(window).scroll(changeHeaderColor);
  // Run function again on any resize done
  $(window).resize(changeHeaderColor);
});



// adds the following css after user has scrolled this far down
function changeHeaderColor() {

  nav = $('#nav');
  // brand = $('.navbar-brand');
// These changes take place if DOM width is larger than tablets
  if ( ($(window).scrollTop() > nav.height()) && (( $(window).width() > 998 )) ) {
    // nav.css("background-color", "rgba(0,0,0,0.8)");
    nav.css("background-color", "#111");
  } else {
    nav.css("background", "transparent");
  }
};

// function for changing word colors
// nav link is the words on links
function scrollMarker() {
  
  // for the sections
  portfolio = $('#portfolio');
  nav = $('#nav');

  // for the words themselves
  homeLink = $('#1');
  portfolioLink = $('#2');
  contactLink = $('#3');

  // functions
  // portfolioLink.attr('id', 'scroll-marker');

  if ( $(window).scrollTop() > nav.height() ) {

    portfolioLink.attr('id', 'scroll-marker');
  }

};


