/* scripts/reveal.js */

document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        // Reduced to -100px so it triggers sooner after entering the screen
        rootMargin: '0px 0px -100px 0px', 
        threshold: 0 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((element) => {
        observer.observe(element);
    });
});