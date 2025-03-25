function initQuiz() {
    if (typeof quizData === 'undefined') {
        console.error("Les données du quiz ne sont pas chargées");
        document.getElementById('quiz-container').innerHTML = `
            <div class="error-message">
                Erreur de chargement du quiz. Veuillez réessayer.
            </div>
        `;
        return;
    }

    let currentQuestionIndex = 0;
    let score = 0;
    const quizContainer = document.getElementById('quiz-container');

    function showQuestion() {
        const question = quizData.questions[currentQuestionIndex];
        const progress = `${currentQuestionIndex + 1}/${quizData.questions.length}`;

        quizContainer.innerHTML = `
            <div class="quiz-header">
                <h2 class="lesson-title">${quizData.lessonTitle}</h2>
                <div class="question-progress">Question ${progress}</div>
                <div class="question-text">${question.question}</div>
            </div>
            <div class="answers-container" id="answers-container">
                ${question.answers.map((answer, index) => `
                    <button class="answer-btn" data-index="${index}" data-correct="${answer.correct}">
                        ${answer.text}
                        ${question.explanation ? `<div class="answer-explanation">${question.explanation}</div>` : ''}
                    </button>
                `).join('')}
            </div>
            <div class="quiz-footer">
                <button class="action-btn secondary" id="next-btn" disabled>Question suivante</button>
            </div>
        `;

        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', selectAnswer);
        });

        document.getElementById('next-btn').addEventListener('click', nextQuestion);
    }

    function selectAnswer(e) {
        const selectedBtn = e.target.closest('.answer-btn');
        const isCorrect = selectedBtn.getAttribute('data-correct') === 'true';

        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
            if (btn.getAttribute('data-correct') === 'true') {
                btn.classList.add('correct');
            }
        });

        selectedBtn.classList.add(isCorrect ? 'correct' : 'incorrect');

        const explanation = selectedBtn.querySelector('.answer-explanation');
        if (explanation) explanation.style.display = 'block';

        document.getElementById('next-btn').disabled = false;

        if (isCorrect) score++;
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        quizContainer.innerHTML = `
            <div class="results-screen">
                <h2 class="results-title">Niveau terminé !</h2>
                <div class="results-score">${score}/${quizData.questions.length}</div>
                <div class="quiz-footer">
                    <button class="action-btn secondary" id="retry-btn">Réessayer</button>
                    <button class="action-btn" id="next-level-btn">Niveau suivant</button>
                </div>
            </div>
        `;

        document.getElementById('retry-btn').addEventListener('click', () => {
            currentQuestionIndex = 0;
            score = 0;
            showQuestion();
        });

        document.getElementById('next-level-btn').addEventListener('click', () => {
            alert("Fonctionnalité 'Niveau suivant' à implémenter");
        });
    }

    showQuestion();
    function showResults() {
        const scorePercentage = Math.round((score / quizData.questions.length) * 100);
        const isValidated = scorePercentage >= 80;

        saveProgress(quizData.lessonTitle, score, quizData.questions.length, isValidated);

        quizContainer.innerHTML = `
            <div class="results-screen">
                <h2 class="results-title">${isValidated ? 'Quiz validé !' : 'Quiz terminé'}</h2>
                <div class="results-score">${score}/${quizData.questions.length} (${scorePercentage}%)</div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${scorePercentage}%"></div>
                </div>
                <div class="bts-validation">
                    ${isValidated ?
            '✅ Validé pour le BTS SIO' :
            '❌ 80% minimum requis pour la validation'}
                </div>
                <div class="quiz-footer">
                    <button class="action-btn secondary" id="retry-btn">Réessayer</button>
                    <button class="action-btn" id="next-level-btn">Continuer</button>
                </div>
            </div>
        `;
        // ... (gestion des événements)
    }
}

// Gestion du stockage local
function saveProgress(quizName, score, total, isValidated) {
    const progress = JSON.parse(localStorage.getItem('btsSioProgress') || '{}');

    progress[quizName] = {
        score,
        total,
        percentage: Math.round((score / total) * 100),
        date: new Date().toLocaleString('fr-FR'),
        isValidated,
        competences: getCompetencesForQuiz(quizName) // À adapter
    };

    localStorage.setItem('btsSioProgress', JSON.stringify(progress));
}

function getCompetencesForQuiz(quizName) {
    // Mapping des compétences BTS SIO par quiz
    const competencesMap = {
        "Introduction à HTML": ["CE1.1", "CE1.4"],
        "Les bases du CSS": ["CE1.1", "CE1.3"],
        // Ajouter d'autres quiz...
    };
    return competencesMap[quizName] || [];
}