const compteur = () => {
    const coumpteurDate = new Date("December 31, 2022 00:00:00").getTime();
    const maintenant = new Date().getTime();
    const dif = maintenant-coumpteurDate;

    const seconde = 1000;
    const minute = seconde * 60;
    const heure = minute * 60;
    const jour = heure * 24;

    const textjour = Math.floor(dif / jour);
    const textheure = Math.floor((dif % jour) / heure);
    const textminute = Math.floor((dif % heure) / minute);
    const textseconde = Math.floor((dif % minute) / seconde);

    document.querySelector(".jour").innerText =textjour;
    document.querySelector(".heure").innerText = "0"+textheure;
    document.querySelector(".minute").innerText = "0"+textminute;
    document.querySelector(".seconde").innerText ="0"+textseconde;
};

setInterval(compteur, 1000);