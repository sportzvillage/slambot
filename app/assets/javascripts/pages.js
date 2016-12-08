$(function() {
    $('#sounds-amazing1').hide();
    $('#let-us-learn1').hide();
    $('#brazil1').hide();
    $('#portugal1').hide();
  $('#argentina1').hide();
  $('#main-menu1').hide();
  $('#inside-our-earth1').hide();
  $('#air1').hide();
  $('#water1').hide();
  $('#natural-vegetation-and-wildlife1').hide();
  $('#our-changing-earth1').hide();
  
  

$( ".btn-primary" ).click(function() {
  var value = $( this ).text();
  $( this ).closest('div').hide();
  $( this ).closest('div').parent().children('span').text(value).addClass('btn btn-primary').fadeIn(2000);
  
  switch(value){
      case "Sounds Amazing! (click here)":
          $('#sounds-amazing1').fadeIn('slow');
      break;
    case "Let us Learn!":
      $('#let-us-learn1').fadeIn('slow');
      break;
      case "Brazil":
          $('#brazil1').fadeIn('slow');
    break;
    case "Argentina":
          $('#argentina1').fadeIn('slow');
    break;
    case "Portugal":
      $('#portugal1').fadeIn('slow');
    break;
    case "Inside Our Earth":
      $('#inside-our-earth1').fadeIn('slow');
    break;
    case "Main Menu":
      $('#main-menu1').fadeIn('slow');
    break;
    case "Air":
      $('#air1').fadeIn('slow');
    break;
    case "Water":
      $('#water1').fadeIn('slow');
    break;
    case "Natural Vegetation & Wildlife":
      $('#natural-vegetation-and-wildlife1').fadeIn('slow');
    break;
    case "Our Changing Earth":
      $('#our-changing-earth1').fadeIn('slow');
    break; 
    
  }
  $("html, body").animate({ scrollTop: $(document).height() }, 2000);
}); 

$("#new_message").validate({
rules: {
"message[name]": {required: true},  //added this
"message[number]": {required: true, minlength: 10},
"message[message]": {required: true}
}
})





}); 




