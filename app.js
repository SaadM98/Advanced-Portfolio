let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;


function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; i++){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`
    }
}


// Toggling dark mode and light mode.
function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme");
    }
}
 
// Opens up the Contact Menu 
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
// Sends email to connected Email using connected account
  emailjs
    .sendForm(
      "service_xfpjga8",
      "template_103vijv", 
      event.target,
      "itwTb7Moxsms5WMTx"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
      console.log("it worked 1");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The Email Service is Temporarily Unavailable. Please Contact me Directly at: Daasmn@gmail.com"
      );
    });
}

// Toggle the Modal Menu

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal__open");
    }
    isModalOpen = true;
  document.body.classList += " modal__open";
}
