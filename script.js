// Need to learn how to hide things. Put everything you want into HTML, and then unhide them. Class selector for hidden (questions, high score). 
// Use querySelector to unhide these. Hidden and dislay:none
// Only have text in the start screen, but everyrhing should be empty to add it dynamically. 
// All new pages. 
// Questions array, with objects with the question and the answer. 

// You only want to loop through this once. Maybe creating a global variable to count. 
// create a varaible that stores the user's answer to reference back 
//Go through array, create whichever it is, then save which number it is. So when they click on it. You're storing users's answers //


var startButton = document.querySelector("#start-btn").addEventListener("click", startQuiz);
//Click registering in window and not on button. 
var timerEl = document.querySelector("#timer");
var introEl = document.querySelector("#introContainer");
var questionContainerEl = document.querySelector("#questionContainer");
var questionEl = document.querySelector("#question"); 
var answerbtnEl = document.querySelectorAll(".answer-btn");

var currentQuestionIndex = 0;
var quizComplete = false;

var questionsArr = [
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
        correct: "A JavaScript library"
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

//Function to start the quiz. This should hide the intro container, add 75 seconds to the time and start the countdown and bring up the first question and set of answers. 

function setTimer() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft;
    timeLeft--;
    console.log(timeLeft);
    
    if (timeLeft === 0) {
        //Function to open up the Highscores page
        timeLeft = 0;
        clearInterval(timeInterval);
    }   
    }, 1000);
}


function startQuiz() {
    
    console.log("Started");
    
    setTimer();

    introEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    setQuestion();
}


//Try renaming your buttons to have the same name, query selector all, and then turning that into an array too append to - https://www.youtube.com/watch?v=hDN5IGUv3Yw - 7:58. Create a question index variable to count the question and then create a formula that listens for button clicks, throws up the coorrect or wrong, and changes the content of the question. 

currentQuestionIndex = 0;

function setQuestion() {
    //Populating question
    for (let i = 0; i < questionsArr.length; i++) {
        questionEl.textContent = questionsArr[currentQuestionIndex].question;

        for(let j = 0; j < questionsArr[currentQuestionIndex].answers.length; j++) {
        answerbtnEl[j].textContent = questionsArr[currentQuestionIndex].answers[j];
        }
    }
}

$(answerbtnEl).click(selectAnswer)

function selectAnswer(event) {
    if ($(event.target).text() === questionsArr[currentQuestionIndex].correct) {
        console.log("correct");
    }
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





