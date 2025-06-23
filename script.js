let gem = document.querySelector(".gem-cost")
let parsedGem = parseFloat(gem.innerHTML)


let clickerCost = document.querySelector(".clicker-cost")
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector(".clicker-level")
let clickerIncrease = document.querySelector(".clicker-increase")
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let poteDeGemasCost = document.querySelector(".Pote-de-gemas-cost")
let parsedPoteDeGemasCost = parseFloat(poteDeGemasCost.innerHTML)
let poteDeGemasLevel = document.querySelector(".Pote-de-gemas-level")
let poteDeGemasIncrease = document.querySelector(".Pote-de-gemas-increase")
let parsedPoteDeGemasIncrease = parseFloat(poteDeGemasIncrease.innerHTML)

let gemaCozidaCost = document.querySelector(".gema-cozida-cost")
let parsedGemaCozidaCost = parseFloat(gemaCozidaCost.innerHTML)
let gemaCozidaLevel = document.querySelector(".gema-cozida-level")
let gemaCozidaIncrease = document.querySelector(".gema-cozida-increase")
let parsedGemaCozidaIncrease = parseFloat(gemaCozidaIncrease.innerHTML)

let gpcText = document.getElementById("gpc-texto")
let gpsText = document.getElementById("gps-texto")

let gemImgContainer = document.querySelector(".gem-img-container")

let gpc = 1;

let gps = 0;

function incrementGem(event) {
    gem.innerHTML = Math.round(parsedGem += gpc);

    const x = event.offsetX;
    const y = event.offsetY;

    const div = document.createElement("div");
    div.innerHTML = `+${Math.round(gpc)}`;
    div.style.cssText = `color: white; position: absolute; top: ${170}px; left: ${105}px; font-size: 15px; pointer-events: none;`
    gemImgContainer.appendChild(div);

    div.classList.add("fade-up");

    timeout(div)
}

const timeout = (div) => {
    setTimeout(() => {
        div.remove();
    }, 800)
}


function buyClicker() {
    if (parsedGem >= parsedClickerCost) {

        gem.innerHTML = Math.round(parsedGem -= parsedClickerCost);

        clickerLevel.innerHTML ++;

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2));
        clickerIncrease.innerHTML = parsedClickerIncrease;
        gpc += parsedClickerIncrease;   
        
        parsedClickerCost *= 1.18;
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}

function buyPoteDeGemas() {
    if (parsedGem >= parsedPoteDeGemasCost) {

        gem.innerHTML = Math.round(parsedGem -= parsedPoteDeGemasCost);

        poteDeGemasLevel.innerHTML ++;

        parsedPoteDeGemasIncrease = parseFloat((parsedPoteDeGemasIncrease * 1.01).toFixed(2));
        poteDeGemasIncrease.innerHTML = parsedPoteDeGemasIncrease;
        gps += parsedPoteDeGemasIncrease;   
        
        parsedPoteDeGemasCost *= 1.18;
        poteDeGemasCost.innerHTML = Math.round(parsedPoteDeGemasCost)
    }
}  


function buyGemaCozida() {
    if (parsedGem >= parsedGemaCozidaCost) {

        gem.innerHTML = Math.round(parsedGem -= parsedGemaCozidaCost);

        gemaCozidaLevel.innerHTML ++;

        parsedGemaCozidaIncrease = parseFloat((parsedGemaCozidaIncrease * 1.01).toFixed(2));
        gemaCozidaIncrease.innerHTML = parsedGemaCozidaIncrease;
        gps += parsedGemaCozidaIncrease;   
        
        parsedGemaCozidaCost *= 1.18;
        gemaCozidaCost.innerHTML = Math.round(parsedGemaCozidaCost)
    }
}

setInterval(() => {
    parsedGem += gps / 10;
    gem.innerHTML = Math.round(parsedGem);
    gpcText.innerHTML = Math.round(gpc)
    gpsText.innerHTML = Math.round(gps)
}, 100);