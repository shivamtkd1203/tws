// Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
//     e.addEventlistener('keyup',(el)=>{
//         if (e.value.length > 0) {
//             document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(180deg)";
//         } else {
//             document.getElementsByClassName('bi-caret-down-fill')[i].style.transform="rotate(0deg)";
//         }

//     })

// })

  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 1000); 
