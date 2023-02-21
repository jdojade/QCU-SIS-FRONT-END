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
});

function mouseLeave() {
    $(".dropdown-menu-cus").removeClass('show');
}


/* inputs */
const steps = Array.from(document.querySelectorAll(".step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const firstBtn = document.getElementById("first_btn");


/* inputs for information */
var nameError =    document.getElementById('nameReq'); 
var studNoError =  document.getElementById('snumberReq');
var emailError = document.getElementById('emailReq');
var docuError = document.getElementById('docuReq');
var purposeError = document.getElementById('purReq');


// firstBtn.addEventListener("click", () => {
//     let vali =[
//       validateName(),
//       validateStudNo()
//     ]

//     if (vali.every(Boolean)){
//         document.getElementById("submitError").style.display='none';
//         changeStep("next");
//         var vals = [
//           document.getElementById('name').value,
//           document.getElementById('studNo').value, 
//           document.getElementById('emailAdd').value,
//           document.getElementById('docuType').value,
//           document.getElementById('purposeDocu').value
          

//         ]
//         for (let i=1; i-1 <= vals.length; i++){
//           let info = document.getElementById("info_"+i);
//           info.innerHTML = ': ' + vals[i-1];
//         };
//     }else{
//       let step1 = document.getElementById("submitError");
//       step1.innerHTML = "Need to be fill up all field";
//     }
    
// });

// function validateName(){
//   var isValue = document.getElementById('name');
//   if (!isValue.value){
//       nameError.innerHTML = "Student Full Name is required";
//       isValue.classList.add('invalid');
//       return false;
//   }
//   if(!isValue.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
//       nameError.innerHTML = "Write Fullname";
//       isValue.classList.add('invalid');
//       return false;
//   }
//   nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
//   isValue.classList.remove('invalid');
//   return true;
// }
// function validateStudNo(){
//   var isValue = document.getElementById('studNo');
//   if (!isValue.value){
//       studNoError.innerHTML = "Student No. is required";
//       isValue.classList.add('invalid');
//       return false;
//   }
//   if (isValue.value.length !== 6){
//       studNoError.innerHTML = "Student No. should be 6 characters";
//       isValue.classList.add('invalid');
//       return false;
//   }
//   if(!isValue.value.match(/^[0-9]{6}$/)){
//       isValue.innerHTML = "Student No. is required";
//       isValue.classList.add('invalid');
//       return false; 
//   }
//   studNoError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
//   isValue.classList.remove('invalid');
//   return true;
// }
// function validateconNo(){
//     var isValue = document.getElementById('contactno');
//     if (!isValue.value){
//         conNoError.innerHTML = "Contact No. 11 is required";
//         isValue.classList.add('invalid');
//         return false;
//     }
//     if (isValue.value.length !== 11){
//         conNoError.innerHTML = "Contact No. should be 11 characters";
//         isValue.classList.add('invalid');
//         return false;
//     }
//     if(!isValue.value.match(/^[0-9]{11}$/)){
//         isValue.innerHTML = "Contact. is required";
//         isValue.classList.add('invalid');
//         return false; 
//     }
//     conNoError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
//     isValue.classList.remove('invalid');
//     return true;
// }

/* this function for form */

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
