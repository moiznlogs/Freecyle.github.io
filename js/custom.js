// var preloader = document.getElementById("Loading");

// function myfunction(){
// 	preloader.style.display = "none";
// }

var navBar = document.getElementById('navBar');
   window.onscroll = function () {
     if (window.scrollY>60){
      navBar.classList.add('scrolled');
     } else {
      navBar.classList.remove('scrolled');
     }
}


// modren nav
   

const openNAvMenu = document.querySelector(".open-nav"),
 closeNAvMenu = document.querySelector(".close-nav"),
 NavMenu = document.querySelector(".nav-menu"),
 menuOverlay = document.querySelector(".menu-overlay"),
 mediaSize = 1024;

 openNAvMenu.addEventListener("click" , toggleNav);
 closeNAvMenu.addEventListener("click" , toggleNav);
 menuOverlay.addEventListener("click" , toggleNav);

 function toggleNav(){
    NavMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
 }
 NavMenu.addEventListener("click" , (event) =>{
  if(event.target.hasAttribute("data-toggle") &&
  window.innerWidth <= mediaSize){
     const menuitemhaschildren = event.target.parentElement;
     if( menuitemhaschildren.classList.contains("active")){
      collapseSubMenu();
     }
     else{
      if(NavMenu.querySelector(".menu-item-has-children.active")){
         collapseSubMenu();
      }
      menuitemhaschildren.classList.add("active");
      const subMenu = menuitemhaschildren.querySelector(".sub-menu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
   }
     }
     
 });
function collapseSubMenu(){
   NavMenu.querySelector(".menu-item-has-children.active .sub-menu")
   .removeAttribute("style");
   NavMenu.querySelector(".menu-item-has-children.active")
   .classList.remove("active");
}



// modren nav end





 $(function(){
    $('.single-slider').slick({
        infinite: true,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-arrow-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-arrow-right"></i></span>',
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        dots: true,
    });
    
});



// const observer = lozad('.lozad', {
//     rootMargin: '10px 0px', // syntax similar to that of CSS Margin
//     threshold: 0.1 // ratio of element convergence
// });
// observer.observe();



$(document).ready(function(){
  $('.for_slick_slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<span class="priv_arrow"><i class="fas fa-arrow-left"></i></span>',
    nextArrow: '<span class="next_arrow"><i class="fas fa-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
          
});


// Auto animated form start

const loginpopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

window.addEventListener("load" , function(){
    showpopup();
});

function showpopup(){
    const timelimit = 5; //seconds
    let i = 0;
    const timer = setInterval(function(){
        i++;
        if( i == timelimit){
          clearInterval(timer);
          loginpopup.classList.add("show");
        }
        console.log(i);
    },1000 );
}

close.addEventListener("click" , function(){
    loginpopup.classList.remove("show");
});

// Auto animated form end


/* tabs start */

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


/* tabs end */


/* product-details*/

$(document).ready(function(){
  
  $('.small-img img').click(function(){
  var image = $(this).attr('src');
  $('.big-img img').attr('src',image);
  });
  $('#zoom').imagezoomsl({
    zoomrange:[4,4],

  });
});


/* product-details end*/
