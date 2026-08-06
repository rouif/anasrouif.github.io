function changeLanguage(language) {

    if (language === "en") {

        document.querySelector("h1").textContent = "ANAS ROUIF";
        document.querySelector(".hero h2").textContent = "Welcome to My Professional Journey";

    }


    if (language === "fr") {

        document.querySelector("h1").textContent = "ANAS ROUIF";
        document.querySelector(".hero h2").textContent = "Bienvenue dans mon parcours professionnel";

    }


    if (language === "es") {

        document.querySelector("h1").textContent = "ANAS ROUIF";
        document.querySelector(".hero h2").textContent = "Bienvenido a mi trayectoria profesional";

    }


    if (language === "ar") {

        document.querySelector("h1").textContent = "أنس الرويف";
        document.querySelector(".hero h2").textContent = "مرحبا بكم في مسيرتي المهنية";

        document.body.style.direction = "rtl";

    }

}
