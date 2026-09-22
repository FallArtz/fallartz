// Toggle between showing the dropdown and hiding it
function dropdownFunction() {
    const dropdown = document.getElementById("characterDropdown");
    const button = document.querySelector(".drop-btn");

    dropdown.classList.toggle("show");

    // When the dropdown is closed remove focus!
    if (!dropdown.classList.contains("show")) {
        button.blur();
    }
}

// Coding that hides the window after people click out
window.addEventListener("click", function(event) {
    if (!event.target.closest(".drop-btn") &&
    !event.target.closest(".dropdown-content")) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
});
