$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize() {
    if ($(".navbar-toggle").css("display") == "none" ){
        var menuDropDown = function() {
            var submenuFirst = $('.dropdown-submenu > .dropdown-menu').closest('ul.dropdown-menu.first-level'),
                submenuSecond = $('.dropdown-submenu > .dropdown-menu');

            jQuery('.dropdown-menu li a').on('mouseenter', function() {

                jQuery('ul.dropdown-menu').removeClass('activeLevelTwo');
                jQuery(this).next('ul.dropdown-menu').addClass('activeLevelTwo');            

                jQuery('ul.dropdown-menu.first-level li').removeClass('activeItem');

                jQuery('.list-utensilios ul.dropdown-menu.first-level').css('height', 'initial');

                var level2Height = jQuery('ul.dropdown-menu.activeLevelTwo').height();
                var level1Height = jQuery('ul.dropdown-menu.activeLevelTwo').closest('ul.dropdown-menu.first-level').height();

                if (level2Height < level1Height) {
                    jQuery('ul.dropdown-menu.activeLevelTwo').closest('ul.dropdown-menu.first-level li').addClass('activeItem');
                    jQuery('ul.dropdown-menu.activeLevelTwo').css({
                        'height':  'auto'                    
                    });
                    jQuery('ul.dropdown-menu.activeLevelTwo').css({
                        'height':  level1Height + 10 + 'px'
                    });
                } else if (level2Height > level1Height) {                
                    jQuery('ul.dropdown-menu.activeLevelTwo').closest('ul.dropdown-menu.first-level').css({
                        'height': 'auto'
                    });
                    jQuery('ul.dropdown-menu.activeLevelTwo').closest('ul.dropdown-menu.first-level').css({
                        'height': level2Height + 10 + 'px'
                    });
                } else if($('.dropdown-menu.long').is(':visible')) {
                    $(this).closest('ul.dropdown-menu.first-level').css({
                        'height': '426px'
                    });
                }
            });    

            $('.department-item').mouseover(function() {
                $('.department-item').removeClass('department-active');
                $('.department-item').addClass('department-inactive');
                $(this).removeClass('department-inactive');
                $(this).addClass('department-active');
            });

            $('.nav.navbar-nav').mouseleave(function() {
                $('.department-item').removeClass('department-inactive');
            });
        }

        menuDropDown();
        console.log('desktop version activated');
    } else {
        console.log('mobile version activated');
    }
}