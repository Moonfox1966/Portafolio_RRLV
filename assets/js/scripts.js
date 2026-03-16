const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const html = document.documentElement;

function updateThemeIcon() {
  if (html.classList.contains("dark")) {
    themeIcon.textContent = "dark_mode";
  } else {
    themeIcon.textContent = "light_mode";
  }
}

function loadSavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }

  updateThemeIcon();
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    const currentTheme = html.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);

    updateThemeIcon();
  });
}

loadSavedTheme();