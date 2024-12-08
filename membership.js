/*---active-link js start---*/

const navLinks = document.querySelectorAll('.nav-links a');

// Function to set the active link based on the current URL
function updateActiveLink() {
    const currentPath = window.location.pathname.split('/').pop(); // Get current file name
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-link');
        }
    });
}

// Update active link on page load
updateActiveLink();

// Also update when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        updateActiveLink();
    });
});

/*---active-link js end---*/

/*---js start for toggling menu---*/

function toggleMenu(){
    let navlink=document.querySelector(".nav-links");
    navlink.classList.toggle('show');
   }
  
  /*---js end for toggling menu---*/
  
  /*--js for cross-icon starts--*/
  function cross(){
    let navlink=document.querySelector(".nav-links");
    navlink.classList.remove('show');
  }
  /*--js for cross-icon ends--*/



  
/*--ADVISORY PAGE FIRST SECTION JS STARTS--*/

/*--js for show more projects starts--*/

/*-- transition js start for about section--*/
document.addEventListener("DOMContentLoaded", () => {
    const sectionDiv = document.getElementById("firstsection-div");
  
    // Add the 'visible' class to trigger the transition effect
    setTimeout(() => {
      sectionDiv.classList.add("visible");
    }, 100); // Delay for smoother effect
  });
  /*-- transition js ends for about section--*/
  
  /*---slider js start---*/
  const slider = document.querySelector('.slider');
  const leftBtn = document.querySelector('.left-btn');
  const rightBtn = document.querySelector('.right-btn');
  
  // Clone the first and last cards for seamless looping
  const firstCard = slider.firstElementChild.cloneNode(true);
  const lastCard = slider.lastElementChild.cloneNode(true);
  slider.appendChild(firstCard);
  slider.insertBefore(lastCard, slider.firstElementChild);
  
  let currentIndex = 1; // Start at the first real card
  const cardWidth = document.querySelector('.card').offsetWidth + 20; // Card width + margin
  const totalCards = slider.children.length;
  
  // Initialize position
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  
  // Function to move the slider
  const updateSliderPosition = () => {
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  };
  
  // Disable/enable buttons based on current position
  const checkButtonStatus = () => {
    // Disable the right button before the last real card
    rightBtn.disabled = currentIndex >= totalCards -4;
    rightBtn.style.opacity = rightBtn.disabled ? "0.5" : "1";
  
    // Disable the left button at the first real card
    leftBtn.disabled = currentIndex <= 1;
    leftBtn.style.opacity = leftBtn.disabled ? "0.5" : "1";
  };
  
  // Right button click handler
  rightBtn.addEventListener('click', () => {
    if (!rightBtn.disabled) {
      currentIndex++;
      updateSliderPosition();
      checkButtonStatus();
    }
  });
  
  // Left button click handler
  leftBtn.addEventListener('click', () => {
    if (!leftBtn.disabled) {
      currentIndex--;
      updateSliderPosition();
      checkButtonStatus();
    }
  });
  
  // Prevent blank space by snapping back to the correct position
  slider.addEventListener('transitionend', () => {
    if (currentIndex === totalCards - 1) {
      // Snap back to the last real card
      currentIndex = totalCards - 2;
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    } else if (currentIndex === 0) {
      // Snap back to the first real card
      currentIndex = 1;
      slider.style.transition = 'none';
      slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    checkButtonStatus();
  });
  
  // Initialize button states
  checkButtonStatus();
  /*---slider js end---*/


  
/*--scroll bottom to top btn js start--*/
 // Select the button
 const scrollToTopBtn = document.getElementById('scrollToTopBtn');

 // Show button when scrolled down 200px
 window.addEventListener('scroll', () => {
   if (window.scrollY > 200) {
     scrollToTopBtn.style.display = 'block';
   } else {
     scrollToTopBtn.style.display = 'none';
   }
 });

 // Scroll to the top when button is clicked
 scrollToTopBtn.addEventListener('click', () => {
   window.scrollTo({
     top: 0,
     behavior: 'smooth' // Smooth scrolling
   });
 });
/*--scroll bottom to top btn js ends--*/


/*--scroll top to bottom  btn js start--*/
  // Select the button
  const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');

  // Scroll to the bottom when button is clicked
  scrollToBottomBtn.addEventListener('click', () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Scroll to the bottom
      behavior: 'smooth' // Smooth scrolling
    });
  });
/*--scroll top to bottom btn js ends--*/
