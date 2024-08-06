// Get references to elements
const toggleOpenButton = document.getElementById('toggleOpen');
const toggleCloseButton = document.getElementById('toggleClose');
const sidebar = document.getElementById('collapseMenu');

// Function to open the sidebar
function openSidebar() {
    sidebar.classList.remove('hidden');
}

// Function to close the sidebar
function closeSidebar() {
    sidebar.classList.add('hidden');
}

// Event listener for open button click
toggleOpenButton.addEventListener('click', openSidebar);

// Event listener for close button click
toggleCloseButton.addEventListener('click', closeSidebar);


document.getElementById("openSearchPanelButton").addEventListener("click", function() {
    const panel = document.querySelector(".searchPanel");
    panel.classList.remove("hidden");
    panel.classList.add("show");
});
document.getElementById("closeSearchPanel").addEventListener("click", function() {
    const panel = document.querySelector(".searchPanel");
    panel.classList.add("hidden");
    panel.classList.remove("show");
});





  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const hamburgerIcon = document.querySelector('header #toggleOpen svg');
    const goToTopButton = document.getElementById('goToTop');

    function handleScroll() {
        if (window.scrollY > 0) {
          header.classList.add('header-invert');
          hamburgerIcon.classList.add('hamburger-invert');
          goToTopButton.classList.remove('hidden');
        } else {
          header.classList.remove('header-invert');
          hamburgerIcon.classList.remove('hamburger-invert');
          goToTopButton.classList.add('hidden');
        }

    }

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Attach resize event listener to handle screen size changes
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();



    
  });
