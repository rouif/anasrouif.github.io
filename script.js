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
document.querySelector(".hero p").textContent = text.welcomeText;

    document.querySelector("#story h2").textContent = text.story;
document.querySelector("#story p").textContent = text.storyText;
    document.querySelector("#journey h2").textContent = text.journey;
document.querySelector("#journey > p").textContent = text.journeyText;
    document.querySelector("#gallery h2").textContent = text.gallery;

    document.querySelector("#certificates h2").textContent = text.certificates;

    document.querySelector("#contact h2").textContent = text.contact;
    document.querySelector("#contact > p").textContent = text.contactText;
    
document.querySelector("nav a:nth-child(1)").textContent = text.menuHome;

document.querySelector("nav a:nth-child(2)").textContent = text.menuAbout;

document.querySelector("nav a:nth-child(3)").textContent = text.menuExperience;

document.querySelector("nav a:nth-child(4)").textContent = text.menuGallery;

document.querySelector("nav a:nth-child(5)").textContent = text.menuCertificates;

document.querySelector("nav a:nth-child(6)").textContent = text.menuContact;

    if (language === "ar") {

        document.body.style.direction = "rtl";

    } else {

        document.body.style.direction = "ltr";

    }

}
