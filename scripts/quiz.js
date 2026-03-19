const quizzes = {
    quickfire: [
        {
            q: "Which nation currently holds the #1 spot on the World Giving Index?",
            options: ["USA", "Indonesia", "Norway"],
            correct: 1,
            info: "Indonesia has held the top spot for several years due to deep-rooted community help traditions."
        },
        {
            q: "In the Philippines, food poverty recently declined to what percentage?",
            options: ["19%", "25%", "32%"],
            correct: 0,
            info: "OCTA Research showed food poverty dropped to 19% by late 2025/early 2026."
        }
    ],
    deepdive: [
        {
            q: "At what rate is wealth extracted from the Global South to the Global North?",
            options: ["$1M / hour", "$10M / hour", "$30M / hour"],
            correct: 2,
            info: "Structural inequalities in trade result in a $30M/hour drain from developing nations."
        },
        {
            q: "How many of the world's poorest countries are primarily in Africa?",
            options: ["12 countries", "26 countries", "40 countries"],
            correct: 1,
            info: "The World Bank identifies 26 countries in extreme fiscal distress, mostly linked to colonial legacies."
        },
        {
            q: "What percentage of billionaire wealth is unearned (inheritance/cronyism)?",
            options: ["20%", "45%", "60%"],
            correct: 2,
            info: "Oxfam reports that 60% of billionaire wealth results from non-competitive or inherited sources."
        }
    ]
};

let activeQuiz = [];
let currentQ = 0;
let score = 0;

function startQuiz(type) {
    activeQuiz = quizzes[type];
    currentQ = 0; score = 0;
    document.getElementById('quiz-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
    showQuestion();
}

function closeQuiz() {
    document.getElementById('quiz-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    setTimeout(() => {
        document.getElementById('quiz-container').innerHTML = `
            <span class="question-meta" id="q-number">Question 1</span>
            <h3 id="q-text" style="margin-top: 0.5rem;">Loading...</h3>
            <div class="quiz-options" id="q-options"></div>
            <div id="modal-feedback" class="feedback-text"></div>
            <button id="next-btn" class="btn-primary" style="display:none; margin-top: 1.5rem; width: 100%; justify-content: center;" onclick="nextQuestion()">Next Question</button>
        `;
    }, 500);
}

function showQuestion() {
    const data = activeQuiz[currentQ];
    document.getElementById('q-number').innerText = `Evidence File ${currentQ + 1} of ${activeQuiz.length}`;
    document.getElementById('q-text').innerText = data.q;
    document.getElementById('modal-feedback').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    
    const optionsContainer = document.getElementById('q-options');
    optionsContainer.innerHTML = '';
    
    data.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `${opt} <span><i class="far fa-circle"></i></span>`;
        btn.onclick = () => handleChoice(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleChoice(index, btn) {
    const data = activeQuiz[currentQ];
    const buttons = document.querySelectorAll('#q-options .option-btn');
    buttons.forEach(b => b.style.pointerEvents = 'none');

    if (index === data.correct) {
        btn.classList.add('correct');
        btn.querySelector('i').className = 'fas fa-check-circle';
        score++;
    } else {
        btn.classList.add('wrong');
        btn.querySelector('i').className = 'fas fa-times-circle';
        buttons[data.correct].classList.add('correct');
    }

    const feedback = document.getElementById('modal-feedback');
    feedback.innerText = data.info;
    feedback.style.display = 'block';
    document.getElementById('next-btn').style.display = 'inline-flex';
}

function nextQuestion() {
    currentQ++;
    if (currentQ < activeQuiz.length) {
        showQuestion();
    } else {
        document.getElementById('quiz-container').innerHTML = `
            <h3 style="text-align:center;">Evaluation Complete</h3>
            <p style="text-align:center; margin: 1rem 0;">Analysis: You correctly identified ${score} out of ${activeQuiz.length} metrics.</p>
            <button class="btn-primary" style="width:100%; justify-content:center;" onclick="closeQuiz()">Close File</button>
        `;
    }
}