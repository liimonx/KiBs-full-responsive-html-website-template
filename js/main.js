$(document).ready(function(){
  //particleground
  $('#particles').particleground({
    dotColor: 'transparent',
    lineColor: '#67e6e0',
});
  //responsive text
   $(".header-right h1").fitText(0.8, { minFontSize: '25px', maxFontSize: '82px' });
   $(".header-right h2").fitText(1.5, { minFontSize: '16px', maxFontSize: '46px' });
   $(".service-head h2").fitText(1.5, { minFontSize: '20px', maxFontSize: '51px' });
   $(".card-title").fitText(1.5, { minFontSize: '10px', maxFontSize: '15px' });
   $(".card-text").fitText(1.5, { minFontSize: '9px', maxFontSize: '13px' });
   $(".carousel-left-text h3").fitText(0.5, { minFontSize: '20px', maxFontSize: '43px' });
   $(".testimonial-left-text h3").fitText(0.5, { minFontSize: '15px', maxFontSize: '51px' });
   $(".team-text h2, .footer-content h2").fitText(1, { minFontSize: '20px', maxFontSize: '51px' });

  //gellary filter
      $(".filter-button").click(function(){
          var value = $(this).attr('data-filter');

          if(value == "all")
          {
              $('.filter').removeClass('hidden');
              $('.filter').show('1000');
          }
          else
          {
              $('.filter[filter-item="'+value+'"]').removeClass('hidden');
              $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
              $(".filter").not('.'+value).hide('3000');
              $('.filter').filter('.'+value).show('3000');
          }
      });

      if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
});

//lightbox
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
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
//fusllscreen overlay menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
        // Smooth Scrolling
$(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
