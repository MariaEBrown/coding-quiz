var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById
('question-container')
var quetionElement = document.getElementById('question')
startButton.addEventListener('click', startGame);
var answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort( () => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()


}


function setNextQuestion (){
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionContainerElement.innerText = question.question
    question.answers.forEach(answer => { const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct){
        buttondataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
}




const questions = [
    {
        question: 'What is 5 + 5?',
        answers: [
        {text: '10', correct: true },
        {text: '33', correct: false}
    
    ]
    }
