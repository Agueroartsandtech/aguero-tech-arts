/* =====================================================
   AGUERO TECH & ARTS
   Website JavaScript
   ===================================================== */

const BUSINESS = {
    whatsapp: "237680945208",
    email: "princeagwe6@gmail.com",
    name: "Aguero Tech & Arts"
};


/* ===============================
   WHATSAPP
   =============================== */

function sendWhatsApp(message) {

    const url =
        "https://wa.me/" +
        BUSINESS.whatsapp +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");
}


/* ===============================
   MOBILE MENU
   =============================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuToggle.textContent =
            navLinks.classList.contains("active")
                ? "✕"
                : "☰";

    });


    document.querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.textContent = "☰";

            });

        });

}


/* ===============================
   SERVICE BUTTONS
   =============================== */

document.querySelectorAll(".service-link")
    .forEach(button => {

        button.addEventListener("click", () => {

            const service =
                button.dataset.service;

            const message =
`Hello Aguero Tech & Arts 👋

My name is [Your Name].

I am interested in your ${service} service.

Please send me more information about:
• Price
• Process
• Delivery time

Thank you.`;

            sendWhatsApp(message);

        });

    });


/* ===============================
   T-SHIRT ORDER BUTTONS
   =============================== */

document.querySelectorAll(".buy-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const product =
                button.dataset.product;

            const message =
`Hello Aguero Tech & Arts 👋

I am interested in ordering:

👕 ${product}

Please send me the available designs, prices and ordering information.

Thank you.`;

            sendWhatsApp(message);

        });

    });


/* ===============================
   CONTACT FORM
   =============================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("customerName").value.trim();

        const service =
            document.getElementById("customerService").value;

        const message =
            document.getElementById("customerMessage").value.trim();


        if (!name || !service || !message) {

            alert("Please complete all the fields.");

            return;
        }


        const whatsappMessage =
`Hello Aguero Tech & Arts 👋

My name is ${name}.

I am interested in:
${service}

Project details:
${message}

Please let me know the price and next steps.

Thank you.`;


        sendWhatsApp(whatsappMessage);

    });

}


/* ===============================
   EMAIL BUTTON
   =============================== */

const emailButton =
    document.getElementById("emailButton");


if (emailButton) {

    emailButton.addEventListener("click", () => {

        const subject =
            "Aguero Tech & Arts Service Inquiry";

        const body =
`Hello Aguero Tech & Arts,

My name is [Your Name].

I would like to know more about your services.

My project/request:
[Write your request here]

Thank you.`;

        window.location.href =
            "mailto:" +
            BUSINESS.email +
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);

    });

}


/* ===============================
   CURRENT YEAR
   =============================== */

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ===============================
   BACK TO TOP
   =============================== */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("visible");

        } else {

            backToTop.classList.remove("visible");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ===============================
   SCROLL REVEAL
   =============================== */

const revealItems =
    document.querySelectorAll(
        ".service-card, .product-card, .process-step, .about-box, .contact-card"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform =
        "translateY(25px)";

    item.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(item);

});


/* ===============================
   CONSOLE
   =============================== */

console.log(
    "%cAGUERO TECH & ARTS",
    "color:#00e5ff;font-size:22px;font-weight:bold;"
);

console.log(
    "Technology • Automation • Creativity"
);