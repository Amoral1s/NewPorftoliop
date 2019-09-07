




particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 455,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.7,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 3,
        "duration": 3,
        "opacity": 1,
        "speed": 4
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
particlesJS("particles-js2", {
  "particles": {
    "number": {
      "value": 455,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.7,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 3,
        "duration": 3,
        "opacity": 1,
        "speed": 4
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

function parallax(event) {
  this.querySelectorAll('.moon').forEach(moon => { 
    let speed = moon.getAttribute('data-speed');
    moon.style.transform = `translateX(${event.clientX*speed/300}px)`
    
  });
}
document.addEventListener('mousemove', parallax);

function parallax_earth(event) {
  this.querySelectorAll('#particles-js').forEach(earth => { 
    let speed = earth.getAttribute('data-speed');
    earth.style.transform = `translateX(-${event.clientX*speed/500}px)`
    
  });
}
document.addEventListener('mousemove', parallax_earth);

function parallax_sputnik(event) {
  this.querySelectorAll('.sputnik').forEach(sputnik => { 
    let speed = sputnik.getAttribute('data-speed');
    sputnik.style.transform = `translateX(-${event.clientX*speed/300}px)`
    
  });
}
document.addEventListener('mousemove', parallax_sputnik);




/* карточкм */
if($(window).width() > 992) {
  const cards = document.querySelectorAll('.features-wrap-card');

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener('mousemove', startRotate);
  card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
  const cardItem = this.querySelector('.features-wrap-card-item');
  const halfHeight = cardItem.offsetHeight / 2;
  cardItem.style.transform = 'rotateX(' + -(event.offsetY - 
  halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX - 
  halfHeight) / 5 + 'deg)';
}

function stopRotate(event) {
  const cardItem = this.querySelector('.features-wrap-card-item');
  cardItem.style.transform = 'rotate(0)';
}
}
/* карточкм */


$(document).ready(function () {
   // with minimal configuration and default setting
   var slideImages = [];
   
   if($(window).width() > 992) {


   $('.jR3DCarouselGalleryDefault').jR3DCarousel({
     width: 683,
     height: 370,
     slides: slideImages
   });
   $('.jR3DCarouselGalleryCustom').jR3DCarousel({
    width: 683,
     height: 370,
    /* largest allowed width */
    
    /* largest allowed height */
    slideLayout: 'fill',
    /* "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio) */
    animation: 'slide3D',
    /* slide | scroll | fade | zoomInSlide | zoomInScroll */
    animationCurve: 'ease',
    animationDuration: 1700,
    animationInterval: 2000,
    rotationDirection: 'ltr',
    slideClass: 'jR3DCarouselCustomSlide',
    autoplay: true,
    onSlideShow: slideShownCallback,
    /* callback when Slide show event occurs */
    navigation: 'circles' /* circles | squares */ ,
    perspective: 1200
  });
  } 
  
  else {
    $('.jR3DCarouselGalleryDefault').jR3DCarousel({
      width: 320,
      height: 173,
      slides: slideImages
    });
    $('.jR3DCarouselGalleryCustom').jR3DCarousel({
      width: 320,
      /* largest allowed width */
      height: 173,
      /* largest allowed height */
      slideLayout: 'fill',
      /* "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio) */
      animation: 'slide3D',
      /* slide | scroll | fade | zoomInSlide | zoomInScroll */
      animationCurve: 'ease',
      animationDuration: 1700,
      animationInterval: 2000,
      rotationDirection: 'ltr',
      slideClass: 'jR3DCarouselCustomSlide',
      autoplay: true,
      onSlideShow: slideShownCallback,
      /* callback when Slide show event occurs */
      navigation: 'circles' /* circles | squares */ ,
      perspective: 1200
    });
  }
   // Or with options
   
   function slideShownCallback($slide) {
     console.log("Slide shown: "+$slide.find('img').attr('src'));
   }




  if($(window).width() < 768) {
    $('.nav-menu').removeClass('container');
  }
  else {
    $('.nav-menu').addClass('container');
  }



  $(window).bind('scroll', function() { 
    var top = $(document).scrollTop();
    if (top > 200) {
      $('.earth').css('transform', 'translateY(150%)').css('opacity', '0');
      $('.sputnik').css('transform', 'translateY(550%)').css('opacity', '0');
      $('.moon').css('transform', 'translateY(550%)').css('opacity', '0');
      
     }
    
    else {
      $('.earth').css('transform', 'translateY(0%)').css('opacity', '1');
      $('.sputnik').css('transform', 'translateY(0%)').css('opacity', '1');
      $('.moon').css('transform', 'translateY(0%)').css('opacity', '1');
      
     }
    
  });


 /*  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".nav-active"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
      div.removeClass('nav-active');
      $('.toggle').removeClass('toggle-active'); // скрываем его
    } */
    $('.toggle').on('click', function() {
      $('.socials').toggleClass('socials-active');
      $('.toggle').toggleClass('toggle-active');
      $('.nav-menu').toggleClass('nav-active');
      
    });
  /* }); */

  if($(window).width() < 578) {
    $('.features-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplayspeed: 5000,
      speed: 1500
    });
  }
 


  $('.consultation').on('click', function() {
    var lol = 5;
    $('.popup-form').addClass('popup-form-active');
    $('.overlay').addClass('overlay-active');
    
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
    
  });
  $('.popup-form-close').on('click', function() {
    $('.popup-form').removeClass('popup-form-active');
    $('.overlay').removeClass('overlay-active');
    window.onscroll=function(){};
    
  });
  $('.overlay').on('click', function() {
    $('.popup-form').removeClass('popup-form-active');
    $('.overlay').removeClass('overlay-active');
    window.onscroll=function(){};
  });

  
  $('.services-wrap-title').on('click', f_acc);
 
   
  function f_acc(){
    $('.services-wrap-text').not($(this).next()).slideUp(600);
      $(this).next().slideToggle(600);
      $('.crest').not(this).removeClass('crest-active');
      $('.crest', this).toggleClass('crest-active');
      
       
  }
    



});