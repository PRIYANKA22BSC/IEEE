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



  


/*--js for show more projects starts--*/

/*-- transition js start for hero section--*/
document.addEventListener("DOMContentLoaded", () => {
    const sectionDiv = document.getElementById("firstsection-div");
  
    // Add the 'visible' class to trigger the transition effect
    setTimeout(() => {
      sectionDiv.classList.add("visible");
    }, 100); // Delay for smoother effect
  });
  /*-- transition js ends for hro section--*/
  
  /*transition js for second and about section*/
  

  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("#aboutsection-leftdiv, #secondsection-rightdiv");
  
    const handleScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) { // Trigger when 75% in view
          section.classList.add("scroll-active");
        }
      });
    };
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Initial check in case the elements are already in view
    handleScroll();
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    // Select the sections to apply the effect
    const sections = document.querySelectorAll("#aboutsection-rightdiv, #secondsection-leftdiv");
  
    const handleScroll = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) { // Trigger when 75% of the element is in view
          section.classList.add("scroll-active");
        }
      });
    };
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Initial check in case elements are already in view
    handleScroll();
  });
  
/*project-js start*/
document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");

  const observerOptions = {
    threshold: 0.3, // Trigger when 30% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once the animation is applied
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  projects.forEach((project) => observer.observe(project));
});

/*project js ends*/

/*offer section strt */
document.addEventListener("DOMContentLoaded", () => {
  const offers = document.querySelectorAll(".offer");

  const observerOptions = {
    threshold: 0.3, // Trigger when 30% of the element is visible
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 200); // Add delay for staggered effect (200ms between each)
        observer.unobserve(entry.target); // Stop observing once animation is applied
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  offers.forEach((offer) => observer.observe(offer));
});


/*offer section ends*/



  
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
