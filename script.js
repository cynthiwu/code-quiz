//TIME
// A. Initiate/Start Button
// I. Event Listener with an actual HTML button 'on click'
// II. Event starts timer and hide
// B. The Quiz Itself
// C. End of quiz/record highscore
// I. New game and clear highscores question

    //Your entire JS code here
// Call the DOM
var tryagainEl = document.querySelector("#tryagain-btn").addEventListener("click", tryAgain);
var startButton = document.querySelector("#start-btn").addEventListener("click", startQuiz);
var timerEl = document.querySelector("#timer");
var introEl = document.querySelector("#introContainer");
var questionContainerEl = document.querySelector("#questionContainer");
var questionEl = document.querySelector("#question"); 
var answerbtnEl = document.querySelectorAll(".answer-btn");
var judgeEl = document.querySelector("#judge");
var alldoneEl = document.querySelector("#alldoneContainer");
var finalscoreEl = document.querySelector("#final-score")
var gameoverEl = document.querySelector("#gameoverContainer");

var currentQuestionIndex = 0;
var gameFinished = false;

// Question Array
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

//Function to set and start the timer. 
var timeLeft = 75;
var timeInterval;

function setTimer() {

    timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft;
    timeLeft--;
    console.log(timeLeft);
    
    if (timeLeft <= -1) {
        //Function to open up the Highscores page
        clearInterval(timeInterval);
        gameOver();
    }  

    else if (gameFinished === true) {
        clearInterval(timeInterval);
        quizDone();
    }

    }, 1000);
}

//Function to dynamically populate the question content into hidden div. 
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
// Function which starts the quiz, start the timer and brings up the first set of questions. Hides the introduction container and unhides the question container. 

function startQuiz() {
    
    console.log("Started");
    
    setTimer();

    introEl.classList.add("hide");
    setQuestion();
    questionContainerEl.classList.remove("hide");
    
}

// Function to assess if we've cycled through all of the questions. 

function quizDone() {
    if (currentQuestionIndex < questionsArr.length) {
        setTimeout(setQuestion,1000);
    }
    else {
        questionContainerEl.classList.add("hide");
        alldoneEl.classList.remove("hide");
        gameFinished = true;
        finalscoreEl.textContent = timeLeft;
        timerEl.textContent = timeLeft;
        // There is  a lag with this. Should I push the time left into an array in my interval function and then retrive that here? 
    }
}

answerbtnEl[0].addEventListener("click", selectAnswer);
answerbtnEl[1].addEventListener("click", selectAnswer);
answerbtnEl[2].addEventListener("click", selectAnswer);
answerbtnEl[3].addEventListener("click", selectAnswer);

// Function to change the page. 

function changePage() {
    window.location.href = "highscore.html";
}

// Function to evaluate the user's answers. 

function selectAnswer(event) {
    console.log(event.target.value);

    if (event.target.value === questionsArr[currentQuestionIndex].correct) {
        currentQuestionIndex++;
        console.log("correct");
        console.log(currentQuestionIndex);
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
    location.replace("codequiz.html");


}


