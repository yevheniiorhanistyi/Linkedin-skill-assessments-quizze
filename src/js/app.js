import questionsJS from './questionJavaScript.js';
import MySQL from './questionMySQL.js';
import nodeJS from './questionNodeJS.js';

// animation of starting blocks 

const button = document.querySelector('.btn-back'),
    content = document.querySelector('.assessments__intro-page'),
    modal = document.querySelector('.modal'),
    testWrapper = document.querySelector('.test-wrapper'),
    result = document.querySelector('.result');

window.addEventListener('DOMContentLoaded', showIntroModal);

function showIntroModal() {
    if (document.querySelector('.modal')) {
        modal.classList.add('blockAnimation');
    }
}

function showTestInfo() {
    setTimeout(() => {
        content.classList.add('blockAnimation');
        button.classList.add('showBtn');
    }, 400)
}

function hideTestInfo() {
    content.classList.remove('blockAnimation');
    button.classList.remove('showBtn');
}

// declaring variables and creating objects with information 

const allBtnLinks = document.querySelectorAll('.item-language');

let arrOfRandomNumbers = generateRandomNumbers(0, 30),
    count = 0,
    btnNext = document.querySelector('.btn-next'),
    headerTitle,
    currentLang,
    allInput,
    correctSum = 0;

const arrLanguages = {
    'Node.js': {
        language: nodeJS,
        title: 'Node.js',
        img: 'img/icons/icon-HTML.png'
    },
    'JavaScript': {
        language: questionsJS,
        title: 'JavaScript',
        img: 'img/icons/icon-js.png'
    },
    'MySQL': {
        language: MySQL,
        title: 'MySQL',
        img: 'img/icons/icon-MySql.png'
    }
},
    arrOfUserAnswers = [];

// adding an event listener to links

allBtnLinks.forEach(link => {
    link.addEventListener('click', () => {

        const currentData = link.getAttribute('data-language');
        currentLang = arrLanguages[currentData].language;
        localStorage.setItem('currentLang', currentData);

        modal.classList.remove('blockAnimation');
        showTestInfo();

        headerTitle = `${arrLanguages[currentData].title}`;
        document.querySelector('.assessments__intro-title').innerHTML = `${headerTitle} assessment`;
        document.querySelector('.assessments__intro-icon').src = `${arrLanguages[currentData].img}`;

        document.querySelector('.btn-start').addEventListener('click', startTest);
        button.addEventListener('click', () => {
            hideTestInfo();
            setTimeout(() => {
                showIntroModal();
            }, 400)
        });
    });
});

// generating 15 random numbers from 0 to the length of the language array

function generateRandomNumbers(from, to) {
    let n = 15;
    let result = [...Array(to - from + 1).keys()].map(i => i + from)
        .reduce((arr, elt) => (arr.splice(Math.random() * (arr.length + 1), 0, elt), arr), [])
        .slice(0, n);
    return result;
};

function startTest() {
    hideTestInfo();
    arrOfRandomNumbers = generateRandomNumbers(0, currentLang.length - 1);
    showQuestion(currentLang, count);
    setTimeout(() => {
        testWrapper.classList.add('active-test');
        button.style.display = 'none';
    }, 1000);

    allInput = document.querySelectorAll('.answer-list__item');
    btnNext.addEventListener('click', showNextQuestion);
    document.querySelector('.btn-again').addEventListener('click', () => {
        window.location.reload();
    });
    document.querySelector('.answer-list').addEventListener('click', changeFocus);
};

// changing the focus of inputs

function changeFocus(e) {
    let currentElem = e.target,
        currentRadio = currentElem.querySelector('input');

    clearInputs();
    if (!currentElem.classList.contains('answer-list')) {
        currentElem.classList.add('answer-list__item--active');
        currentRadio.checked = true;
        btnNext.classList.remove('btn-disabled');
        btnNext.disabled = false;
    } else {
        btnNext.classList.add('btn-disabled');
        btnNext.disabled = true;
    }
}

function clearInputs() {
    allInput.forEach(item => {
        item.classList.remove('answer-list__item--active');
        item.querySelector('input').checked = false;
    });
}

function checkCorrect() {
    allInput.forEach(item => {
        if (item.querySelector('input').checked) {
            let itemId = +item.querySelector('input').getAttribute('id'),
                arrIndex = arrOfRandomNumbers[count - 1];
            itemId === currentLang[arrIndex].correct ? correctSum++ : correctSum += 0;
            arrOfUserAnswers.push(itemId);
        }
    });
}


function showNextQuestion() {
    checkCorrect();
    if (count < 15) {
        testWrapper.classList.remove('active-test');
        setTimeout(() => {
            testWrapper.scrollTo({ top: 0 });
            showQuestion(currentLang, count);
            clearInputs();
            testWrapper.classList.add('active-test');
        }, 400);
    } else {
        testWrapper.classList.remove('active-test');
        setTimeout(() => {
            result.classList.add('show-result');
        }, 400);
        showResult();
    }

    btnNext.classList.add('btn-disabled');
    btnNext.disabled = true;
}

function showQuestion(language, i) {
    try {
        let numOfArr = arrOfRandomNumbers[i],
            questionTitle = document.querySelector('.question__title'),
            questionLabel = document.querySelectorAll('.question-label'),
            questionNumber = document.querySelector('.question-number'),
            multicode = document.querySelector('.multicode'),
            image = document.querySelector('.questionImg'),
            progress = document.querySelector('.progress');

        localStorage.setItem('arrOfRandomNumbers', JSON.stringify(arrOfRandomNumbers));
        document.querySelector('.test-header__title').innerHTML = headerTitle;
        questionTitle.innerHTML = `${language[numOfArr].question}`;

        language[numOfArr].multicode ? multicode.innerHTML = `<pre><code>${language[numOfArr].multicode}</code></pre>` :
            multicode.innerHTML = '';

        language[numOfArr].img ? image.innerHTML = `<img class="img-table" src="${language[numOfArr].img}" alt="Table">` :
            image.innerHTML = '';

        questionLabel.forEach((item, index) => {
            item.innerHTML = `<pre><code>${language[numOfArr].answers[index]}</code></pre>`
        });

        questionNumber.innerHTML = `Q${count + 1}/15`;
        progress.value = Math.ceil(count / 15 * 100);
        count++;
    } catch {
        alert('Sorry, an error has occurred!');
        window.location.reload();
    }

};

function showResult() {
    let percentOfCorrect = Math.floor((100 * correctSum) / 15),
        arrAnswers = JSON.stringify(arrOfUserAnswers);

    document.querySelector('.current-answers').innerHTML = `${correctSum} of 15`;
    document.querySelector('.percent').innerHTML = `${percentOfCorrect}%`;
    localStorage.setItem('answers', arrAnswers);
}

// Show result page
// '/linkedin-skill-assessments-quizze/result.html'

if (window.location.pathname == '/Linkedin-skill-assessments-quizze/result.html' && localStorage.getItem('answers')) {
    let arrAnswers = JSON.parse(localStorage.getItem('answers')),
        arrQuestions = JSON.parse(localStorage.getItem('arrOfRandomNumbers'));

    currentLang = arrLanguages[localStorage.getItem('currentLang')].language;

    for (let i = 0; i < arrQuestions.length; i++) {
        let wrapperResult = document.getElementById(`q${i}`);

        wrapperResult.querySelector('.question__title').innerHTML = `${currentLang[arrQuestions[i]].question}`

        if (currentLang[arrQuestions[i]].multicode) {
            wrapperResult.querySelector('.multicode').innerHTML = `<pre><code>${currentLang[arrQuestions[i]].multicode}</code></pre>`;
        }

        wrapperResult.querySelectorAll('.question-label').forEach((item, index) => {
            item.innerHTML = `<pre><code>${currentLang[arrQuestions[i]].answers[index]}</code></pre>`
        });

        if (currentLang[arrQuestions[i]].correct == arrAnswers[i]) {
            wrapperResult.querySelector(`#q${i}-${arrAnswers[i]}`).classList.add('correct-selected');
            wrapperResult.querySelector('.correct-selected').querySelector('span')
                .innerHTML = `<img class="img-result icon-correct" style="width: 24px;height:auto" src="img/icons/correct.png"
                alt="Correct">`;
        } else {
            wrapperResult.querySelector(`#q${i}-${currentLang[arrQuestions[i]].correct}`).classList.add('correct');
            wrapperResult.querySelector(`#q${i}-${arrAnswers[i]}`).classList.add('wrong');
            wrapperResult.querySelector('.wrong').querySelector('span')
                .innerHTML = `<img class="img-result icon-wrong" style="width: 24px;height:auto" src="img/icons/cross.png"
                alt="Wrong">`;
        }
    }
}