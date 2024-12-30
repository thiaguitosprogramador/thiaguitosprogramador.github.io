// Functions.js

// Function to toggle the visibility of a section
function toggleSectionVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

// Function to change the theme of the portfolio
function changeTheme(theme) {
    const body = document.body;
    if (theme === "dark") {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
    } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
    }
}

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

// Example usage
document.getElementById("toggleButton").addEventListener("click", () => toggleSectionVisibility("aboutSection"));
document.getElementById("themeButton").addEventListener("click", () => changeTheme("dark"));
document.getElementById("scrollButton").addEventListener("click", () => scrollToSection("contactSection"));