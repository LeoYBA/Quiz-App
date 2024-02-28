let questions = [
    {
        "question": "Was braucht man nicht, um das klassische Spaghetti Carbonara zu kochen?",
        "answer_1": "Schinken oder Speck",
        "answer_2": "Eier",
        "answer_3": "Tomatensauce",
        "answer_4": "Parmesan",
        "right_answer": 3
    },
    {
        "question": "Was braucht man nicht, um eine einfache Tomatensuppe zuzubereiten?",
        "answer_1": "Tomaten",
        "answer_2": "Zwiebeln",
        "answer_3": "Kartoffeln",
        "answer_4": "Sahne",
        "right_answer": 4
    },
    {
        "question": "Was braucht man nicht, um ein klassisches Omelett zuzubereiten?",
        "answer_1": "Schokolade",
        "answer_2": "Milch",
        "answer_3": "Spinat",
        "answer_4": "Eier",
        "right_answer": 1
    },
    {
        "question": "Was braucht man nicht, um einen Caesar-Salat zuzubereiten?",
        "answer_1": "Römersalat",
        "answer_2": "Ananas",
        "answer_3": "Caesar-Dressing",
        "answer_4": "Croutons",
        "right_answer": 2
    },
    {
        "question": "Was braucht man nicht, um eine einfache Gemüsepfanne zuzubereiten?",
        "answer_1": "Zucchini",
        "answer_2": "Paprika",
        "answer_3": "Hühnchen",
        "answer_4": "Käsefondue",
        "right_answer": 4
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion]; // holen uns die Nullte Farge

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection){
    let question = questions[currentQuestion];
    let selectedquestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`;


    if (selectedquestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}


function nextQestion() {
    currentQuestion++; // variable um eins erhöhen (von 0 auf 1)

    document.getElementById('next-button').disabled = true;
 
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}