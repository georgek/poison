/*
    Original Author: Bramus Van Damme
    Link to original: https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/

    Most of this code comes courtesy of Bramus Van Damme, with some minor tweaks
    to get it working for my use case.  Thanks, Bramus!
*/

window.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.firstElementChild.getAttribute("id");
            if (entry.isIntersecting) {
                document.querySelector(`#TableOfContents ul li a[href="#${id}"]`).parentElement.classList.add("active");
            } else {
                document.querySelector(`#TableOfContents ul li a[href="#${id}"]`).parentElement.classList.remove("active");
            }
        });
    });

    document.querySelectorAll("section").forEach((section) => {
        observer.observe(section);
    });
});
