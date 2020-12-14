  
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
      question: 'In Billard, what term is synonym giving the ball "side-spin"?',
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
  score: 0
};

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

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)