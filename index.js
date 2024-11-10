// template_m4vz0j2
// leslieamanda0504
// VMDuKIoekIuKGcEZV
function contact(event) {
  event.preventDefault();
  // emailjs
  // .sendForm(
  //     'leslieamanda0504',
  //     'template_m4vz0j2',
  //     event.target,
  //     'VMDuKIoekIuKGcEZV'
  // )
  // .then(() => {
  //     console.log('thisworked1')
  // }
  // )

  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible")
  setTimeout(() => {
    console.log('it worked 1')
  }, 500);
}
