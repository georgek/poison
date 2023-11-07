if (localStorage.theme) {
    document.documentElement.setAttribute("data-theme", localStorage.theme);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
}
