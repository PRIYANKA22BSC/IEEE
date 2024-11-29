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
function project() {
  let seeMoreBtn = document.querySelector("#see-more-btn");
  let projectSection = document.querySelector("#project-section");
  let projectContainer2 = document.querySelector("#project-container2");

  if (projectContainer2.classList.contains('showmore')) {
    // Hide the extra content and change button back
    projectContainer2.classList.remove('showmore');
    projectSection.classList.remove('height');
    seeMoreBtn.innerHTML = 'See More <i class="fa-solid fa-angles-down" id="see-more-icon"></i>';
  } else {
    // Show the extra content and update the button text
    projectContainer2.classList.add('showmore');
    projectSection.classList.add('height');
    seeMoreBtn.innerHTML = 'See Less <i class="fa-solid fa-angles-up" id="see-more-icon"></i>';
  }
}
/*--js for show more projects ends--*/
/*--ADVISORY PAGE FIRST SECTION JS ENDS--*/