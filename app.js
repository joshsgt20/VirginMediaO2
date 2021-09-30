
//FAQ  JS

$(document).ready(function(RevealFAQ){
  $("#FAQ1").click(function(RevealFAQ){
    $("#Answer1").slideToggle("slow");
  });
});


$(document).ready(function(RevealFAQ){
  $("#FAQ2").click(function(RevealFAQ){
    $("#Answer2").slideToggle("slow");
  });
});


$(document).ready(function(RevealFAQ){
  $("#FAQ3").click(function(RevealFAQ){
    $("#Answer3").slideToggle("slow");
  });
});

$(document).ready(function(RevealFAQ){
  $("#RevealFeatures").click(function(RevealFAQ){
    $("#PhoneFeatures").slideToggle("slow");
  });
});


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("Transparent");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


  
function Blue()
{
 document.getElementById('Slide1').src='Images/Blue image.png';
 document.getElementById('SmallSlide1').src='Images/Blue image.png';

 document.getElementById('Slide2').src='Images/blue2.png';
 document.getElementById('SmallSlide2').src='Images/blue2.png';

 document.getElementById('Slide3').src='Images/blue3.png';
 document.getElementById('SmallSlide3').src='Images/blue3.png';

 document.getElementById('Colour').innerHTML='Blue';
}

  
function Red()
{
 document.getElementById('Slide1').src='Images/Red image.png';
 document.getElementById('SmallSlide1').src='Images/Red image.png';

 document.getElementById('Slide2').src='Images/red2.png';
 document.getElementById('SmallSlide2').src='Images/red2.png';

 document.getElementById('Slide3').src='Images/red3.png';
 document.getElementById('SmallSlide3').src='Images/red3.png';

 document.getElementById('Colour').innerHTML='Red';
}

  
function Green()
{
 document.getElementById('Slide1').src='Images/Green phone.png';
 document.getElementById('SmallSlide1').src='Images/Green phone.png';

 document.getElementById('Slide2').src='Images/green2.png';
 document.getElementById('SmallSlide2').src='Images/green2.png';

 document.getElementById('Slide3').src='Images/green3.png';
 document.getElementById('SmallSlide3').src='Images/green3.png';

 document.getElementById('Colour').innerHTML='Green';
}

  
function Black()
{
 document.getElementById('Slide1').src='Images/Black phone.png';
 document.getElementById('SmallSlide1').src='Images/Black phone.png';

 document.getElementById('Slide2').src='Images/black phone 2.png';
 document.getElementById('SmallSlide2').src='Images/black phone 2.png';

 document.getElementById('Slide3').src='Images/black phone 3.png';
 document.getElementById('SmallSlide3').src='Images/black phone 3.png';

 document.getElementById('Colour').innerHTML='Black';
}

  
function White()
{
 document.getElementById('Slide1').src='Images/white phone.png';
 document.getElementById('SmallSlide1').src='Images/white phone.png';

 document.getElementById('Slide2').src='Images/white2.png';
 document.getElementById('SmallSlide2').src='Images/white2.png';

 document.getElementById('Slide3').src='Images/white3.png';
 document.getElementById('SmallSlide3').src='Images/white3.png';

 document.getElementById('Colour').innerHTML='White';
}


  function Storage1()
{
 document.getElementById('Storage1').style.background='#350444'
 document.getElementById('Storage1').style.color='white'
 document.getElementById('Storage2').style.background='#f1f1f1';
 document.getElementById('Storage2').style.color='black';
 document.getElementById('Storage3').style.background='#f1f1f1';
 document.getElementById('Storage3').style.color='black';
 document.getElementById('StorageValue').innerHTML='64GB';

}

function Storage2()
{
  document.getElementById('Storage1').style.background='#f1f1f1'
  document.getElementById('Storage1').style.color='black'
  document.getElementById('Storage2').style.background='#350444';
  document.getElementById('Storage2').style.color='white';
  document.getElementById('Storage3').style.background='#f1f1f1';
  document.getElementById('Storage3').style.color='black';
 document.getElementById('StorageValue').innerHTML='128GB';

}

function Storage3()
{
  document.getElementById('Storage1').style.background='#f1f1f1'
  document.getElementById('Storage1').style.color='black'
  document.getElementById('Storage2').style.background='#f1f1f1';
  document.getElementById('Storage2').style.color='black';
  document.getElementById('Storage3').style.background='#350444';
  document.getElementById('Storage3').style.color='white';
 document.getElementById('StorageValue').innerHTML='256GB';

}



function Plan1()
{
 document.getElementById('Plan1').style.background='#dbdbdb';
 document.getElementById('Plan2').style.background='none';
 document.getElementById('Plan3').style.background='none';
 document.getElementById('Plan4').style.background='none';
 document.getElementById('SelectedPlan').innerHTML='£0 upfront cost<br>£42 monthly cost';

}

function Plan2()
{
  document.getElementById('Plan1').style.background='none';
  document.getElementById('Plan2').style.background='#dbdbdb';
  document.getElementById('Plan3').style.background='none';
  document.getElementById('Plan4').style.background='#none';
  document.getElementById('SelectedPlan').innerHTML='£20 upfront cost<br>£38 monthly cost';

}

function Plan3()
{
  document.getElementById('Plan1').style.background='none';
  document.getElementById('Plan2').style.background='none';
  document.getElementById('Plan3').style.background='#dbdbdb';
  document.getElementById('Plan4').style.background='none';
  document.getElementById('SelectedPlan').innerHTML='£30 upfront cost<br>£35 monthly cost';

}

function Plan4()
{
  document.getElementById('Plan1').style.background='none';
  document.getElementById('Plan2').style.background='none';
  document.getElementById('Plan3').style.background='none';
  document.getElementById('Plan4').style.background='#dbdbdb';
  document.getElementById('SelectedPlan').innerHTML='£40 upfront cost<br>£30 monthly cost';

}


function Benefits()
{
  document.getElementById('BenefitsReveal').style.display='grid';
  document.getElementById('OffersReveal').style.display='none';
}

function Offers()
{
  document.getElementById('BenefitsReveal').style.display='none';
  document.getElementById('OffersReveal').style.display='grid';
}


