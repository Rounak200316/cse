const questions = [
    { 
      question: "What is AI?", 
      options: ["Artificial Intelligence", "Actual Intelligence", "Automated Intelligence"], 
      answer: "Artificial Intelligence", 
      difficulty: 1
    },
    // Add more questions with options and answers, along with difficulty levels
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    
    questionElement.innerHTML = questions[currentQuestionIndex].question;
    
    optionsElement.innerHTML = '';
    questions[currentQuestionIndex].options.forEach(option => {
      optionsElement.innerHTML += <input type="radio" name="option" value="${option}">${option}<br></br></input>;
    });
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (!selectedOption) {
      alert('Please select an option.');
      return;
    }
  
    if (selectedOption.value === questions[currentQuestionIndex].answer) {
      score++;
      if (questions[currentQuestionIndex].difficulty < 3) {
        questions[currentQuestionIndex].difficulty++;
      }
    } else {
      if (questions[currentQuestionIndex].difficulty > 1) {
        questions[currentQuestionIndex].difficulty--;
      }
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } 
    else {
      showResult();
    }
  }
  
  function showResult() {
    const quizContainer = document.querySelector('.quiz-container');
    const resultContainer = document.querySelector('.result-container');
    const resultElement = document.getElementById('result');
    
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
  
    resultElement.innerHTML = "You scored ${score} outof ${questions.length}";
  }