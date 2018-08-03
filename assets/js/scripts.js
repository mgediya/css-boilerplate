var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$(document).ready(function(){
    //do jQuery stuff when DOM is ready

    /* Responsive Jquery Navigation */
    $('.hamburger').click(function(event){
        $('#mobilenav').toggleClass('is-open');
    });
    $('#mobilenav .nav-backdrop').click(function(){
        $('#mobilenav').removeClass('is-open');
    });

    $('body').on('keyup',function(evt) {
        if (evt.keyCode == 27) {
            $('.hamburger.is-active').removeClass('is-active');
            $('#mobilenav.is-show').removeClass('is-show');
        }
    });

    var clickable = $('#menu').attr('link-clickable');
    $('#mobilenav li:has(ul)').addClass('has-sub');
    $('#mobilenav .has-sub>a').after('<em class="caret">');
    if(clickable == 'true'){
        $('#mobilenav .has-sub>a').addClass('trigger-caret').attr('href','javascript:;');
    }else{
        $('#mobilenav .has-sub>.caret').addClass('trigger-caret');
    }

    /* menu open and close on single click */
    $(document).on('click','#mobilenav .has-sub>.trigger-caret',function(event){
        var element = $(this).parent('li');
        if (element.hasClass('is-open')) {
            element.removeClass('is-open');
            element.find('li').removeClass('is-open');
            element.find('ul').slideUp(200);
        }
        else {
            element.addClass('is-open');
            element.children('ul').slideDown(200);
            element.siblings('li').children('ul').slideUp(200);
            element.siblings('li').removeClass('is-open');
            element.siblings('li').find('li').removeClass('is-open');
            element.siblings('li').find('ul').slideUp(200);
        }
    });    
});

/* Script on load
------------------------------------------------------------------------------*/
$(window).load(function() {
    // page is fully loaded, including all frames, objects and images
});

/* Script on scroll
------------------------------------------------------------------------------*/
$(window).scroll(function() {

});

/* Script on resize
------------------------------------------------------------------------------*/
$(window).resize(function() {

});

/* Script all functions
------------------------------------------------------------------------------*/