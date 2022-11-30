$(document).ready(function(){
    $("#hamburger").click(function(){
        $(".menu-container, .container-cus, .icon-hamburger").toggleClass("magic");
    });
    $(".dropdown-toggle").click(function(){
        $(".dropdown-menu-cus").toggleClass("show");
    });
    $(".navbar-toggler").click(function(){
        $(".navbar-collapse, .icon-sample").toggleClass("show");
    });
});



