$(document).ready(function(){
    $("#hamburger").click(function(){
        $(".menu-container, .info, .container-cus, .icon-hamburger").toggleClass("magic");
    });
    $(".dropdown-toggle").click(function(){
        $(".dropdown-menu-cus").toggleClass("show");
    });
    $(".navbar-toggler").click(function(){
        $(".navbar-collapse, .icon-sample").toggleClass("show");
    });
});

function mouseLeave() {
    $(".dropdown-menu-cus").removeClass('show');
  }

$('.menu li').each(function(i){
    $(this).hover(function(){
        $('.menu-container, .info').addClass('show');
    },
    function(){
        $('.menu-container, .info').removeClass('show');
    }
    );
});