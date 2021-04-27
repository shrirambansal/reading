let darkThemeURL = "https://bootswatch.com/4/darkly/bootstrap.min.css";
let lightThemeURL = "https://bootswatch.com/4/minty/bootstrap.min.css";

const linkTag = document.getElementById("dark-theme-style");
const themeToggler = document.getElementById("theme-toggler");

let isDark = false;

function enableDarkTheme() {
    linkTag.setAttribute("href", darkThemeURL);
    themeToggler.innerHTML = "🌞"
}   

function enableLightTheme() {
    linkTag.setAttribute("href", lightThemeURL)
    themeToggler.innerHTML = "🌚"
} 

function themeToggle() {
    if(isDark) {
        isDark = false;
        enableLightTheme();
    } else {
        isDark = true;
        enableDarkTheme();
    }
}