function changeLanguage(language) {

    let text;

    if (language === "en") {
        text = en;
    }

    if (language === "fr") {
        text = fr;
    }

    if (language === "es") {
        text = es;
    }

    if (language === "ar") {
        text = ar;
    }


    document.querySelector("h1").textContent = text.name;

    document.querySelector(".hero h2").textContent = text.welcome;


    document.querySelector("#story h2").textContent = text.story;

    document.querySelector("#journey h2").textContent = text.journey;

    document.querySelector("#gallery h2").textContent = text.gallery;

    document.querySelector("#certificates h2").textContent = text.certificates;

    document.querySelector("#contact h2").textContent = text.contact;


    if (language === "ar") {

        document.body.style.direction = "rtl";

    } else {

        document.body.style.direction = "ltr";

    }

}
