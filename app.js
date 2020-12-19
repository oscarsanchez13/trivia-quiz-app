  
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'In what year did the Dodgers last win the World Series?',
      answers: [
        '2006',
        '1988',
        '2020',
        '2017'
      ],
      correctAnswer: '2020'
    },
    {
      question: 'What game genre is Fortnite?',
      answers: [
        'Survival',
        'Fighting',
        'Life Simulator',
        'Battle Royale'
      ],
      correctAnswer: 'Battle Royale'
    },
    {
      question: 'What team is Hugo Sanchez famously known for playing for?',
      answers: [
        'Barcelona',
        'Real Madrid',
        'Chelsea',
        'Ajax'
      ],
      correctAnswer: 'Real Madrid'
    },
    {
      question: 'In Billards, what term is synonym giving the ball "side-spin"?',
      answers: [
        'English',
        'Updog',
        'Ligma',
        'Kakashi'
      ],
      correctAnswer: 'English'
    },
    {
      question: 'In Easports FIFA, what is the name of the game-mode where the user can create his own team from players around the world?',
      answers: [
        'My Squad',
        'Ultimate Team',
        'Fantasy Club',
        'The Champtions'
      ],
      correctAnswer: 'Ultimate Team'
    },
    {
      question: 'Who is the main protagonist in MINECRAFT?',
      answers: [
        'Steve',
        'Homer Simpson',
        'Deku',
        'Veemon'
      ],
      correctAnswer: 'Steve'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  lastAnswer: ""
};

// IMAGE STORE STRUCTURE

const images = [
  'images/dodgers.jpg',
  'images/fortnite.jpg',
  'images/hugo-sanchez.jpg',
  'images/billard.jpg',
  'images/fifa.jpg',
  'images/minecraft.jpg'
  ];

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/
function generateStartScreen() {
  return `
    <section class="start-screen">
      <div class="group">
        <div class="item">
          <img src="images/trivia-logo.jpg" class="rounded-circle" alt="trivia logo">
        </div>
        <div class="item">
          <p>There is no better way to test your knowledge than with this Trivia Quiz App! I’ve compiled some fun questions to quiz your friends. Or go over them by yourself to see how up-to-date you are on Videogames and Sports.</p>     
        </div>        
      </div>
      <form id="js-quiz-form">                
        <button type="button" id="start" class="center">Start Quiz</button>
      </form>
    </section>`
  }

  function generateQuestionScreen() {
    let currentQuestion = store.questions[store.questionNumber];
    let currentImage = images[store.questionNumber];        
    return `
      <section class="start-screen">
        <div class="group">
          <div class="item">
            <img src="${currentImage}" class="rounded-circle" alt="trivia logo">
          </div>
          <div class="item">
           <h2>${currentQuestion.question}</h2>      
          <br>
          <form id="js-quiz-form">
          <ul>
            <li>
              <input type = "radio" name="answer" value="${currentQuestion.answers[0]}" checked>
              <label> ${currentQuestion.answers[0]} </label>       
            </li>
            <li>
              <input type = "radio" name="answer" value="${currentQuestion.answers[1]}">
              <label> ${currentQuestion.answers[1]} </label>    
            </li>
            <li>
              <input type = "radio" name="answer" value="${currentQuestion.answers[2]}">
              <label> ${currentQuestion.answers[2]} </label>
            </li>
            <li>
              <input type = "radio" name="answer" value="${currentQuestion.answers[3]}">
              <label> ${currentQuestion.answers[3]} </label>        
            </li>
          </form>
          </div>       
        </div>
        <button type="button" id="submitAnswer" class="center">Submit Answer</button>  
      </section>`  
  }

function generateQuestionNumberAndScore() {
  return `
    <ul class="question-and-score">
      <li id="question-number">
        Question Number: ${store.questionNumber + 1}/${store.questions.length}
      </li>
      <li id="score">
        Score: ${store.score}/${store.questions.length}
      </li>
    </ul>
  `;
}

function generateCorrectFeedback () {
  return `
      <section class="start-screen">
        <div class="group">
          <div class="item green">
            <h2>Correct!</h2>
          </div>
        </div>
        <button type="button" id="nextQuestion" class="center">Next Question</button>
      </section>`;
    
}

function generateIncorrectFeedback () {
  return `
    <section class="start-screen">
      <div class="item">
        <h2 class="red">Incorrect!</h2>
        <br>
        <p>The correct answer was ${store.questions[store.questionNumber].correctAnswer}</p>
      </div>
      <br>
      <button type="button" id="nextQuestion" class="center">Next Question</button>
    </section>    
  `;
  }

function generateResultScreen () {
  return `
    <section class="start-screen">
        <div class="group">
          <div class="item">
            <h2>Thanks For Playing</h2>
          </div>
        </div>
        <button type="button" id="restart" class="center">Restart Quiz</button>
      </section>
  `
}

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/
function render() {
  console.log ('"render" ran');
  $('.wrapper').empty();
  $('.current-question-and-score').empty();
  if(store.quizStarted === false) {
    $('.wrapper').append(generateStartScreen());
    $('#start').click(handleStartQuiz)
  } else if (store.questionNumber === store.questions.length) {
    $('.wrapper').append(generateResultScreen())
    $('#restart').click(handleRestartQuiz)
  }
  else if (store.lastAnswer === "") {
    $('.wrapper').append(generateQuestionScreen());
    $('.current-question-and-score').append(generateQuestionNumberAndScore);
    $('#submitAnswer').click(handleSubmitAnswer)
  } 
  else {
    $('.current-question-and-score').append(generateQuestionNumberAndScore);
    if (store.lastAnswer === store.questions[store.questionNumber].correctAnswer) {
      $('.wrapper').append(generateCorrectFeedback())
    } else {
      $('.wrapper').append(generateIncorrectFeedback())
    }
    $("#nextQuestion").click(handleNextQuestion)
  }
}

$(render);

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/
function handleStartQuiz () {
  console.log ('"handleStartQuiz" ran')
  event.preventDefault();
  store.quizStarted = true;
  render();
}

function handleSubmitAnswer () {
  console.log ('"handleSubmitAnswer" ran')
  event.preventDefault();
  store.lastAnswer = $('input:checked').val();  
  let rightAnswer = store.questions[store.questionNumber].correctAnswer;
  
  if (rightAnswer === store.lastAnswer) {
    store.score ++;  
  }
  render();
}

function handleNextQuestion () {
  console.log ('"handleNextQuestion" ran')
  event.preventDefault();  
  store.questionNumber += 1;
  store.lastAnswer = "";
  render();
}

function handleRestartQuiz () {
  console.log ('"handleRestartQuiz" ran')
  event.preventDefault();
  store.lastAnswer = ""
  store.quizStarted = false
  store.questionNumber = 0  
  render();
}

// These functions handle events (submit, click, etc)
function handleQuiz () {
  render();
  handleStartQuiz();
  handleSubmitAnswer();
  handleNextQuestion();
  handleSeeResults();
  handleRestartQuiz();
}