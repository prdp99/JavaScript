const startButton = document.querySelector("#start-btn");
const nextButton = document.querySelector("#next-btn");
const questionContainerElement = document.querySelector("#question-container");
const questionElement = document.querySelector("#question");
const answerButtonsElement = document.querySelector("#answer-buttons");

let shuffledQuestions, currectQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currectQuestionIndex++;
  setNextQuestion();
});
function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currectQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currectQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currectQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
const questions = [
  {
    question: "When was Python programming language created ?",
    answers: [
      {
        text: "1990",
        correct: false,
      },
      {
        text: "1991",
        correct: true,
      },
      {
        text: "1992",
        correct: false,
      },
      {
        text: "1993",
        correct: false,
      },
    ],
  },

  {
    question: " 1 Mega byte is equal to ",
    answers: [
      {
        text: " 1000 Kilo bytes",
        correct: false,
      },
      {
        text: "1020 Kilo bytes",
        correct: false,
      },
      {
        text: "1024 Kilo bytes",
        correct: true,
      },
      {
        text: "1030 Kilo bytes",
        correct: false,
      },
    ],
  },
  {
    question: "Which of the following is not a programming language?",
    answers: [
      {
        text: "TypeScript",
        correct: false,
      },
      {
        text: "Python",
        correct: false,
      },
      {
        text: "Anaconda",
        correct: true,
      },
      {
        text: "Java",
        correct: false,
      },
    ],
  },
  {
    question: "C++ was developed by ___",
    answers: [
      {
        text: "Thomas Kushz",
        correct: false,
      },
      {
        text: "John Kemney",
        correct: false,
      },
      {
        text: "Bjarne Stroutstrup",
        correct: true,
      },
      {
        text: "James Goling",
        correct: false,
      },
    ],
  },
];
