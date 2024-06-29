const questions=[
    {
        question:"Which is the largest animal in the world?",
        answers:[
            
              {text:"Shark" , correct: false},
              {text:"Blue Whale" , correct: true},
              {text:"Elephant" , correct: false},
              {text:"Giraffe" , correct: false},
            
        ]
    },
    {
        question:"Which is the largest planet in the universe?",
        answers:[
            
              {text:"Earth" , correct: false},
              {text:"Jupiter" , correct: true},
              {text:"Mars" , correct: false},
              {text:"Saturn" , correct: false},
            
        ]
    },
    {
        question:"Which is the largest country in the world?",
        answers:[
            
              {text:"India" , correct: false},
              {text:"Russia" , correct: true},
              {text:"Nepal" , correct: false},
              {text:"Bangladesh" , correct: false},
            
        ]
    },
    {
        question:"Which country has the largest population?",
        answers:[
            
              {text:"Nepal" , correct: false},
              {text:"Russia" , correct: false},
              {text:"Kazakistan" , correct: false},
              {text:"India" , correct: true},
            
        ]
    },
   
];

const qustionElement=document.getElementById("question")
const answerButtons=document.getElementById("answer-buttons")
const nextButton=document.getElementById("next-btn")

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    const currentQuestionIndex=0;
    const score=0; 
    nextButton.innerHTML="Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1 ;
    qustionElement.innerHTML=questionNo + "."  + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add('btn')
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer)
        
    });
}
 function resetState(){
  nextButton.style.display="none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
  }
 }

function selectAnswer(e){
    selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }

Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct==="true"){
        button.classList.add("correct");
    }
      button.disabled=true;
});
nextButton.style.display="block";
} 

function showScore(){
    resetState();
    qustionElement.innerHTML=`You scored ${score} out of ${questions.length} !`;
    // nextButton.innerHTML="Play again"
    // nextButton.style.display="block"

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
 startQuiz();
