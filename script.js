/* =========================================================
   AGUERO TECH & ARTS
   Professional Website JavaScript
   ========================================================= */


/* =========================
   BUSINESS CONTACT
   ========================= */

const BUSINESS = {
    whatsapp: "237680945208",
    email: "princeagwe6@gmail.com",
    name: "Aguero Tech & Arts"
};


/* =========================
   WHATSAPP FUNCTION
   ========================= */

function openWhatsApp(message = "") {

    const defaultMessage =
        "Hello Aguero Tech & Arts 👋\n\n" +
        "I found your website and I would like to know more about your services.";

    const finalMessage = message || defaultMessage;

    const url =
        `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(finalMessage)}`;

    window.open(url, "_blank", "noopener,noreferrer");
}


/* =========================
   EMAIL FUNCTION
   ========================= */

function openEmail(subject = "Aguero Tech & Arts Inquiry", body = "") {

    const defaultBody =
        "Hello Aguero Tech & Arts,\n\n" +
        "I would like to know more about your services.\n\n" +
        "Thank you.";

    const finalBody = body || defaultBody;

    const mailto =
        `mailto:${BUSINESS.email}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(finalBody)}`;

    window.location.href = mailto;
}


/* =========================
   SERVICE ORDER BUTTONS
   ========================= */

function orderService(service) {

    const message =
        `Hello Aguero Tech & Arts 👋\n\n` +
        `I am interested in your *${service}* service.\n\n` +
        `Please send me more information about the price, process and delivery time.`;

    openWhatsApp(message);
}


/* =========================
   NAVIGATION
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

    const navLinks =
        document.querySelectorAll("nav a[href^='#']");

    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});


/* =========================
   ACTIVE NAVIGATION
   ========================= */

window.addEventListener("scroll", () => {

    const sections =
        document.querySelectorAll("section[id]");

    const links =
        document.querySelectorAll("nav ul li a");

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SCROLL REVEAL ANIMATION
   ========================= */

const revealElements =
    document.querySelectorAll(
        ".card, .step, .about-box, .section-title"
    );


const observer =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* =========================
   CURRENT YEAR
   ========================= */

const yearElement =
    document.querySelector(
        "#current-year"
    );

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================
   COPY EMAIL
   ========================= */

async function copyEmail() {

    try {

        await navigator.clipboard.writeText(
            BUSINESS.email
        );

        showNotification(
            "Email copied successfully."
        );

    } catch (error) {

        showNotification(
            BUSINESS.email
        );

    }

}


/* =========================
   NOTIFICATION
   ========================= */

function showNotification(message) {

    let notification =
        document.querySelector(
            ".aguero-notification"
        );

    if (!notification) {

        notification =
            document.createElement("div");

        notification.className =
            "aguero-notification";

        document.body.appendChild(
            notification
        );

    }

    notification.textContent =
        message;

    notification.classList.add("visible");

    setTimeout(() => {

        notification.classList.remove(
            "visible"
        );

    }, 3000);

}


/* =========================
   BACK TO TOP
   ========================= */

const backToTop =
    document.createElement("button");

backToTop.className =
    "back-to-top";

backToTop.innerHTML = "↑";

backToTop.setAttribute(
    "aria-label",
    "Back to top"
);

document.body.appendChild(
    backToTop
);


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

});


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================
   CONSOLE BRAND MESSAGE
   ========================= */

console.log(
    "%cAguero Tech & Arts",
    "font-size:24px;font-weight:bold;color:#00e5ff;"
);

console.log(
    "Technology • Automation • Websites • Creative Arts"
);