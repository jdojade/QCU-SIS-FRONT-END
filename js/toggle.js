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
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const form = document.querySelector("form");
const firstBtn = document.getElementById("first_btn");


/* inputs for company information */
var nameError =    document.getElementById('nameError'); 
var studNoError =  document.getElementById('studNoError'); 
var studSecError = document.getElementById('studSecError'); 
var supNameError = document.getElementById('supNameError'); 
var supPosError =  document.getElementById('supPosError'); 
var deptError =    document.getElementById('deptError');
var comNameError = document.getElementById('comNameError'); 
var comAddError =  document.getElementById('comAddError'); 
var comNoError =   document.getElementById('comNoError'); 
var supEmailError =document.getElementById('supEmailError');

firstBtn.addEventListener("click", () => {
    let vali =[
      validateName(),
      validateStudNo(),
      validateStudSec(),
      validateSupName()
    ]

    if (vali.every(Boolean)){
        document.getElementById("submitError").style.display='none';
        changeStep("next");
        var vals = [
          document.getElementById('studentName').value,
          document.getElementById('studentId').value, 
          document.getElementById('studentSection').value,
          document.getElementById('superiorName').value,
          document.getElementById('superiorPosition').value,
          document.getElementById('department').value,
          document.getElementById('companyName').value,
          document.getElementById('companyAdd').value,
          document.getElementById('companyNumber').value,
          document.getElementById('superiorEmail').value
        ]
        for (let i=1; i-1 <= vals.length; i++){
          let info = document.getElementById("info_"+i);
          info.innerHTML = ': ' + vals[i-1];
        };
    }else{
      let step1 = document.getElementById("submitError");
      step1.innerHTML = "Need to be fill up all field";
    }
    
});

function validateName(){
  var isValue = document.getElementById('studentName');
  if (!isValue.value){
      nameError.innerHTML = "Student name is required";
      isValue.classList.add('invalid');
      return false;
  }
  if(!isValue.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      nameError.innerHTML = "Write Fullname";
      isValue.classList.add('invalid');
      return false;
  }
  nameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  isValue.classList.remove('invalid');
  return true;
}
function validateStudNo(){
  var isValue = document.getElementById('studentId');
  if (!isValue.value){
      studNoError.innerHTML = "Student No. is required";
      isValue.classList.add('invalid');
      return false;
  }
  if (isValue.value.length !== 6){
      studNoError.innerHTML = "Student No. should be 6 characters";
      isValue.classList.add('invalid');
      return false;
  }
  if(!isValue.value.match(/^[0-9]{6}$/)){
      isValue.innerHTML = "Student No. is required";
      isValue.classList.add('invalid');
      return false; 
  }
  studNoError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  isValue.classList.remove('invalid');
  return true;
}
function validateStudSec(){
  var isValue = document.getElementById('studentSection');
  if (!isValue.value){
      studSecError.innerHTML = "Student Section is required";
      isValue.classList.add('invalid');
      return false;
  }
  if (isValue.value.length !== 6){
      studSecError.innerHTML = "Student Sec. should be 6 characters";
      isValue.classList.add('invalid');
      return false;
  }
  if(!isValue.value.match(/^[A-Z0-9]{6}$/)){
      studSecError.innerHTML = "Student Section be correct";
      isValue.classList.add('invalid');
      return false; 
  }
  studSecError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  isValue.classList.remove('invalid');
  return true;
}
function validateSupName(){
  var isValue = document.getElementById('superiorName');
  if (!isValue.value){
      supNameError.innerHTML = "Superior name is required";
      isValue.classList.add('invalid');
      return false;
  }
  if(!isValue.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      supNameError.innerHTML = "Write Fullname";
      isValue.classList.add('invalid');
      return false;
  }
  supNameError.innerHTML = '<i class="fa-sharp fa-solid fa-circle-check"></i>';
  isValue.classList.remove('invalid');
  return true;
}

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