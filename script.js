const quizData = [
    {
        question: "Qual das seguintes práticas contribui mais para a redução da pegada de carbono?",
        a: "Usar sacolas plásticas em vez de reutilizáveis",
        b: "Diminuir o uso de energia elétrica",
        c: "Descartar lixo eletrônico no lixo comum",
        d: "Aumentar o uso de veículos movidos a combustível fóssil",
        correct: "b"
    },
    {
        question: "Qual é a principal causa do desmatamento na Amazônia?",
        a: "Plantação de árvores nativas",
        b: "Expansão da agricultura e pecuária",
        c: "Aumento das áreas de preservação",
        d: "Turismo sustentável",
        correct: "b"
    },
    {
        question: "Qual é a melhor maneira de reduzir a poluição dos oceanos?",
        a: "Usar produtos de limpeza que contêm microplásticos",
        b: "Reduzir, reutilizar e reciclar materiais plásticos",
        c: "Aumentar o uso de embalagens descartáveis",
        d: "Jogar resíduos nos rios e mares",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.querySelector('.question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');
const scoreText = document.getElementById('score');
const reloadBtn = document.getElementById('reload');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.classList.add('hidden');
            result.classList.remove('hidden');
            scoreText.innerText = `Você acertou ${score} de ${quizData.length} perguntas.`;
        }
    }
});

reloadBtn.addEventListener('click', () => {
    currentQuiz = 0;
    score = 0;
    quiz.classList.remove('hidden');
    result.classList.add('hidden');
    loadQuiz();
});