/*Quiz data in an array as objects*/
const quizInfo = [
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cascade simple shows",
        right: b,
    },
    {
        question: "What year was Javascript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1990",
        right: b,
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Man Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hypertext Markup Language",
        right: d,
    },
    {
        question: "HTML Tags are case sensetive",
        a: "False",
        b: "True",
        c: "Only in HTML5",
        d: "NOt in HTML5",
        right: b,
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "Body{color:black}",
        b: "Body:color=black",
        c: "{body;color:black}",
        d: "{body:color=black(body)}",
        right: a,
    },
    {
        question: "Who is making the web standards",
        a: "Chrome",
        b: "Microsoft",
        c: "Apple",
        d: "The world Wide Web consortium",
        right: d,
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Javascript",
        d: "Python",
        right: c,
    },
    {
        question: "What tag is used to add image?",
        a: "<em>",
        b: "<br>",
        c: "<img>",
        d: "<h1>",
        right: c,
    },
    {
        question: "What tag is used to break?",
        a: "<br>",
        b: "<span>",
        c: "<a>",
        d: "<em>",
        right: a,
    },
    {
        question: "Javascript language is?",
        a: "Object-Oriented",
        b: "Object-based",
        c: "Assembly language",
        d: "High-level",
        right: a,
    }
];

/*assign elements to variables*/
const quiz=document.getElementById('quiz')
const answerSelect = document.querySelectorAll('.answer')
const questionSelect = document.getElementById('question')
const a_txt = document.getElementById('a_txt')
const b_txt = document.getElementById('a_txt')
const c_txt = document.getElementById('a_txt')
const d_txt = document.getElementById('a_txt')

/*Initialize score to zero & current quiz questions to 0 */
let score = 0
let currentQuiz = 0

loadQuiz()
/*Function to update new question*/

function loadQuiz(){
    unselectAnswers()
     /*assign current quiz data to quiz info and pass current quiz as currentQuiz as index*/
    const currentQuizData = quizInfo[currentQuiz]
     /*assign question and answer fields with data from quizdata*/ 
    questionSelect.innertext = currentQuizData.question
    a_txt.innertext = currentQuizData.a
    b_txt.innerText = currentQuizData.b
    c_txt.innerText = currentQuizData.c
    d_txt.innerText = currentQuizData.d

}

