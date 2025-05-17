const totalLevels = 32;
const levelsGrid = document.getElementById("levelsGrid");
const practiceInterface = document.getElementById("practiceInterface");
const levelTitle = document.getElementById("levelTitle");
const levelDescription = document.getElementById("levelDescription");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentLevel = 1;

// Optional: You can set and remember the highest visited level
let unlockedLevel = parseInt(localStorage.getItem("htmlUnlockedLevel")) || 1;

const levelNotes = [
  "Welcome to Level 1. Learn the basics of HTML tags.",
  "Level 2: Learn about headings and paragraphs.",
  "Level 3: Understanding lists - ordered and unordered.",
  "Level 4: Add images using the <img> tag.",
  "Level 5: Create links with the <a> tag.",
  // Fill up to 32 or loop through this for placeholder notes
];

function getLevelNote(level) {
  return (
    levelNotes[level - 1] ||
    `This is Level ${level}. Practice your HTML skills here.`
  );
}

function renderLevels() {
  levelsGrid.innerHTML = "";
  for (let i = 1; i <= totalLevels; i++) {
    const btn = document.createElement("div");
    btn.classList.add("level-btn");
    btn.textContent = `Level ${i}`;
    btn.addEventListener("click", () => startLevel(i));
    levelsGrid.appendChild(btn);
  }
}

function startLevel(level) {
  currentLevel = level;
  levelTitle.textContent = `Level ${level}`;
  levelDescription.textContent = getLevelNote(level);
  practiceInterface.classList.remove("hidden");
  levelsGrid.classList.add("hidden");

  // Optional: Track max level visited
  if (level > unlockedLevel) {
    unlockedLevel = level;
    localStorage.setItem("htmlUnlockedLevel", unlockedLevel);
  }
}

prevBtn.onclick = () => {
  if (currentLevel > 1) {
    startLevel(currentLevel - 1);
  } else {
    showAlert("You are already on the first level.");
  }
};

nextBtn.onclick = () => {
  if (currentLevel < totalLevels) {
    startLevel(currentLevel + 1);
  } else {
    showAlert("You are on the last level.");
  }
};

function showAlert(message) {
  document.getElementById("alertMessage").textContent = message;
  document.getElementById("customAlert").classList.remove("hidden");
}

function hideAlert() {
  document.getElementById("customAlert").classList.add("hidden");
}

renderLevels();
