// Need to learn how to hide things. Put everything you want into HTML, and then unhide them. Class selector for hidden (questions, high score). 
// Use querySelector to unhide these. Hidden and dislay:none
// Only have text in the start screen, but everyrhing should be empty to add it dynamically. 
// All new pages. 
// Questions array, with objects with the question and the answer. 

// You only want to loop through this once. Maybe creating a global variable to count. 
// create a varaible that stores the user's answer to reference back 
//Go through array, create whichever it is, then save which number it is. So when they click on it. You're storing users's answers //


var startButton = document.getElementById("start-btn").addEventListener("click", startQuiz);
//Click registering in window and not on button. 
var timerEl = document.getElementById("timer");
var introEl = document.getElementById("introContainer");
var questionContainerEl = document.getElementById("questionContainer");
var questionEl = document.getElementById("question"); 
var answer1 = document.getElementById("answer-btn-1");
var answer2 = document.getElementById("answer-btn-2");
var answer3 = document.getElementById("answer-btn-3");
var answer4 = document.getElementById("answer-btn-4");

// let shuffledQuestions, currentQuestionIndex;
currentQuestionIndex = 0;

var questionsArr = [
    {
        question: "What does 'HTML' stand for?",
        answers: [
            {text: "Human Typed Markup Language", correct: false},
            {text: "Hypertime Markup Language", correct: false},
            {text: "Hypertext Markup Language", correct: true},
            {text: "Huge Toes Make Laughs", correct: false}
        ]
    },
    {
        question: "Which language is primarily used to control the aesthetics of a webpage?",
        answers: [
            {text: "HTML", correct: false},
            {text: "JavaScript", correct: false},
            {text: "Python", correct: false},
            {text: "CSS", correct: true}
        ]
    },  
    {
        question: "Which of the following HTML tags is the ancestor of meta tags in an HTML file?",
        answers: [
            {text: "<head></head>", correct: true},
            {text: "<header></header>", correct: false},
            {text: "<h1></h1>", correct:false},
            {text: "<hr></hr>", correc: false}
        ]
    },
    {
        question: "What is the z-index property used for in CSS?",
        answers: [
            {text: "Fixing elements to specified coordinates in the browser window", correct: false},
            {text: "Positioning elements relative to their ancestors", correct: false},
            {text: "Resetting elements to their default browser position", correct: false},
            {text: "Layering elements on top of each other", correct: true}
        ]
    },
    {
        question: "What is the Chrome Inspector used for?",
        answers: [
            {text: "Debugging code", correct: false},
            {text: "Testing out different CSS style rules", correct: false},
            {text: "Temporarily changing text content on a webpage", correct: false},
            {text: "All of the above", correct: true}
        ]
    },
    {
        question: "What is Bootstrap?",
        answers: [
            {text: "A JavaScript library", correct: false},
            {text: "A CSS framework", correct: true},
            {text: "A scripting language", correct: false},
            {text: "None of the above", correct: false}
        ]
    },
    {
        question: "Which of these data types is a Boolean?",
        answers: [
            {text: "True", correct: true},
            {text: "3.14", correct: false},
            {text: "Red", correct: false},
            {text: "67%", correct: false}
        ]
    },
    {
        question: "How do you enclose an array in JavaScript?",
        answers: [
            {text: "{}", correct: false},
            {text: "()", correct: false},
            {text: "[]", correct: true},
            {text: "||", correct: false}
        ]
    }
]

//Function to start the quiz. This should hide the intro container, add 75 seconds to the time and start the countdown and bring up the first question and set of answers. 

function setTimer() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft;
    timeLeft--;
    console.log(timeLeft);
    
    if (timeLeft === 0) {
        //Function to open up the Highscores page
        clearInterval(timeInterval);
    }   
    }, 1000);
}


function startQuiz() {
    
    console.log("Started");
    
    setTimer();

    introEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    // currentQuestionIndex = 0;
    initialQuestion();
}


//Try renaming your buttons to have the same name, query selector all, and then turning that into an array too append to - https://www.youtube.com/watch?v=hDN5IGUv3Yw - 7:58
function initialQuestion() {
    for (let i = 0; i < questionsArr.length; i++){
    questionEl.innerHTML = questionsArr[i].question;
    answer1.innerHTML = questionsArr[i].answers.text[i];
    answer2.innerHTML = questionsArr[i].answers.text[i];
    answer3.innerHTML = questionsArr[i].answers.text[i];
    answer4.innerHTML = questionsArr[i].answers.text[i];
    }
}

function selectAnswer() {


}


// var currentQuestion = 0; //Which question is it. 

// for (let i= 0; i < questionsArr.length; i++) {

//     //dynamically add questions to questions div
//     questionsArr[i].question; // Store which question it is somewhere. By having a global variable?

//     //dynamically add answers to answers div

//     for (let j= 0; j < questionsArr[i].answers.length; j++) {
//         //Create them dynamically and then append them
//     }
// }
// //When user clicks on button. 

// questionsArr[i].answers[j]


// You only want to loop through this once. Maybe creating a global variable to count. 
// create a varaible that stores the user's answer to reference back 
//Go through array, create whichever it is, then save which number it is. So when they click on it. You're storing users's answers