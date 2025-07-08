
const questions = [
      {
        question: "Who holds the record for the most F1 World Championships?",
        options: ["Sebastian Vettel", "Lewis Hamilton", "Michael Schumacher", "Ayrton Senna"],
        answer: "Lewis Hamilton"
      },
      {
        question: "Which team won the 2021 F1 Constructors' Championship?",
        options: ["Red Bull Racing", "Mercedes", "Ferrari", "McLaren"],
        answer: "Mercedes"
      },
      {
        question: "In MotoGP, what does the 'GP' stand for?",
        options: ["Grand Power", "Global Prix", "Grand Prix", "Gears and Power"],
        answer: "Grand Prix"
      },
      {
        question: "Which driver tragically died at Imola in 1994?",
        options: ["Alain Prost", "Rubens Barrichello", "Ayrton Senna", "Niki Lauda"],
        answer: "Ayrton Senna"
      },
      {
        question: "Which circuit hosts the Monaco Grand Prix?",
        options: ["Monza", "Spa", "Monte Carlo", "Suzuka"],
        answer: "Monte Carlo"
      },
      {
        question: "Which company supplies tires to F1 as of 2025?",
        options: ["Michelin", "Pirelli", "Bridgestone", "Goodyear"],
        answer: "Pirelli"
      },
      {
        question: "Which racing series features only electric cars?",
        options: ["MotoGP", "WRC", "Formula E", "IndyCar"],
        answer: "Formula E"
      },
      {
        question: "How many laps are there in a standard F1 race?",
        options: ["Fixed 70", "Depends on track length", "Always 60", "50 minimum"],
        answer: "Depends on track length"
      },
      {
        question: "Who is the youngest ever F1 race winner?",
        options: ["Sebastian Vettel", "Lewis Hamilton", "Max Verstappen", "Fernando Alonso"],
        answer: "Max Verstappen"
      },
      {
        question: "Which team has the most Constructors’ Championships?",
        options: ["McLaren", "Mercedes", "Red Bull", "Ferrari"],
        answer: "Ferrari"
      }
    ];

    let currentQ = 0;
    let score = 0;
    let selectedOption = null;

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");
    const scoreBox = document.getElementById("score-box");

    function loadQuestion() {
      const q = questions[currentQ];
      questionEl.textContent = `Q${currentQ + 1}: ${q.question}`;
      optionsEl.innerHTML = "";
      selectedOption = null;

      q.options.forEach(opt => {
        const div = document.createElement("div");
        div.className = "option";
        div.textContent = opt;
        div.onclick = () => selectOption(div, opt);
        optionsEl.appendChild(div);
      });
    }

    function selectOption(element, selected) {
      const allOptions = document.querySelectorAll(".option");
      allOptions.forEach(opt => opt.classList.remove("selected"));
      element.classList.add("selected");
      selectedOption = selected;
    }

    nextBtn.addEventListener("click", () => {
      if (!selectedOption) {
        alert("Please select an answer before continuing.");
        return;
      }

      if (selectedOption === questions[currentQ].answer) {
        score++;
      }

      currentQ++;

      if (currentQ < questions.length) {
        loadQuestion();
      } else {
        showScore();
      }
    });

    function showScore() {
      questionEl.style.display = "none";
      optionsEl.style.display = "none";
      nextBtn.style.display = "none";
      scoreBox.classList.remove("hidden");
      scoreBox.textContent = `✅ You scored ${score} out of ${questions.length}!`;
    }


    loadQuestion();