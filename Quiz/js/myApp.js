//En variables capturamos los siguientes campos, número de pregunta, texto 
//de la pregunta y las opciones

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];


function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for (let i=0; i<totalQuestion; i++){
        availableQuestions.push(quiz[i])
    }
}
function getNewQuestion(){
    questionNumber.innerHTML = "Question "+(questionCounter + 1) +" of " + quiz.length;
    const questionRandom = availableQuestions[Math.floor(Math.random()*availableQuestions.length)]
    console.log(questionRandom)
    //currentQuestion = questionRandom;
    questionText.innerHTML = questionRandom.q;

    const index1 = availableQuestions.indexOf(questionRandom)
    availableQuestions.splice(index1,1);
    
    const optionlen = questionRandom.options.length
    for(let i = 0; i<optionlen; i++){
        console.log(i)
        availableOptions.push(i)
    }

    for(let i = 0; i<optionlen; i++){
        const option = document.createElement("div")
        option.innerHTML = questionRandom.options[i]
        option.id=1
        option.className = "option";
        optionContainer.appendChild(option)
    }
    
    questionCounter++;
}

function next(){
    if(questionCounter === quiz.length){
        console.log("Quiz terminado")
    }else{
        getNewQuestion();
    }
}


window.onload = function(){
    setAvailableQuestions();
    getNewQuestion()
}