jQuery(document).ready(function($) {
    ///// Initial vars
    var main_position = $('#main').offset().top;
    var moved = 0;

    ////// Check initial positioning
    if ($(window).scrollTop() > (main_position / 2)) {
        if (moved == 0) {
            ToggleMovement();
            moved = 1;
        }
    }

    ////// Scroll binding
    $(window).bind('scroll',function(){
        checkScrolling();
    });
    if ($(window).width() > 800) {
        console.log('yep')
        $.scrollify({
            section: ".scroll"
        });
    }

    ///// Photo movement triggers
    $('#button-down').click(function() {
        if ($(window).width() > 800) $.scrollify.move('#page-2');
        if (moved == 0) {
            ToggleMovement();
            moved = 1;
        }
    });
    function checkScrolling() {
        var scrolled = $(window).scrollTop();
        if (scrolled > (main_position / 2)) {
            if (moved == 0) {
                ToggleMovement();
                moved = 1;
            }
        }
    };
});

// Add movement classes and interactivity
function ToggleMovement() {
    $('.player').css('visibility', 'visible');
    for (var i = 1; i <= 6; i++) {
        $('.photo'+i).toggleClass('photo'+i+'_move').toggleClass('interactive');
        $('.photo'+i).css('cursor', 'pointer');
    }
}

// Basic audio player by Kayden Mimmack
function aud_play_pause(id) {
    var audio = document.getElementById('audio' + id);
    if (id == 1) $('#main').css('background-color', '#9d9d9d');
    if (id == 2) $('#main').css('background-color', '#393830');
    if (id == 3) $('#main').css('background-color', '#617967');
    if (id == 4) $('#main').css('background-color', '#3a4933');
    if (id == 5) $('#main').css('background-color', '#5c6468');
    if (id == 6) $('#main').css('background-color', '#828181');
    if (audio.paused) {
        // pause all other players
        for (var i = 1; i <= 6; ++i) {
            if (i != id) {
                document.getElementById('audio' + i).pause();
                $('.photo' + i).removeClass('active');
            }
        }
        audio.play();
        $('.photo' + id).addClass('active');
    } else {
        audio.pause();
        $('.photo' + id).removeClass('active');
        $('#main').css('background-color', '#fdb657');
    }
}