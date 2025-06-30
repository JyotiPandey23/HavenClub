$(document).ready(function(){
     $(".accordion_container>div").first("div").children(".accordion_head").addClass("active"),
     $(".accordion_container>div").first("div").children(".accordion_body").show(),
     $(".accordion_head.active").children(".plusminus").text("-"),
     $(".accordion_head").click(function () {
         $(".accordion_head").removeClass("active"),
             $(".accordion_body").is(":visible") && ($(".accordion_body").slideUp(300), $(".plusminus").text("+")),
             $(this).next(".accordion_body").is(":visible")
                 ? ($(this).next(".accordion_body").slideUp(300), $(this).children(".plusminus").text("+"))
                 : ($(this).next(".accordion_body").slideDown(300), $(this).children(".plusminus").text("-"), $(".accordion_head").removeClass("active"), $(this).addClass("active"));
     });
     //Find & Book Your Trip counter
     $(window).scroll(function() {
      var counted = 0;
      var oTop = $('.findBook').offset().top - window.innerHeight;
      if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },

            {

              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }

            });
        });
        counted = 1;
      }

    });
$('.top_header_left img').click(function(){
  $(this).siblings('ul').toggle();
});


 
 $(document).ready(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();
    
    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 989) {
           $('.top_header .top_header_left ul li.custoPop').click(function(){
                $('.top_header .top_header_left ul').hide();
             });
        }
        else
        {
            // $('.left').insertBefore('.right');
        }
    }
});
  
$('.menuBtn').click(function(){
    $('.header_inner nav').show();
});
$('.menuRemove').click(function(){
    $('.header_inner nav').hide();
});
     // location tab
        $('#tabs-nav li:first-child').addClass('active');
        $('.tab-content').hide();
        $('.tab-content:first').show();
        $('#tabs-nav li').click(function(){
          $('#tabs-nav li').removeClass('active');
          $(this).addClass('active');
          $('.tab-content').hide();
          
          var activeTab = $(this).find('a').attr('href');
          $(activeTab).fadeIn();
          return false;
        });
 setTimeout(function () {
        //mega menu
        // Add en remove class on menu item hover  
         $('.big-nav > ul > li').click(function(){
           $(this).addClass('show').siblings().removeClass('show');
         });
         // Get the minimum height the big-nav elemtn
         var min_height = 50;
         // $('.big-nav > ul > li > ul').each(function(){
           var this_height = $('.big-nav > ul > li > ul').outerHeight();
           if (this_height > min_height) min_height = this_height + 140;
         // });
         $('.big-nav > ul').css('min-height', min_height + 'px');
          }, 500);
});

$('.indiaDestination').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    navText: ["<img src='asset/img/icons/prev.png'>","<img src='asset/img/icons/next.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            margin:30
        },
        750:{
            items:3,
            margin:30
        },
        990:{
            items:3,
            margin:30
        },
        1281:{
            items:3
        }
    }
});
$('.internationalDestination').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    navText: ["<img src='asset/img/icons/prev.png'>","<img src='asset/img/icons/next.png'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            margin:30
        },
        990:{
            items:2,
            margin:30
        },
        1281:{
            items:3
        }
    }
});
$('.travelPartnersInner').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        990:{
            items:4
        },
        1281:{
            items:5
        }
    }
});
$('.preferredPartnersInner').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        990:{
            items:4
        },
        1281:{
            items:5
        }
    }
});
$('.aboutCarousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    navText: ["<img src='asset/img/icons/prev.png'>","<img src='asset/img/icons/next.png'>"],
    items:1
});
$('.destinationDetail').owlCarousel({
    loop:true,
    margin:0,
     nav:true,
    dots:true,
    navText: ["<img src='https://clubliberty.in/asset/img/icons/prev.png'>","<img src='https://clubliberty.in/asset/img/icons/next.png'>"],
     items:1
});

$(".testimonial-carousel").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    dots: true,
    smartSpeed: 1500,
    responsive: {
        0: {
            items: 1,
            margin: 20
        },
        576: {
            items: 2,
            margin: 20
        },
        992: {
            items: 3,
            margin: 90
        },
        1200: {
            items: 3,
            margin: 120
        },
    }
});

//main banner
$('.mainBannerCarousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    smartSpeed: 1000,
    animateOut: 'fadeOut',
	animateIn: 'fadeIn',
    center:true,
    autoplay:true,
    // autoplayTimeout:9000,
    navText: ["<img src='asset/img/icons/prev.png'>","<img src='asset/img/icons/next.png'>"],
    items:1
});
//destination detail banner
let clickItem;
$('.destinationDetail .item').click(function(){
  clickItem = $(this);

  let itemSrc = $(this).children('img').attr('src');
  $('.destinationDetailPopup .destiPopImg').attr('src', itemSrc);
  $('.destinationDetailPopup').show();
})
$('.destinationDetailPopup .close').click(function(){
    $('.destinationDetailPopup').fadeOut();
});
$('.starterPopup .close').click(function(){
    $('.starterPopup').fadeOut();
});
$('.customercarePopup .close').click(function(){
    $('.customercarePopup').fadeOut();
});
$('.custoPop').click(function(){
    $('.customercarePopup').css('display','flex');
});
$('.bookMembershipPopup .close').click(function(){
    $('.bookMembershipPopup').fadeOut();
});
$('.bookMembership img').click(function(){
    $('.bookMembershipPopup').css('display','flex');
});
// $(".user_icon").hover(function(){
//     $('.profileMenu').css("opacity", "1");
// });
// $(".user_icon").hover(function(){
//   $('.profileMenu').css("opacity", "1");
//   }, function(){
//   $('.profileMenu').css("opacity", "0");
// });
// $('body').on('click', '.popupNavNext',  function(){
//     let slideNx = $(clickItem).next().children('img').attr('src');
//     console.log(slideNx)
// })
//header active menu
 var CurrentUrl = window.location.origin+window.location.pathname;
    
$('.header_inner nav ul li a').each(function(Key,Value)
    {
      
        if(Value['href'] === CurrentUrl)
        {
         $('.header_inner nav ul li').removeClass('active');
        $(Value).parent('li').addClass('active');
        $('.dropdown-menu li.active').parents('li').addClass('active');

        }
    });
// testimonial carousel
var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
        touchStartPos,
        touchEndPos,
        touchPosDiff,
        ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
        
        testim.addEventListener("touchstart", function(e) {
                touchStartPos = e.changedTouches[0].clientX;
        })
    
        testim.addEventListener("touchend", function(e) {
                touchEndPos = e.changedTouches[0].clientX;
            
                touchPosDiff = touchStartPos - touchEndPos;
            
                console.log(touchPosDiff);
                console.log(touchStartPos); 
                console.log(touchEndPos);   

            
                if (touchPosDiff > 0 + ignoreTouch) {
                        testimLeftArrow.click();
                } else if (touchPosDiff < 0 - ignoreTouch) {
                        testimRightArrow.click();
                } else {
                    return;
                }
            
        })
}

$(document).ready(function(){
    // Fancybox gallery
        $('[data-fancybox="gallery"]').fancybox({
          buttons: [
            "slideShow",
            "thumbs",
            "zoom",
            "fullScreen",
            "share",
            "close"
          ],
          loop: false,
          protect: true
        });
});
