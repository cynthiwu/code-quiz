const tryagainEl2 = document.querySelector("#tryagain-btn2").addEventListener("click", tryAgain2);
const scoresEl = document.querySelector("#player-scores");
const clearEl = document.querySelector("#clear-btn").addEventListener("click", clearScore);

// Retrieved local storage data for highscore table
let userInitials = JSON.parse(localStorage.getItem("Initials"));
let userTime = JSON.parse(localStorage.getItem("User Time"));

console.log(userInitials);
console.log(userTime);

// Loop to populate highscore table with user data. 

for (let i = 0; i < userInitials.length; i++) {
    let listItem = document.createElement("LI");
    scoresEl.appendChild(listItem);
    listItem.textContent = userInitials[i] + " - " + userTime[i];

}

function tryAgain2() {
    location.replace("../index.html");
}

// Function to clear scores and remove all child nodes, using function below. 

function clearScore() {
    removeAllChildNodes(scoresEl);
    localStorage.clear();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}