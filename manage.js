const main = document.querySelector("main")
const boutton1 = document.querySelector(".all")
const boutton2 = document.querySelector(".active")
const boutton3 = document.querySelector(".inactive")
const premiere = document.querySelector(".liste-1");

let dataGloabal = []


fetch("data.json")
    .then(res => res.json())

    .then(data => {
        dataGloabal = data;
        renderList("all")
        setActiveBoutton(boutton1)
    })
    .catch(error => {
        console.log("erreur :", error)
    })

function renderList(filter) {
    premiere.innerHTML = "";

    dataGloabal.forEach(item => {
        const { logo, name, description, isActive } = item;

        if (filter === "active" && !isActive) return;
        if (filter === "inactive" && isActive) return;

        const bloc = document.createElement("section");
        bloc.className = "conteneur"

        const imageTexte = document.createElement("div");
        imageTexte.className = "img-texte"
        const image = document.createElement("img");

        const titreTexte = document.createElement("div");
        titreTexte.className = "conteneur-titre-texte";
        const nom = document.createElement("span");
        nom.className = "titre"
        const texte = document.createElement("span");
        texte.className = "texte"

        const boutons = document.createElement("div")
        boutons.className = "boutons"
        const gauche = document.createElement("div")
        gauche.className = "gauche"
        const droit = document.createElement("div")
        droit.className = "droit"
        const toggle = document.createElement("div")
        toggle.className = "toggle"
        const boutton = document.createElement("button")
        boutton.textContent = "Remove"


        nom.textContent = name;
        texte.textContent = description;
        image.src = logo;

        droit.appendChild(toggle)

        gauche.appendChild(boutton)

        boutons.appendChild(gauche)
        boutons.appendChild(droit)

        titreTexte.appendChild(nom)
        titreTexte.appendChild(texte)

        bloc.appendChild(imageTexte)
        bloc.appendChild(titreTexte)
        bloc.appendChild(boutons)


        imageTexte.appendChild(image)
        imageTexte.appendChild(titreTexte)


        if (isActive) {
            droit.style.background = "hsl(3, 77%, 44%)"
            droit.style.justifyContent = "right"
        }
        else {
            droit.style.background = "hsl(0, 0%, 78%)";

        }
        premiere.appendChild(bloc)


    })
}
boutton1.addEventListener('click', () => {
    renderList("all")
    setActiveBoutton(boutton1);
});
boutton2.addEventListener('click', () => {
    renderList("active");
    setActiveBoutton(boutton2)
})
boutton3.addEventListener('click', () => {
    renderList("inactive");
    setActiveBoutton(boutton3)
})
function setActiveBoutton(activeBoutton) {
    [boutton1, boutton2, boutton3].forEach(btn => {
        btn.style.background = "";
        btn.style.color = "";
    });
    activeBoutton.style.background = "hsl(3, 77%, 44%)"
    activeBoutton.style.color = "white";
}








