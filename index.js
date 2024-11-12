// template_m4vz0j2
// leslieamanda0504
// VMDuKIoekIuKGcEZV
let isModalOpen=false;
let contrastToggle=false;
function toggleContrast(){
  
  contrastToggle = !contrastToggle;
  if (contrastToggle){
    document.body.classList.add('dark-theme')

  }
  else {
    document.body.classList.remove('dark-theme')
  }
  
}
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");
  emailjs
    .sendForm(
      "leslieamanda0504",
      "template_m4vz0j2",
      event.target,
      "VMDuKIoekIuKGcEZV"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
      console.log("thisworked1");
    }).catch(() => {
        loading.classList.remove('modal__overlay--visible');
        alert("The email service is temporarily unavailable. Please contact me directly at leslieamanda0504@gmail.com");

    })
  
  setTimeout(() => {
    console.log("it worked 1");
  }, 1000);
}

function toggleModal(){
    
    if (isModalOpen){
        isModalOpen= false;
        return document.body.classList.remove('modal--open');
    
    }
    isModalOpen= true;
    document.body.classList.add("modal--open");
    

}

