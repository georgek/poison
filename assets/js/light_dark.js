const btn = document.querySelector(".btn-light-dark");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

const themeFromLS = localStorage.getItem("theme");
const darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
const themeFromUser = darkModePreference.matches ? "dark" : "light";
const currentTheme = themeFromLS || themeFromUser;

if (themeFromLS === themeFromUser) {
    localStorage.removeItem("theme");
}

if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    moon.style.display = 'none';
    sun.style.display = 'block';
} else {
    document.body.classList.remove("dark-theme");
    moon.style.display = 'block';
    sun.style.display = 'none';
}

btn.addEventListener("click", () => {
    const themeFromUser = darkModePreference.matches ? "dark" : "light";

    document.body.classList.toggle("dark-theme");

    const currentTheme = document.body.classList.contains("dark-theme")
          ? "dark" : "light";
    if (currentTheme !== themeFromUser) {
        localStorage.setItem("theme", currentTheme);
    } else {
        localStorage.removeItem("theme");
    }

    updateTheme();
});

darkModePreference.addEventListener("change", () => {
    const themeFromUser = darkModePreference.matches ? "dark" : "light";
    const currentTheme = document.body.classList.contains("dark-theme")
          ? "dark" : "light";

    if (themeFromUser !== currentTheme) {
        document.body.classList.toggle("dark-theme");
    }

    updateTheme();
});

function updateTheme() {
    const hasComments = document.getElementById("remark42");

    if (document.body.classList.contains("dark-theme")) {
        document.documentElement.setAttribute("data-theme", "dark");
        moon.style.display = 'none';
        sun.style.display = 'block';
        if (hasComments) {
            window.REMARK42.changeTheme("dark");
        }
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        moon.style.display = 'block';
        sun.style.display = 'none';
        if (hasComments) {
            window.REMARK42.changeTheme("light");
        }
    }
}
