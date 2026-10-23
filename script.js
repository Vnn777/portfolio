
/* ========================================
   1. ANO AUTOMÁTICO NO RODAPÉ
======================================== */

const yearElement = document.querySelector("#ano");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* ========================================
   2. ANIMAÇÃO DAS SEÇÕES
======================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealElements.length > 0) {
    document.body.classList.add("js-animations");

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    ); 

    revealElements.forEach((element) => {
        observer.observe(element);
    });
}