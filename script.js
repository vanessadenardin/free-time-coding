// console.log("Hello World");
let camperbot = "Bot";
let xp = 0;
// "You rock!"
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
// let inventory = ["stick", "dagger", "sword"];
let inventory = ["stick"];

// let h1 = document.querySelector("h1");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth")

function goStore() {
    // console.log("Going to store.");
    button1.innerText = "Buy 10 health (10 gold)";
    button2.innerText = "Buy weapon (30 gold)";
    button3.innerText = "Go to town square"
    button1.onclick = buyHealth;
    button2.onclick = buyWeapon;
    button3.onclick = goTown;
    text.innerText = "You enter the store.";
}

function goCave() {
    console.log("Going to cave.")
}

function fightDragon() {
    console.log("Fighting dragon.");
}

// initialize buttons
// element.EventAttribute = someFuncitionName;
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function buyHealth() {

}

function buyWeapon() {

}

function goTown() {

}
