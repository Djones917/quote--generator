// FreeCodeCamps Random Quote Generator Engineered by Derek Jones
// I tried the for loop to loop through the array and realized I was wrong 
// as I want to randomly select a color from my array! 



// colors for font color #FFFFFF #F5A8FF #A8CFFF #14D8FF #EFFF14 #14FF14 #FFEB14 #4182D2
function myColors() {
	var colors = ["#FFFFFF", "#F5A8FF", "#A8CFFF", "#14D8FF", "#EFFF14", "#14FF14", "#FFEB14", "#4182D2"];
    var randomNum = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomNum];
    $('h1').css({color: randomColor});	
}


// This is the old code for color background change!
/*function myColors() {
	var colors = ["#222233", "#790C0C", "#0C3279", "#424242", "#255255", "#2C2555"];
    var randomNum = Math.floor(Math.random() * colors.length);
    var randomColor = colors[randomNum];
    $('#bgcolor').css({backgroundColor: randomColor});	
}*/








// Don't touch main api code!!!!
$(document).ready(function() {

$("#getQuote").on('click', function() {
  
  $.ajaxSetup({cache: false});
  
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&callback=", function(data) {
    
    $(".message").html(data[0].content + "-" + data[0].title)
    
    $("#tweet").on('click', function() {
  var myUrl = 'https://twitter.com/intent/tweet?text=' + data[0].content + "-" + data[0].title;
    window.open(myUrl, 'twitter');
    return false;
});
    
    
    
  });// end of getJSON
  
  myColors();
}); // end of getQuote function
 
  
}); //end



  

