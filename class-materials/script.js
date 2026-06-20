const correctAnswers = {
    q1: 'B', q2: 'A', q3: 'B', q4: 'B', q5: 'B',
    q6: 'B', q7: 'A', q8: 'B', q9: 'A', q10: 'B'
};

function switchTab(tabName) {
    const quizBtn = document.getElementById('nav-quiz');
    const shareBtn = document.getElementById('nav-share');
    const quizPanel = document.getElementById('panel-quiz');
    const sharePanel = document.getElementById('panel-share');

    if (tabName === 'quiz') {
        quizBtn.className = 'nav-btn btn-active';
        shareBtn.className = 'nav-btn btn-inactive';
        quizPanel.className = 'section-panel active';
        sharePanel.className = 'section-panel';
    } else {
        quizBtn.className = 'nav-btn btn-inactive';
        shareBtn.className = 'nav-btn btn-active';
        quizPanel.className = 'section-panel';
        sharePanel.className = 'section-panel active';
    }
}

function evaluateQuiz(event) {
    event.preventDefault();
    const form = document.getElementById('quiz-form');
    const formData = new FormData(form);
    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    for (let key in correctAnswers) {
        if (formData.get(key) === correctAnswers[key]) {
            score++;
        }
    }

    form.style.display = 'none';

    const resultCard = document.getElementById('quiz-result');
    const scoreText = document.getElementById('score-text');
    const scoreTitle = document.getElementById('score-title');
    const scoreFeedback = document.getElementById('score-feedback');
    const circleScore = document.querySelector('.circle-score');

    resultCard.style.display = 'flex';
    scoreText.textContent = `${score}/${totalQuestions}`;

    if (score === totalQuestions) {
        scoreTitle.textContent = '¡Excelente trabajo!';
        scoreFeedback.textContent = '¡Dominas los fundamentos de Java del curso!';
        circleScore.style.backgroundColor = '#52a96c';
    } else if (score >= 7) {
        scoreTitle.textContent = '¡Buen trabajo!';
        scoreFeedback.textContent = 'Has aprobado, pero puedes revisar los temas que fallaste.';
        circleScore.style.backgroundColor = '#52a96c';
    } else {
        scoreTitle.textContent = '¡Sigue practicando!';
        scoreFeedback.textContent = 'No alcanzaste la nota mínima. ¡Vuelve a intentarlo para mejorar!';
        circleScore.style.backgroundColor = '#d9534f';
    }

    resultCard.scrollIntoView({ behavior: 'smooth' });
}

function resetQuiz() {
    const form = document.getElementById('quiz-form');
    const resultCard = document.getElementById('quiz-result');

    form.reset();
    resultCard.style.display = 'none';
    form.style.display = 'block';

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitProject(event) {
    event.preventDefault();

    const enlace = document.getElementById('enlace').value.trim();
    let warning = document.getElementById('share-warning');

    if (enlace && !enlace.startsWith('http')) {
        if (!warning) {
            warning = document.createElement('p');
            warning.id = 'share-warning';
            warning.style.cssText = 'color:#721c24;background:#f8d7da;padding:0.6rem 1rem;border-radius:8px;text-align:center;margin-bottom:1rem;font-weight:600;';
            document.querySelector('.btn-send').before(warning);
        }
        warning.textContent = 'Por favor ingresa un enlace válido (debe empezar con http:// o https://)';
        return;
    }

    if (warning) {
        warning.remove();
    }

    document.getElementById('share-form').style.display = 'none';
    document.getElementById('share-success').style.display = 'block';
}
