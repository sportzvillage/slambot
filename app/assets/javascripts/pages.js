$(function() {
  // welcome
    $('#sounds-amazing1').hide();
    $('#lets-learn').hide();
    $('#brazil1').hide();
    $('#portugal1').hide();
  $('#argentina1').hide();
  $('#main-menu1').hide();
  $('#inside-our-earth1').hide();
  $('#air1').hide();
  $('#water1').hide();
  $('#natural-vegetation-and-wildlife1').hide();
  $('#our-changing-earth1').hide();
  $('#sign-up1').hide();

  //index
  
  

$( ".btn-primary" ).click(function() {
  var value = $( this ).text();
  var idName = $( this ).attr('id');

  // Extract class name in case of yes or no response
  if (value == "Yes" || value == "No"){
    var text = idName;
  }
  else {text = value;}

  $( this ).closest('div').hide();
  $( this ).closest('div').parent().children('span').text(value).addClass('btn btn-primary').fadeIn(2000);
  
  switch(text){
    case "Sounds Amazing! (click here)":
      $('#sounds-amazing1').fadeIn('slow');
    break;
    case "Let's Learn":
      $('#lets-learn').fadeIn('slow');
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
      $('#starting_text').hide();
      $('#sounds-amazing1').hide();
      $('#lets-learn').hide();
      $('#brazil1').hide();
      $('#portugal1').hide();
      $('#argentina1').hide();
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
  // $("html, body").animate({ scrollTop: $(document).height() }, 2000);
}); 

$("#new_message").validate({
rules: {
"message[name]": {required: true},  //added this
"message[number]": {required: true, minlength: 10},
"message[message]": {required: true}
}
})





}); 




