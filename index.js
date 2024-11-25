let isModalOpen=false;
let contrastToggle=false;
const scaleFactor = 1/20

function moveBackground(event){
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  // Client x and y move the element in this plane (shapes) up, down, left, and right
  const y = event.clientY * scaleFactor;
  
  for (let i = 0; i < shapes.length; ++i){
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1: 1 
    // Ternary operator, this is a different way of writting an if statement. This line basically means: if isOdd is true, the value is equal to -1; otherwise, set it to 1 
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt }px)`
    // Since we're changing the value of isOdd by -1 or 1, depending if is true or not, multiplying by this function changes the direction of the movement
  }
}


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

