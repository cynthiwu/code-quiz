
// Call the DOM

const startButton = document.querySelector("#start-btn").addEventListener("click", startQuiz);
const timerEl = document.querySelector("#timer");
const introEl = document.querySelector("#introContainer");
const questionContainerEl = document.querySelector("#questionContainer");
const questionEl = document.querySelector("#question"); 
const answerbtnEl = document.querySelectorAll(".answer-btn");
const judgeEl = document.querySelector("#judge");
const alldoneEl = document.querySelector("#alldoneContainer");
const finalscoreEl = document.querySelector("#final-score")
const gameoverEl = document.querySelector("#gameoverContainer");
const tryagainEl = document.querySelector("#tryagain-btn").addEventListener("click", tryAgain);
const inputEl = document.querySelector("#initials");
const submmitEl = document.querySelector("#submit-btn").addEventListener("click", formSubmit);


let currentQuestionIndex = 0;
let gameFinished = false;

// Questions array

const questionsArr = [
    {
        question: "What does 'HTML' stand for?",
        answers: [
            "Human Typed Markup Language", 
            "Hypertime Markup Language", 
            "Hypertext Markup Language", 
            "Huge Toes Make Laughs"
        ],
        correct: "Hypertext Markup Language"
    },
    {
        question: "Which language is primarily used to control the aesthetics of a webpage?",
        answers: [
            "HTML", 
            "JavaScript", 
            "Python", 
            "CSS"
        ],
        correct: "CSS"
    },  
    {
        question: "Which of the following HTML tags is the ancestor of meta tags in an HTML file?",
        answers: [
            "<head></head>", 
            "<header></header>",
            "<h1></h1>", 
            "<hr></hr>"
        ],
        correct: "<head></head>"
    },
    {
        question: "What is the z-index property used for in CSS?",
        answers: [
            "Fixing elements to specified coordinates in the browser window", 
            "Positioning elements relative to their ancestors", 
            "Resetting elements to their default browser position", 
            "Layering elements on top of each other"
        ],
        correct: "Layering elements on top of each other"

    },
    {
        question: "What is the Chrome Inspector used for?",
        answers: [
            "Debugging code", 
            "Testing out different CSS style rules", 
            "Temporarily changing text content on a webpage",
            "All of the above"
        ],
        correct: "All of the above"
    },
    {
        question: "What is Bootstrap?",
        answers: [
            "A JavaScript library", 
            "A CSS framework", 
            "A scripting language", 
            "None of the above"
        ],
        correct: "A CSS framework"
    },
    {
        question: "Which of these data types is a Boolean?",
        answers: [
            "True", 
            "3.14", 
            "Red",
            "67%"
        ],
        correct: "True"
    },
    {
        question: "How do you enclose an array in JavaScript?",
        answers: [
            "{}", 
            "()",
            "[]", 
            "||", 
        ],
        correct: "[]",
    }
]


// Function which starts the quiz, start the timer and populate the first sets of questions. Hides the introduction container and reveals the question container. 

function startQuiz() {
    
    console.log("Started");
    setTimer();
    introEl.classList.add("hide");
    setQuestion();
    questionContainerEl.classList.remove("hide");
}


// Function to set and start and set the timer

let timeLeft = 75;
let timeInterval;

function setTimer() {

    timeInterval = setInterval(function() {
        timerEl.textContent = timeLeft;
        timeLeft--;
        console.log(timeLeft);
    
        if (timeLeft <= -1) {
            clearInterval(timeInterval);
            gameOver();
        }  
        else if (gameFinished === true) {
            clearInterval(timeInterval);
            quizDone();
        }
    }, 1000);
}

//Function to dynamically populate the question content into the question container 


function setQuestion() {
    judgeEl.classList.add("hide");

    for (let i = 0; i < questionsArr.length; i++) {
        questionEl.textContent = questionsArr[currentQuestionIndex].question;

        for (let j = 0; j < questionsArr[currentQuestionIndex].answers.length; j++) {
        answerbtnEl[j].value = questionsArr[currentQuestionIndex].answers[j];
        answerbtnEl[j].textContent = questionsArr[currentQuestionIndex].answers[j];
        }
    }
}


// Function to assess if we've cycled through all of the questions. 

function quizDone() {
    if (currentQuestionIndex < questionsArr.length) {
        setTimeout(setQuestion,500);
    }
    else {
        questionContainerEl.classList.add("hide");
        alldoneEl.classList.remove("hide");
        gameFinished = true;
        timerEl.textContent = timeLeft;
        finalscoreEl.textContent = timeLeft;
        // There is  a lag with this. Should I push the time left into an array in my interval function and then retrive that here? 
    }
}

// Can I do this another way that isn't so repetitive?

for (let i = 0; i < answerbtnEl.length; i++) {
    answerbtnEl[i].addEventListener("click", selectAnswer);
}

// Function to evaluate the user's answers 

function selectAnswer(event) {
    console.log(event.target.value);

    if (event.target.value === questionsArr[currentQuestionIndex].correct) {
        currentQuestionIndex++;
        console.log("correct");
        judgeEl.textContent = "CORRECT!";
        judgeEl.classList.remove("hide");
        quizDone();
    }
    else {
        currentQuestionIndex++;
        timeLeft = timeLeft - 10;
        console.log("incorrect");
        judgeEl.textContent = "WRONG!";
        judgeEl.classList.remove("hide");
        quizDone();
    }
}

function gameOver() {
    timerEl.textContent = 0;
    questionContainerEl.classList.add("hide");
    gameoverEl.classList.remove("hide");
    alldoneEl.classList.add("hide");
}

// Function to reset to code quiz. Not sure if this is the best way to do this. 

function tryAgain() {
    location.replace("index.html");
}

// Recording and storing form data for use with highscore page. 

let userInitials = JSON.parse(localStorage.getItem("Initials")) || [];
let userTime = JSON.parse(localStorage.getItem("User Time")) || [];

function formSubmit() {
    if (inputEl.value === "") {
        alert("Invalid entry. Please enter your intials.")
    }
    else {
    location.replace("Pages/highscore.html");
    console.log(timeLeft);
    console.log(inputEl.value);
    
    userInitials.push(inputEl.value);
    userTime.push(timeLeft);

    localStorage.setItem("Initials", JSON.stringify(userInitials));
    localStorage.setItem("User Time", JSON.stringify(userTime));

    console.log(userInitials);
    console.log(userTime);
    inputEl.value = "";
    }
}






