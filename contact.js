
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



  /*-- transition js start for contact hero section--*/
document.addEventListener("DOMContentLoaded", () => {
  const sectionDiv = document.getElementById("firstsection-div");

  // Add the 'visible' class to trigger the transition effect
  setTimeout(() => {
    sectionDiv.classList.add("visible");
  }, 100); // Delay for smoother effect
});
/*-- transition js ends for  contact section --*/

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
function sendMail(event) {
    event.preventDefault();  // Prevent form submission

    // Collect form data
    let parms = {
        name: document.querySelector("#full-name").value,
        comp: document.querySelector("#comp-name").value,
        officemail: document.querySelector("#official-email").value,
        phone: document.querySelector("#phone-number").value,
        member: document.querySelector('input[name="membership-type"]:checked')?.value || "",
        inquiry: Array.from(document.querySelectorAll('input[name="inquiry-type"]:checked'))
                      .map(el => el.value).join(", "),
        newsopt: document.querySelector('input[name="newsletter"]:checked')?.value || "",
        conmth: document.querySelector('input[name="contact-method"]:checked')?.value || "",
        hearabt: document.querySelector("#hear-about").value,
    };

    // Send email using EmailJS
    emailjs.send("service_7ybqhmi", "template_yjtlyoq", parms)
        .then(() => {
            alert("Form submitted successfully!");
            console.log("sent email ");
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
        });
}
