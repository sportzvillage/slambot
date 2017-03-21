$(function() {
  // welcome
    $('#main-menu2').hide();
    $('#inside-our-earth').hide();
    $('#master-blaster-sachin').hide();
    $('#cool-calm-dhoni').hide();
    $('#stylish-kohli').hide();
    $('#mantle').hide();
    $('#core').hide();
    $('#crust').hide();
    $('#two-grand-slams').hide();
    $('#four-grand-slams').hide();
    $('#i-dont-know').hide();
    $('#metamorphic-rocks').hide();
    $('#minerals').hide();
    $('#schumacher').hide();
    $('#hamilton').hide();
    $('#our-changing-earth').hide();
    $('#volcanos').hide();
    $('#closer-look-at-volcanos').hide();
    $('#work-of-river').hide();
    $('#work-of-sea-waves').hide();
    $('#work-of-ice').hide();
    $('#work-of-wind-in-desert').hide();
    $('#air').hide();
    $('#messi').hide();
    $('#ronaldo').hide();
    $('#show-me-an-example').hide();
    $('#what-is-atmosphere').hide();
    $('#air-we-breathe').hide();
    $('#harmful-sun-rays').hide();
    $('#inhaled-by-human-beings').hide();
    $('#is-a-greenhouse-gas').hide();
    $('#prevents-from-uv-radiation').hide();
    $('#layers-of-earth').hide();
    $('#stratosphere').hide();
    $('#troposphere').hide();
    $('#effects-of-temparature-on-athletics').hide();
    $('#effects-of-temparature-on-american-football').hide();
    $('#swing-bowling-in-cricket').hide();
    $('#curl-of-football').hide();
    $('#water').hide();
    $('#show-answer').hide();
    $('#ocean-circulation').hide();
    $('#ocean-currents').hide();  
    $('#natural-vegetation-and-wildlife').hide();
    $('#types-of-natural-vegetation').hide();
    $('#more-bounce-in-cold-weather').hide();
    $('#more-bounce-in-hot-weather').hide();
    $('#slope-and-thickness-of-soil').hide();
    $('#more-on-biking').hide();
    $('#life-in-deserts').hide();
    $('#hot-desert').hide();
    $('#more-sports-in-hot-desert').hide();
    $('#cold-desert').hide();
    $('#main-menu10').hide();
    $('#amazing-chapter1').hide()    
    $('#not-that-interesting1').hide();
    $('#amazing-chapter2').hide()    
    $('#not-that-interesting2').hide();
    $('#amazing-chapter3').hide()    
    $('#not-that-interesting3').hide();
    $('#amazing-chapter4').hide()    
    $('#not-that-interesting4').hide();
    $('#amazing-chapter5').hide()    
    $('#not-that-interesting5').hide();
    $('#amazing-chapter6').hide()    
    $('#not-that-interesting6').hide();
  //index
  

$( ".btn-primary" ).click(function() {
  var value = $( this ).text();
  var idName = $( this ).attr('id');

  // Extract class name in case of yes or no response
  if (value == "Yes" || value == "No" || value == "Back To Main Menu"|| value == "Main Menu" || value == "Inside Our Earth" || value == "Our Changing Earth" || value == "Air" || value == "Water" || value == "Natural Vegetation and Wildlife" || value == "Life in Deserts"|| value == "I Dont Know" || value == "Minerals" || value == "Amazing Chapter" || value == "Not That Interesting" || value == "Messi" || value == "Ronaldo"){
    var text = idName;
  }
  else {text = value;}

  $( this ).closest('div').hide();
  $( this ).closest('div').parent().children('span').text(value).addClass('btn btn-primary').fadeIn(2000);
  
  switch(text){
case "main-menu-index":
$('#main-menu2').fadeIn('slow')
break;
case "inside-our-earth-chapter":
$('#inside-our-earth').fadeIn('slow')
break;
case "Master Blaster Sachin":
$('#master-blaster-sachin').fadeIn('slow')
break;
case "Cool Calm Dhoni":
$('#cool-calm-dhoni').fadeIn('slow')
break;
case "Stylish Kohli":
$('#stylish-kohli').fadeIn('slow')
break;
case "Mantle":
$('#mantle').fadeIn('slow')
break;
case "Core":
$('#core').fadeIn('slow')
break;
case "Crust":
$('#crust').fadeIn('slow')
break;
case "Two Grand Slams":
$('#two-grand-slams').fadeIn('slow')
break;
case "Four Grand Slams":
$('#four-grand-slams').fadeIn('slow')
break;
case "i-dont-know1":
$('#i-dont-know').fadeIn('slow')
break;
case "Metamorphic Rocks":
$('#metamorphic-rocks').fadeIn('slow')
break;
case "minerals1":
$('#minerals').fadeIn('slow')
break;
case "Hamilton":
$('#hamilton').fadeIn('slow')
break;
case "Schumacher":
$('#schumacher').fadeIn('slow')
break;
case "our-changing-earth-chapter":
    $('#our-changing-earth').fadeIn('slow')
break;
case "Volcanos":
    $('#volcanos').fadeIn('slow')
break;
case "Closer Look at Volcanos":
    $('#closer-look-at-volcanos').fadeIn('slow')
break;
case "Work of River":
    $('#work-of-river').fadeIn('slow')
break;
case "Work of Sea Waves":
    $('#work-of-sea-waves').fadeIn('slow')
break;
case "Work of Ice":
    $('#work-of-ice').fadeIn('slow')
break;
case "Work of Wind in Desert":
    $('#work-of-wind-in-desert').fadeIn('slow')
break;
case "air-chapter":
$('#air').fadeIn('slow')
break;
case "messi1":
$('#messi').fadeIn('slow')
break;
case "ronaldo1":
$('#ronaldo').fadeIn('slow')
break;
case "Show me an Example":
$('#show-me-an-example').fadeIn('slow')
break;
case "What is Atmosphere":
$('#what-is-atmosphere').fadeIn('slow')
break;
case "Air we Breathe":
$('#air-we-breathe').fadeIn('slow')
break;
case "Harmful Sun Rays":
$('#harmful-sun-rays').fadeIn('slow')
break;
case "Inhaled by Human Beings":
$('#inhaled-by-human-beings').fadeIn('slow')
break;
case "Is a Greenhouse Gas":
$('#is-a-greenhouse-gas').fadeIn('slow')
break;
case "Prevents from UV Radiation":
$('#prevents-from-uv-radiation').fadeIn('slow')
break;
case "Layers of Earth":
$('#layers-of-earth').fadeIn('slow')
break;
case "Troposphere":
$('#troposphere').fadeIn('slow')
break;
case "Stratosphere":
$('#stratosphere').fadeIn('slow')
break;
case "Effects of Temperature on American Football":
$('#effects-of-temparature-on-american-football').fadeIn('slow')
break;
case "Effects of Temperature on Athletics":
$('#effects-of-temparature-on-athletics').fadeIn('slow')
break;
case "Swing Bowling in Cricket":
$('#swing-bowling-in-cricket').fadeIn('slow')
break;
case "Curl of Football":
$('#curl-of-football').fadeIn('slow')
break;
case "water-chapter":
$('#water').fadeIn('slow')
break;
case "Show Answer":
$('#show-answer').fadeIn('slow')
break;
case "Ocean Circulation":
$('#ocean-circulation').fadeIn('slow')
break;
case "Ocean Currents":
$('#ocean-currents').fadeIn('slow')
break;
case "natural-vegetation-and-wildlife-chapter":
$('#natural-vegetation-and-wildlife').fadeIn('slow')
break;
case "Types of Natural Vegetation":
$('#types-of-natural-vegetation').fadeIn('slow')
break;
case "More Bounce in Hot Weather":
$('#more-bounce-in-hot-weather').fadeIn('slow')
break;
case "More Bounce in Cold Weather":
$('#more-bounce-in-cold-weather').fadeIn('slow')
break;
case "Slope and Thickness of Soil":
$('#slope-and-thickness-of-soil').fadeIn('slow')
break;
case "More on Biking":
$('#more-on-biking').fadeIn('slow')
break;
case "life-in-deserts-chapter":
$('#life-in-deserts').fadeIn('slow')
$( '#life-in-deserts' ).children('span').hide()
$( '#life-in-deserts').children( ".col-sm-12" ).show()
break;
case "Hot Desert":
$('#hot-desert').fadeIn('slow')
$( '#hot-desert' ).children('span').hide()
$( '#hot-desert').children( ".col-sm-12" ).show()
var viewportHeight = $(window).height()+400;

    $('html, body').animate({
        scrollTop: viewportHeight,
        complete: function () {
            //Hide your button here
        }
    }, 2000);
break;
case "More Sports in Hot Desert":
$('#more-sports-in-hot-desert').fadeIn('slow')
var viewportHeight = $(window).height()+1550;
    $('html, body').animate({
        scrollTop: viewportHeight,
        complete: function () {
            //Hide your button here
        }
    }, 2000);
break;
case "Cold Desert":
$('#cold-desert').fadeIn('slow')
break;
case "amazing-chapter-index1":
$('#amazing-chapter1').fadeIn('slow')
break;
case "not-that-interesting-index1":
$('#not-that-interesting1').fadeIn('slow')
break;
case "amazing-chapter-index2":
$('#amazing-chapter2').fadeIn('slow')
break;
case "not-that-interesting-index2":
$('#not-that-interesting2').fadeIn('slow')
break;
case "amazing-chapter-index3":
$('#amazing-chapter3').fadeIn('slow')
break;
case "not-that-interesting-index3":
$('#not-that-interesting3').fadeIn('slow')
break;
case "amazing-chapter-index4":
$('#amazing-chapter4').fadeIn('slow')
break;
case "not-that-interesting-index4":
$('#not-that-interesting4').fadeIn('slow')
break;
case "amazing-chapter-index5":
$('#amazing-chapter5').fadeIn('slow')
break;
case "not-that-interesting-index5":
$('#not-that-interesting5').fadeIn('slow')
break;
case "amazing-chapter-index6":
$('#amazing-chapter6').fadeIn('slow')
break;
case "not-that-interesting-index6":
$('#not-that-interesting6').fadeIn('slow')
break;
case "back-main-menu":
    $('#main-menu2').hide();
    $('#inside-our-earth').hide();
    $('#master-blaster-sachin').hide();
    $('#cool-calm-dhoni').hide();
    $('#stylish-kohli').hide();
    $('#mantle').hide();
    $('#core').hide();
    $('#crust').hide();
    $('#two-grand-slams').hide();
    $('#four-grand-slams').hide();
    $('#i-dont-know').hide();
    $('#lets-learn').hide();
    $('#metamorphic-rocks').hide();
    $('#minerals').hide();
    $('#schumacher').hide();
    $('#hamilton').hide();
    $('#our-changing-earth').hide();
    $('#volcanos').hide();
    $('#closer-look-at-volcanos').hide();
    $('#work-of-river').hide();
    $('#work-of-sea-waves').hide();
    $('#work-of-ice').hide();
    $('#work-of-wind-in-desert').hide();
    $('#air').hide();
    $('#messi').hide();
    $('#ronaldo').hide();
    $('#show-me-an-example').hide();
    $('#what-is-atmosphere').hide();
    $('#air-we-breathe').hide();
    $('#harmful-sun-rays').hide();
    $('#inhaled-by-human-beings').hide();
    $('#is-a-greenhouse-gas').hide();
    $('#prevents-from-uv-radiation').hide();
    $('#layers-of-earth').hide();
    $('#stratosphere').hide();
    $('#troposphere').hide();
    $('#effects-of-temparature-on-athletics').hide();
    $('#effects-of-temparature-on-american-football').hide();
    $('#swing-bowling-in-cricket').hide();
    $('#curl-of-football').hide();
    $('#water').hide();
    $('#show-answer').hide();
    $('#ocean-circulation').hide();
    $('#ocean-currents').hide();  
    $('#natural-vegetation-and-wildlife').hide();
    $('#types-of-natural-vegetation').hide();
    $('#more-bounce-in-cold-weather').hide();
    $('#more-bounce-in-hot-weather').hide();
    $('#slope-and-thickness-of-soil').hide();
    $('#more-on-biking').hide();
    $('#life-in-deserts').hide();
    $('#hot-desert').hide();
    $('#more-sports-in-hot-desert').hide();
    $('#cold-desert').hide();
    $('#amazing-chapter1').hide()    
    $('#not-that-interesting1').hide();
    $('#amazing-chapter2').hide()    
    $('#not-that-interesting2').hide();
    $('#amazing-chapter3').hide()    
    $('#not-that-interesting3').hide();
    $('#amazing-chapter4').hide()    
    $('#not-that-interesting4').hide();
    $('#amazing-chapter5').hide()    
    $('#not-that-interesting5').hide();
    $('#amazing-chapter6').hide()    
    $('#not-that-interesting6').hide();
    $('.starting_text-index').hide();
    $('#main-menu10').fadeIn('slow')
break;



  }

  
}); 

}); 

// #starting_text,
//   #sounds-amazing1,
//   #let-us-learn1,
//   #lets-learn,
//   #brazil1,
//   #argentina1,
//   #portugal1,
//   #inside-our-earth1,
//   #air1,
//   #water1,
//   #natural-vegetation-and-wildlife1,
//   #our-changing-earth1,
//   #sign-up1,
//   #main-menu1
//   {display:block;overflow:auto;background: url('1.jpg');background-repeat: no-repeat;background-attachment: scroll;}


