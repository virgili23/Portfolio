// Navigation bar scrolling properties

// function that runs when page loads so changes will stay after a refresh
$(function() {
  changeHeaderColor();
  // changeMainColor();
  //scrollMarker();
  //mobileNav();
  // on scroll, run this function again, as the condition will change once scrolled
  $(window).scroll(changeHeaderColor);
  // $(window).scroll(changeMainColor);
  // Run function again on any resize done
  $(window).resize(changeHeaderColor);
  // $(window).resize(changeMainColor);
});



// adds the following css after user has scrolled this far down
function changeHeaderColor() {

  nav = $('#nav');

  brand = $('#brand');

  // brand = $('.navbar-brand');
// These changes take place if DOM width is larger than tablets
  // if ( ($(window).scrollTop() > nav.height()) && (( $(window).width() > 998 )) ) {
    if ( ($(window).scrollTop() > ($(window).height() - nav.height())) && (( $(window).width() > 908 )) ) {
    // nav.css("background-color", "rgba(0,0,0,0.8)");
    // nav.css("background-color", "#1a1a1a");
    nav.css({
      "background-color": "#333333",
      "opacity": "0.95"
    });

    // nav.addclass("fadeInDown");
  } else {
    nav.css({
      "background-color": "transparent",
      "opacity": "1"

    });
  }

};

function changeMainColor() {

  name = $('.name');

  if( $(window).scrollTop() > nav.height()) {
    
    name.css("color", "transparent");
  } else {
    name.css("color", "white;")
  }
}

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


