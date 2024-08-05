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


