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

document.addEventListener('DOMContentLoaded', function () {
    // This code will run when the DOM is fully loaded

    // Focus on the name input
    document.getElementById('name').focus();
});

function validateName() {
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');

    const trimmedValue = nameInput.value.trim();

    if (trimmedValue === '') {
        nameError.textContent = 'Please enter a valid name.';
    } else {
        nameError.textContent = '';
    }
}

function startQuiz() {

    const nameInput = document.getElementById('name');
    const trimmedValue = nameInput.value.trim();

    if (trimmedValue === '') {
        // Display an error message next to the input field
        document.getElementById('name-error').textContent = 'Please enter a valid name.';
        return;
    }

    playerName = trimmedValue;

    // Reset the error message if the input is valid
    document.getElementById('name-error').textContent = '';

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
    questionNumberElement.innerText = `Question ${currentQuestion + 1} / 10`;
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

    if (selectedIndex === currentQuizData.correctAnswer) {
        score += 10;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults(playerName);
    }
}

function showResults(playerName) {
    const quizContainer = document.getElementById('quiz-container');

    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');

    const resultMessage = document.createElement('h2');
    resultMessage.innerText = `${playerName}, you managed to answer ${score / 10} questions correctly with a score:`;

    const totalScoreMessage = document.createElement('h2');
    totalScoreMessage.innerHTML = `<i class="fa-solid fa-trophy" style="color: gold;"></i>${score}`;

    resultContainer.appendChild(resultMessage);
    resultContainer.appendChild(totalScoreMessage);

    quizContainer.innerHTML = '';
    quizContainer.appendChild(resultContainer);

    const retryButton = document.createElement('button');
    retryButton.innerText = 'Play Again';
    retryButton.classList.add('retry-button');
    retryButton.addEventListener('click', () => location.reload());
    quizContainer.appendChild(retryButton);
}