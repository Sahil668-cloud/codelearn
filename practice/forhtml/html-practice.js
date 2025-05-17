const levelData = [
  {
    title: "Introduction to HTML",
    description: "Install VS Code",
    htmlCode: `<h2>Welcome to HTML!</h2><p class="para">You're all set!</p>`,
    cssCode: `h2 { color: #00ccff; } .para { font-style: italic; }`,
  },
  {
    title: "Introduction to HTML",
    description: "Understand what <strong>HTML</strong> is and its purpose in <strong>Web Development</strong>."
  },

  {
    title: "Installing VSCode",
    description: "Installing <strong>Code Editer</strong> for learning"
  },
  {
    title: "HTML Document Structure",
    description: "Learn the basic structure of an HTML document."
  },
  // ... Add levels 4 to 49 here in the same format
  {
    title: "Final Review Quiz",
    description: "Test your knowledge of everything you've learned in HTML."
  },
];

// Add dummy data up to 50 levels (for simplicity)
// while (levelData.length < 50) {
//   const i = levelData.length + 1;
//   levelData.push({
//     title: `Level ${i} Title`,
//     description: `This is the description for Level ${i}.`,
//     htmlCode: `<p>HTML content for level ${i}.</p>`,
//     cssCode: `p { color: #0161cf; }`,
//   });
// }

// const levelButtonsContainer = document.getElementById("level-buttons");
// const levelContent = document.getElementById("level-content");
// const levelTitle = document.getElementById("level-title");
// const levelDescription = document.getElementById("level-description");
// const htmlCodeBlock = document.getElementById("html-code");
// const cssCodeBlock = document.getElementById("css-code");
// const prevBtn = document.getElementById("prev-btn");
// const nextBtn = document.getElementById("next-btn");

// let currentLevel = 1;

// function renderLevels() {
//   levelData.forEach((level, index) => {
//     const levelBox = document.createElement("div");
//     levelBox.className = "level-box";
//     levelBox.addEventListener("click", () => startLevel(index + 1));

//     const levelNum = document.createElement("div");
//     levelNum.className = "level-number";
//     levelNum.textContent = `Level ${index + 1}`;

//     const levelDesc = document.createElement("div");
//     levelDesc.className = "level-description";
//     levelDesc.textContent = level.title;

//     levelBox.appendChild(levelNum);
//     levelBox.appendChild(levelDesc);
//     levelButtonsContainer.appendChild(levelBox);
//   });
// }

// function startLevel(levelNum) {
//   currentLevel = levelNum;
//   levelButtonsContainer.classList.add("hidden");
//   levelContent.classList.remove("hidden");
//   updateLevelView();
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// function updateLevelView() {
//   const level = levelData[currentLevel - 1];
//   levelTitle.textContent = `Level ${currentLevel}: ${level.title}`;
//   levelDescription.textContent = level.description;
//   // htmlCodeBlock.textContent = level.htmlCode;
//   // cssCodeBlock.textContent = level.cssCode;
//   document.getElementById("html-output").innerHTML = level.htmlCode;
//   document.getElementById("level-style").textContent = level.cssCode;
//   const htmlOutput = document.getElementById("html-output");
//   const cssOutput = document.getElementById("level-style");

//   htmlOutput.innerHTML = level.htmlCode; // Insert real HTML
//   cssOutput.textContent = level.cssCode; // Inject working CSS
// }

// prevBtn.addEventListener("click", () => {
//   if (currentLevel > 1) {
//     currentLevel--;
//     updateLevelView();
//   }
// });

// nextBtn.addEventListener("click", () => {
//   if (currentLevel < levelData.length) {
//     currentLevel++;
//     updateLevelView();
//   }
// });

// renderLevels();

function levels() {
  let div = document.querySelector("#level-buttons");
  for (let i = 1; i < levelData.length; i++) {
    // let level = levelData[i];
    const level = levelData[i];
    console.log(level);
    div.insertAdjacentHTML(
      "beforeend",
      `<a href="levels/level${i}.html" class="level-box" onclick="startLevel(${i + 1})">
        <div class="level-number">Level ${i}</div>
        <span class="level-title">${level.title}</span><br>
        <span class="level-description">${level.description}</span>
      </div>`
    );
  }
}
levels();
