$(document).ready(function() {
 
$(".owl-carousel").each(function() {
  $(this).owlCarousel({
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    // Additional configuration options as needed
  });
});
 
});