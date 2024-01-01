const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 2
    },
    {
        question: 'Which river is the longest in the world?',
        options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
        correctAnswer: 1
    },
    {
        question: 'What is the capital of Sweden?',
        options: ['Oslo', 'Copenhagen', 'Gothenburg', 'Stockholm'],
        correctAnswer: 3
    },
    {
        question: 'What is the name of the larges Country in the world?',
        options: ['China', 'Russia', 'United States', 'Canada'],
        correctAnswer: 1
    },
    {
        question: 'What is the capital of Canada?',
        options: ['Ottawa', 'Toronto', 'Sofia', 'Canberra'],
        correctAnswer: 0
    },
    {
        question: 'What is the flattest country on Earth?',
        options: ['France', 'The Maldives', 'Sweden', 'Thailand'],
        correctAnswer: 1
    },
    {
        question: 'What is the capital of Norway?',
        options: ['Stockholm', 'Oslo', 'Helsinki', 'Copenhagen'],
        correctAnswer: 1
    },
    {
        question: 'What is the tallest mountain in the world?',
        options: ['Lhotse', 'Kebnekaise', 'Mount Everest', 'K2'],
        correctAnswer: 2
    },
    {
        question: 'Which country has the largest population in the world?',
        options: ['India', 'Russia', 'Thailand', 'China'],
        correctAnswer: 3
    },
    {
        question: 'What is the capital of Mexico?',
        options: ['Mexico', 'Mexico City', 'Madrid', 'Texas'],
        correctAnswer: 1
    }
];

let playerName = '';
let currentQuestion = 0;
let score = 0;

function startQuiz() {

    playerName = document.getElementById('name').value;

    if (playerName === '') {
        return;
    }

    document.getElementById('start-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';

    loadQuestion();

}

function loadQuestion() {
    const questionNumberElement = document.getElementById('question-number');
    const scoreElement = document.getElementById('score');
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const currentQuizData = quizData[currentQuestion];

    // Updates as the user goes through the questions
    questionNumberElement.innerText = `Question ${currentQuestion + 1} out of 10`;
    scoreElement.innerText = `Score: ${score}`;
    questionElement.innerText = currentQuizData.question;
    optionsContainer.innerHTML = '';

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuizData = quizData[currentQuestion];

    if (currentQuizData.options[selectedIndex] === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
    <h2>${playerName}, your Score: ${score} out of 10</h2>
    <button onclick="location.reload()">Retry</button>
  `;
}
