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
        },
        {
            q: "What percentage of global wealth is owned by the richest 1%?",
            options: ["20%", "43%", "65%"],
            correct: 1,
            info: "According to recent Oxfam reports, the richest 1% own around 43% of all global financial assets."
        },
        {
            q: "Roughly how many people globally lack access to safely managed drinking water?",
            options: ["500 Million", "2 Billion", "4 Billion"],
            correct: 1,
            info: "The WHO and UNICEF estimate that 2 billion people lack access to safe drinking water at home."
        },
        {
            q: "On average, how many people are displaced by climate-related disasters annually?",
            options: ["5 Million", "10 Million", "20+ Million"],
            correct: 2,
            info: "Over 20 million people are forced to move every year due to extreme weather events."
        },
        {
            q: "The poorest 50% of the global population is responsible for what percentage of historical carbon emissions?",
            options: ["10%", "25%", "40%"],
            correct: 0,
            info: "The poorest half of the world contributes only about 10% of total lifestyle consumption emissions."
        },
        {
            q: "How many children are engaged in child labor globally?",
            options: ["30 Million", "80 Million", "160 Million"],
            correct: 2,
            info: "The ILO estimates 160 million children are in child labor, with 79 million in hazardous conditions."
        },
        {
            q: "What percentage of all food produced globally is lost or wasted?",
            options: ["10%", "30%", "50%"],
            correct: 1,
            info: "Approximately 30% (over 1 billion tons) of food is wasted annually despite global hunger."
        },
        {
            q: "What is the primary goal of UN Sustainable Development Goal (SDG) 1?",
            options: ["Zero Hunger", "No Poverty", "Climate Action"],
            correct: 1,
            info: "SDG 1 aims to 'End poverty in all its forms everywhere' by 2030."
        },
        {
            q: "Which continent is home to the vast majority of people living in extreme poverty?",
            options: ["Asia", "South America", "Africa"],
            correct: 2,
            info: "Sub-Saharan Africa accounts for the majority of the world's extreme poor, largely due to ongoing systemic legacies."
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
        },
        {
            q: "The concept of 'Unequal Exchange' in global trade describes:",
            options: ["Tariff barriers", "Underpaying for Southern labor and resources", "Currency inflation"],
            correct: 1,
            info: "Unequal exchange systematically transfers value to the North because Southern labor is severely underpriced."
        },
        {
            q: "Historically, IMF 'Structural Adjustment Programs' usually forced countries to:",
            options: ["Increase public healthcare", "Privatize public services and cut spending", "Raise minimum wages"],
            correct: 1,
            info: "SAPs typically mandated austerity, often devastating local health and education systems."
        },
        {
            q: "The 'Resource Curse' refers to the paradox where:",
            options: ["Resources run out quickly", "Abundant natural resources lead to worse economic outcomes", "Mining is physically cursed"],
            correct: 1,
            info: "Nations rich in minerals often experience less growth and more conflict due to foreign exploitation."
        },
        {
            q: "Economist Utsa Patnaik estimates the British Empire extracted how much wealth from India?",
            options: ["$1 Trillion", "$10 Trillion", "$45 Trillion"],
            correct: 2,
            info: "Based on nearly two centuries of tax and trade manipulation, the extraction is valued at roughly $45 trillion."
        },
        {
            q: "By 2023, the total external debt of the Global South reached approximately:",
            options: ["$1 Trillion", "$4 Trillion", "$9 Trillion"],
            correct: 2,
            info: "Developing countries face overwhelming debt burdens around $9 trillion, heavily restricting their social development."
        },
        {
            q: "Which industry is primarily driving the exploitative cobalt mining in the DRC?",
            options: ["Textiles & Fashion", "Tech & EV Batteries", "Corporate Agriculture"],
            correct: 1,
            info: "Cobalt is essential for lithium-ion batteries used in smartphones and electric vehicles."
        },
        {
            q: "The concept of 'Climate Debt' argues that:",
            options: ["Developing nations owe for green tech", "Global North countries owe reparations for historical emissions", "Climate change is an economic hoax"],
            correct: 1,
            info: "Because rich nations caused most historical emissions, they owe a 'debt' to the vulnerable nations facing the consequences."
        },
        {
            q: "Approximately how much of global agricultural land is used for livestock feed rather than human food?",
            options: ["30%", "50%", "80%"],
            correct: 2,
            info: "Nearly 80% of agricultural land is used for grazing and animal feed, driving immense deforestation."
        },
        {
            q: "The 'Fast Fashion' industry relies heavily on:",
            options: ["Highly paid artisan labor", "Exploitative low-wage labor in the Global South", "Fully automated robotic factories"],
            correct: 1,
            info: "Fast fashion profits by outsourcing manufacturing to countries where labor rights are suppressed."
        },
        {
            q: "Vast amounts of toxic electronic waste (E-waste) from the Global North are frequently dumped in:",
            options: ["The deep ocean", "Space", "Sites like Agbogbloshie in Ghana"],
            correct: 2,
            info: "Developing nations often bear the environmental burden of processing the rich world's toxic E-waste."
        },
        {
            q: "While the mid-20th century 'Green Revolution' increased crop yields, it also led to:",
            options: ["The end of global hunger", "Heavy reliance on expensive chemical fertilizers", "A shift to 100% organic farming"],
            correct: 1,
            info: "It increased dependency on agrochemicals and corporate seeds, putting smallholder farmers in debt."
        },
        {
            q: "'Neocolonialism' is best defined as:",
            options: ["Ruling a territory through direct military force", "Economic and cultural control without direct political rule", "A new type of colonial architecture"],
            correct: 1,
            info: "Even after independence, many nations remain economically beholden to former colonizers through debt and trade."
        },
        {
            q: "What is a major difference between 'Fair Trade' and 'Free Trade'?",
            options: ["Fair trade ensures minimum price standards", "Free trade guarantees worker safety", "Fair trade means zero tariffs"],
            correct: 0,
            info: "Fair Trade certification attempts to guarantee living wages and safe conditions, unlike standard free trade."
        },
        {
            q: "Microfinance was initially praised for ending poverty, but evidence shows it often:",
            options: ["Creates billionaires", "Leads to severe debt traps for the poor", "Replaces the World Bank"],
            correct: 1,
            info: "High interest rates and systemic poverty have caused many microcredit loans to trap borrowers in deeper debt."
        },
        {
            q: "'Land Grabbing' refers to:",
            options: ["Foreign entities buying vast tracts of agricultural land in developing nations", "Squatters occupying urban spaces", "Government seizing national parks"],
            correct: 0,
            info: "Foreign corporations and states buy millions of hectares in the Global South, displacing local food production."
        },
        {
            q: "Multinational corporations frequently avoid taxes in developing nations through a mechanism called:",
            options: ["Philanthropy", "Transfer Pricing", "Tariff Indexing"],
            correct: 1,
            info: "Transfer pricing shifts profits to tax havens, robbing developing nations of crucial tax revenue."
        },
        {
            q: "Special Economic Zones (SEZs) are often criticized because they:",
            options: ["Pay taxes too highly", "Routinely circumvent national labor and environmental laws", "Only hire union workers"],
            correct: 1,
            info: "SEZs are designed to attract foreign investment by severely deregulating labor and environmental protections."
        },
        {
            q: "How do agricultural subsidies in the Global North affect the Global South?",
            options: ["They help Southern farmers", "They artificially lower prices, undercutting unsubsidized Southern farmers", "They have no effect"],
            correct: 1,
            info: "Heavily subsidized Northern crops flood global markets, destroying the livelihoods of poor farmers."
        },
        {
            q: "'Food Sovereignty' is the right of peoples to:",
            options: ["Eat whatever they want", "Define their own food and agriculture systems", "Import food without tariffs"],
            correct: 1,
            info: "It prioritizes local agricultural control over corporate, export-driven agricultural models."
        },
        {
            q: "In many highly indebted African nations, debt service payments surpass spending on:",
            options: ["Military defense", "Public healthcare and education", "Foreign embassies"],
            correct: 1,
            info: "Nations are forced to pay foreign creditors before funding their own hospitals and schools."
        },
        {
            q: "The TRIPS agreement on intellectual property rights has heavily criticized for:",
            options: ["Lowering technology costs", "Restricting access to life-saving generic medicines in poor countries", "Promoting open source software"],
            correct: 1,
            info: "Strict patents prevent developing nations from cheaply manufacturing essential drugs for their citizens."
        },
        {
            q: "It is estimated that what percentage of global GDP is hidden in offshore tax havens?",
            options: ["1%", "10%", "30%"],
            correct: 1,
            info: "Roughly 10% of global GDP is stashed away, preventing proper taxation and wealth redistribution."
        },
        {
            q: "What is 'Climate Gentrification'?",
            options: ["Building eco-friendly mansions", "Rising property values pushing out poor residents from climate-resilient areas", "Lowering emissions in cities"],
            correct: 1,
            info: "As sea levels rise, wealthy buyers purchase elevated inland properties, displacing low-income communities."
        },
        {
            q: "'Biopiracy' involves corporations:",
            options: ["Stealing shipping cargo", "Patenting indigenous knowledge and biological resources without compensation", "Illegally hunting wildlife"],
            correct: 1,
            info: "Pharmaceutical and agricultural giants often patent compounds long used by indigenous groups."
        },
        {
            q: "Extractive institutions are economic structures designed to:",
            options: ["Distribute wealth equally", "Extract incomes and wealth from one subset of society to benefit another", "Extract oil and gas safely"],
            correct: 1,
            info: "Economists Acemoglu and Robinson highlight these institutions as the root cause of poverty."
        },
        {
            q: "A common criticism of corporate 'Carbon Offsets' is that they:",
            options: ["Reduce emissions too quickly", "Allow continuing pollution while displacing local communities for tree planting", "Are too cheap"],
            correct: 1,
            info: "Offsets often justify continued fossil fuel use and lead to 'green grabbing' of indigenous lands."
        },
        {
            q: "The 'Brain Drain' refers to:",
            options: ["A decline in global literacy rates", "The mass emigration of skilled workers from developing to developed nations", "Memory loss from pollution"],
            correct: 1,
            info: "Rich nations frequently recruit top doctors, engineers, and scientists from nations that desperately need them."
        }
    ]
};

let activeQuiz = [];
let currentQ = 0;
let score = 0;
let currentType = '';
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function startQuiz(type) {
    initAudio();
    currentType = type;
    activeQuiz = [...quizzes[type]]; 
    currentQ = 0; 
    score = 0;
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
    
    const choices = data.options.map((opt, index) => ({
        text: opt,
        isCorrect: index === data.correct
    }));

    for (let i = choices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }
    
    choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `${choice.text} <span><i class="far fa-circle"></i></span>`;
        btn.onclick = () => handleChoice(choice.isCorrect, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleChoice(isCorrect, btn) {
    const data = activeQuiz[currentQ];
    const buttons = document.querySelectorAll('#q-options .option-btn');
    buttons.forEach(b => b.style.pointerEvents = 'none');

    if (isCorrect) {
        btn.classList.add('correct');
        btn.querySelector('i').className = 'fas fa-check-circle';
        score++;
        playSuccess();
    } else {
        btn.classList.add('wrong');
        btn.querySelector('i').className = 'fas fa-times-circle';
        buttons.forEach(b => {
            if (b.innerText.trim() === data.options[data.correct].trim()) {
                b.classList.add('correct');
            }
        });
        playFailure();
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
        const threshold = currentType === 'deepdive' ? 15 : 5;
        const pass = score > threshold;
        const title = pass ? "🎊 Evaluation Mastered!" : "📉 Evaluation Incomplete";
        const message = pass 
            ? `Outstanding analysis! You correctly identified ${score} out of ${activeQuiz.length} key metrics.`
            : `Analysis required. You only identified ${score} out of ${activeQuiz.length} metrics. Significant research (Threshold: >${threshold}) is needed.`;

        document.getElementById('quiz-container').innerHTML = `
            <div style="text-align:center;">
                <h2 style="color: ${pass ? '#2a7242' : 'var(--accent-red)'}; margin-bottom: 1rem;">${title}</h2>
                <p style="margin: 1.5rem 0; font-size: 1.1rem; line-height: 1.6;">${message}</p>
                <div style="font-size: 3rem; margin: 1.5rem 0;">${pass ? '🏆' : '⚠️'}</div>
                <button class="btn-primary" style="width:100%; justify-content:center;" onclick="closeQuiz()">Return to Case Files</button>
            </div>
        `;

        if (pass) {
            triggerConfetti();
            playClapping();
        } else {
            playSadTrumpet();
        }
    }
}

// Sound Effects Generation

function playSuccess() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); 
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.1); 
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + 0.3);
}

function playFailure() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, audioCtx.currentTime); 
    osc.frequency.linearRampToValueAtTime(55, audioCtx.currentTime + 0.2); 
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + 0.4);
}

function playClapping() {
    if (!audioCtx) return;
    // Generate white noise bursts for clapping
    const duration = 2.0;
    const bufferSize = audioCtx.sampleRate * duration;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) { data[i] = Math.random() * 2 - 1; }

    for (let j = 0; j < 12; j++) {
        const time = audioCtx.currentTime + j * 0.15 + Math.random() * 0.1;
        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 1000 + Math.random() * 500;
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0, time);
        gain.gain.linearRampToValueAtTime(0.2, time + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.1);
        source.connect(filter); filter.connect(gain); gain.connect(audioCtx.destination);
        source.start(time); source.stop(time + 0.1);
    }
}

function playSadTrumpet() {
    if (!audioCtx) return;
    const notes = [233.08, 220.00, 207.65, 174.61]; // Bb3, A3, Ab3, F3
    notes.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.4);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.95, audioCtx.currentTime + i * 0.4 + 0.3);
        const lowpass = audioCtx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.value = 800;
        gain.gain.setValueAtTime(0, audioCtx.currentTime + i * 0.4);
        gain.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + i * 0.4 + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.4 + 0.4);
        osc.connect(lowpass); lowpass.connect(gain); gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + i * 0.4);
        osc.stop(audioCtx.currentTime + i * 0.4 + 0.4);
    });
}

function triggerConfetti() {
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c0392b', '#2a7242', '#3498db', '#f1c40f'],
        zIndex: 3000
    });
}