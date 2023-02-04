$(document).ready(function(){
    $("#hamburger").click(function(){
        $(".menu-container, .info, .container-cus, .icon-hamburger").toggleClass("magic");
    });
    $(".dropdown-toggle").click(function(){
        $(".dropdown-menu-cus").toggleClass("show");
    });
    
  
    $(".navbar-toggler").click(function(){
        var width = window.innerWidth;
        if (width < 600) {
            $(".navbar-collapse").toggleClass("show");
          } else {
            element.removeAttribute("show");
          }
        
    });
    
    $('.menu li').each(function(i){
        $(this).hover(function(){
            $('.menu-container, .info').addClass('show');
        },
        function(){
            $('.menu-container, .info').removeClass('show');
        });
    });
    
   /* $('.next-btn').click(function(e){
        e.preventDefault(); // prevent the form from submitting
        var isValid = true; // flag to indicate if the form is valid
        if ($("input").val() === "") {
          $("input").addClass("invalid");
          isValid = false;
        } else {
            nextBtn.forEach((button) => {
              button.addEventListener("click", () => {
                changeStep("next");
              });
            });
        }
    });*/
});

function mouseLeave() {
    $(".dropdown-menu-cus").removeClass('show');
  }


/* this function for form */

const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});

function changeStep(btn) {
  let i = 0;
  const active = document.querySelector(".active");
  i = steps.indexOf(active);
  steps[i].classList.remove("active");
  if (btn === "next") {
    i++;
  } if (btn === "prev") {
    i--;
  }
  steps[i].classList.add("active");
}