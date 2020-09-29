const tryagainEl2 = document.querySelector("#tryagain-btn2").addEventListener("click", tryAgain2);
const scoresEl = document.querySelector("#player-scores");
const clearEl = document.querySelector("#clear-btn").addEventListener("click", clearScore);

// Retrieved local storage data for highscore table
let userData = JSON.parse(localStorage.getItem("userData"));

console.log(userData);


// Loop to populate highscore table with user data. 

userData.sort( 
    function (a, b) {
        return b.time - a.time;
    }
)

for (let i = 0; i < userData.length; i++) {
    let listItem = document.createElement("LI");
    scoresEl.appendChild(listItem);
    listItem.textContent = userData[i].name + " - " + userData[i].time;

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