//Problem: User when clicking on image goes to dead end
//Solution: Create an overlay with the large image - lightbox

var $overlay = $("<div id='overlay'></div>");
//2. Add overlay  
$("body").append($overlay)
  //An image
  //A caption
//1. Capture click event on a link to an image
$("#imageGallery a").click( function(event) {
  event.preventDefault();
  var href = $( this ).attr("href");
  $overlay.show();
  //1.1 Show the overlay
  //1.2 update overlay with the image linked in link
  //1.3 Get child's alt attribute and set caption 
});
//3. When overlay is clicked, it disappears  