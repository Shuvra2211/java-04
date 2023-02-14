$(function() {
   
    //   sidebar js start

    $('#toggleBtn').on('click', function() {
        $('#sidebar').toggleClass('active')
    })

  //   search js start 
  $('#input').hide();

  $('#glass').click( function() {  
      $('#input').fadeToggle();
  })
  
      //  sarch js end

    //   up scroll js start
     $(window).on('scroll' ,function() {
       var scrollSize =  $(window).scrollTop()

    //   scroll top js start

       if(scrollSize > 500) {
        $('#up').slideDown();
       }else{
        $('#up').slideUp();
       }

    //    scroll top js end

    // nav js start
      
    if(scrollSize > 100) {
        $('#nav').addClass('active')
    }else{
        $('#nav').removeClass('active')
    }
      
    // nav js end

     })
     

     $('#up').on('click',function() {
        $('html,body').animate({
            scrollTop:0,
        },2000)
     })

     //   up scroll js end

    //  slick js start
    $('.test_slid').slick({
        arrows: false,
        autoplay: true,

    })

    // slick js end

    // window preloader js start
$(window).on('load', function() {
    $('#placeholder').fadeOut(3000)
})

// window preloader js end


})