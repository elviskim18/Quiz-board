/*Quiz data in an array as objects*/
const quizInfo = [
    {
        question: "What year was Javascript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1990",
        right: "b",
    },
    {
        question: "HTML Tags are case sensetive",
        a: "False",
        b: "True",
        c: "Only in HTML5",
        d: "NOt in HTML5",
        right: "b",
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "Body{color:black}",
        b: "Body:color=black",
        c: "{body;color:black}",
        d: "{body:color=black(body)}",
        right: "a",
    },
    {
        question: "What tag is used to break?",
        a: "<br>",
        b: "<span>",
        c: "<a>",
        d: "<em>",
        right: "a",
    },
    {
        question: "Javascript language is?",
        a: "Object-Oriented",
        b: "Object-based",
        c: "Assembly language",
        d: "High-level",
        right: "a",
    },
    {
        question: "Who is making the web standards",
        a: "Chrome",
        b: "Microsoft",
        c: "Apple",
        d: "The world Wide Web consortium",
        right: "d",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "Javascript",
        right: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        right: "b",
    },
    {
        question: "What tag is used to add image?",
        a: "<em>",
        b: "<br>",
        c: "<img>",
        d: "<h1>",
        right: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        right: "a",
    },
    
];
/*assign elements to variables*/
const quiz= document.getElementById('quiz')
const answerSelect = document.querySelectorAll('.answer')
const questionSelect = document.getElementById('question')
const a_txt = document.getElementById('a_txt')
const b_txt = document.getElementById('b_txt')
const c_txt = document.getElementById('c_txt')
const d_txt = document.getElementById('d_txt')
const submitBtn = document.getElementById('submit')

/*Initialize score to zero & current quiz questions to 0 */
let currentQuiz = 0
let score = 0
let questionCounter = 0

loadQuiz()
/*Function to update new question*/
function loadQuiz() {

    unselectAnswers()
/*assign current quiz data to quiz info and pass current quiz as currentQuiz as index*/

    const currentQuizData = quizInfo[currentQuiz]
    
    questionSelect.innerText = currentQuizData.question
    a_txt.innerText = currentQuizData.a
    b_txt.innerText = currentQuizData.b
    c_txt.innerText = currentQuizData.c
    d_txt.innerText = currentQuizData.d
}

function unselectAnswers() {
    answerSelect.forEach(answersel => answersel.checked = false)
}
/*Function to check selected answer*/
function getSelected() {
    /*var to store selected option*/
    let answer
    /*loop through all radio buttons and get selected value*/
    answerSelect.forEach(answersel => {
        if(answersel.checked) {
            answer = answersel.id
        }
    })
    return answer
}

/*function to listen to submit button and give grading*/
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizInfo[currentQuiz].right) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizInfo.length) {
           loadQuiz()
       } else {

           quiz.innerHTML = `
           <h2>You Grade is: ${calGrade(score)} : (${score*10}%) </h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
/*
80
70
50
less than 50
 

*/


/*function to calculate grades*/
function calGrade(score){
    var temp = score*10;
    var grade;
    if(temp <= 100 && temp >=80 ){
        grade='A'+ " " + "Excellent"
    }
    else if(temp <=79 && temp >=70){
        grade='B' + " " + "Good"
    }
    else if(temp <=69 && temp >=60){
        grade='C' + " " + "Fair"
    }
    else if(temp <=59 && temp >=50){
        grade='D' + " " + "Improve"
    }
    else if(temp < 50){
        grade = 'E kindly retake'
    }
    return grade;

} 
