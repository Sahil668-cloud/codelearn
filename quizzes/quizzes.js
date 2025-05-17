const quizzes = [
    {
        course: "HTML",
        title: "HTML Basics Quiz",
        desc: "Test your knowledge of HTML structure and tags.",
        img: "https://via.placeholder.com/300x150?text=HTML+Quiz"
    },
    {
        course: "HTML",
        title: "Forms & Tables",
        desc: "Quiz about form elements and table structure.",
        img: "https://via.placeholder.com/300x150?text=HTML+Forms"
    },
    {
        course: "CSS",
        title: "CSS Styling",
        desc: "Quiz on selectors, colors, and units.",
        img: "https://via.placeholder.com/300x150?text=CSS+Quiz"
    },
    {
        course: "CSS",
        title: "Flexbox & Grid",
        desc: "Check your understanding of layout systems.",
        img: "https://via.placeholder.com/300x150?text=Flexbox+Grid"
    },
    {
        course: "JavaScript",
        title: "JavaScript Basics",
        desc: "Test variables, functions, and loops.",
        img: "https://via.placeholder.com/300x150?text=JS+Basics"
    },
    {
        course: "JavaScript",
        title: "DOM & Events",
        desc: "Quiz on DOM manipulation and event handling.",
        img: "https://via.placeholder.com/300x150?text=DOM+Quiz"
    }
];

const quizSections = document.getElementById("quizSections");
const searchInput = document.getElementById("searchInput");

function renderQuizzes(filter = "") {
    quizSections.innerHTML = "";

    const grouped = quizzes
        .filter(q => q.title.toLowerCase().includes(filter.toLowerCase()))
        .reduce((acc, quiz) => {
            if (!acc[quiz.course]) acc[quiz.course] = [];
            acc[quiz.course].push(quiz);
            return acc;
        }, {});

    Object.entries(grouped).forEach(([course, courseQuizzes]) => {
        const section = document.createElement("div");
        section.classList.add("section");
        section.innerHTML = `
        <h2>${course} Quizzes</h2>
        <div class="quizzes-grid">
          ${courseQuizzes.map(q => `
            <div class="quiz-card">
              <img src="${q.img}" alt="${q.title}" />
              <h3>${q.title}</h3>
              <p>${q.desc}</p>
              <button>Start Quiz</button>
            </div>
          `).join("")}
        </div>
      `;
        quizSections.appendChild(section);
    });
}

searchInput.addEventListener("input", (e) => {
    renderQuizzes(e.target.value);
});

renderQuizzes();
