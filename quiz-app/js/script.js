const quizData = [
    {
        question: "What did Clara Zetkin fight for?",
        a:"Female labour unionization",
        b:"Female gardening",
        c:"Guerilla gardening",
        d:"Bookclubs for women",
        correct: "a",
    },
    {
        question: "What is Kimberlé Crenshaw famous for?",
        a:"Antifeminism",
        b:"Antiracist feminism",
        c:"Intersectional Feminism",
        d:"Masculinism",
        correct: "c"
    },
    {
        question: "Where did Audre Lorde live from 1984 to 1992?",
        a:"Poland",
        b:"China",
        c:"Croatia",
        d:"Germany",
        correct: "d",
    },
    {
        question: "What does Trịnh Thị Minh Hà stand for?",
        a:"Post office organisation",
        b:"Prostitution rights in middle east",
        c:"Postcolonial feminism",
        d:"Disability rights",
        correct: "c",
    },
    {
        question: "What is Demet Demir activist of?",
        a:"worldwide Climate Activism",
        b:"Transgender rights in Turkey",
        c:"LGBTQI Travel Blogs",
        d:"Mushroomcultivation in middle East",
        correct: "b",
    },
    {
        question: "Which Campagn did Rita Banerji start in 2006?",
        a:"50 Million Missing",
        b:"50 Million Rising",
        c:"10 thousand Missing",
        d:"Not one more",
        correct: "a",
    },
    {
        question: "Who asked this famous questions: 'Ain’t I a woman?'",
        a:"Marielle Franco",
        b:"Sojourner Truth",
        c:"Maria Do Mar Castro-Varela",
        d:"Angela Davis",
        correct: "b",
    }
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer"); //Radiobuttons
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

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

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h1>You answered correctly at ${score}/${quizData.length} questions.</h1>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});