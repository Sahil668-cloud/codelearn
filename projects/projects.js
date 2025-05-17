const projects = [
    {
        course: "HTML",
        title: "Personal Portfolio",
        desc: "Build a static personal portfolio using HTML only.",
        img: "https://via.placeholder.com/300x150?text=HTML+Project"
    },
    {
        course: "CSS",
        title: "Responsive Grid Layout",
        desc: "Create a responsive layout using CSS grid and flexbox.",
        img: "https://via.placeholder.com/300x150?text=CSS+Project"
    },
    {
        course: "JavaScript",
        title: "To-Do App",
        desc: "Build a dynamic task manager using JavaScript.",
        img: "https://via.placeholder.com/300x150?text=JS+Project"
    },
    {
        course: "Python",
        title: "Flask Web App",
        desc: "Create a simple web app using Flask in Python.",
        img: "https://via.placeholder.com/300x150?text=Python+Project"
    },
    {
        course: "PHP",
        title: "Login System",
        desc: "Build a basic login and registration system.",
        img: "https://via.placeholder.com/300x150?text=PHP+Project"
    },
    {
        course: "React",
        title: "Weather App",
        desc: "Make a weather app using React and OpenWeather API.",
        img: "https://via.placeholder.com/300x150?text=React+Project"
    }
];

const searchInput = document.getElementById("searchInput");
const projectSections = document.getElementById("projectSections");

function renderProjects(filter = "") {
    projectSections.innerHTML = "";

    const grouped = projects
        .filter(p => p.title.toLowerCase().includes(filter.toLowerCase()))
        .reduce((acc, project) => {
            if (!acc[project.course]) acc[project.course] = [];
            acc[project.course].push(project);
            return acc;
        }, {});

    Object.entries(grouped).forEach(([course, courseProjects]) => {
        const section = document.createElement("div");
        section.classList.add("section");
        section.innerHTML = `
        <h2>${course} Projects</h2>
        <div class="projects-grid">
          ${courseProjects
                .map(
                    p => `
            <div class="project-card">
              <img src="${p.img}" alt="${p.title}" />
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
              <button>Start Project</button>
            </div>
          `
                )
                .join("")}
        </div>
      `;
        projectSections.appendChild(section);
    });
}

searchInput.addEventListener("input", (e) => {
    renderProjects(e.target.value);
});

// Initial render
renderProjects();
