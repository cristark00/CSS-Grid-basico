const themeToggleButton = document.getElementById("toggle-theme-btn");
const currentTheme= localStorage.getItem("theme");
themeToggleButton.addEventListener("click", () =>{
    document.body.classList.toggle("dark-theme");
    const theme = document.body.classList.contains("dark-theme") ?
    "dark" : "light";
    localStorage.setItem("theme",theme);
})

if(currentTheme === "dark"){
  document.body.classList.add("dark-theme");
}