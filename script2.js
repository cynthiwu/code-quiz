var tryagainEl2 = document.querySelector("#tryagain-btn2").addEventListener("click", tryAgain2);
var scoresEl = document.querySelector("#player-scores");
var clearEl = document.querySelector("#clear-btn").addEventListener("click", clearScore);

// Retrieved local storage data for highscore table. 
var userInitials = JSON.parse(localStorage.getItem("Initials"));
var userTime = JSON.parse(localStorage.getItem("User Time"));

console.log(userInitials);
console.log(userTime);

for (let i = 0; i < userInitials.length; i++) {
    var listItem = document.createElement("LI");
    scoresEl.appendChild(listItem);
    listItem.textContent = userInitials[i] + " - " + userTime[i];

}

function tryAgain2() {
    location.replace("codequiz.html");
}

function clearScore() {
    removeAllChildNodes(scoresEl);
    localStorage.clear();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}