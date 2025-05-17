const courses = [
    { name: "HTML", progress: 80 },
    { name: "CSS", progress: 65 },
    { name: "JavaScript", progress: 45 },
    { name: "PHP", progress: 20 },
    { name: "Python", progress: 55 },
    { name: "React", progress: 10 }
];

const progressContainer = document.getElementById("progressContainer");

courses.forEach(course => {
    const card = document.createElement("div");
    card.className = "progress-card";
    card.innerHTML = `
      <div class="progress-title">${course.name}</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${course.progress}%;"></div>
      </div>
      <div class="progress-percent">${course.progress}% completed</div>
    `;
    progressContainer.appendChild(card);
});
