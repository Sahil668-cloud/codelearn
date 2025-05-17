// const courses = [
//   {
//     name: "HTML",
//     icon: "https://img.icons8.com/color/96/html-5--v1.png",
//     desc: "Learn the foundation of web pages with structured content."
//   },
//   {
//     name: "CSS",
//     icon: "https://img.icons8.com/color/96/css3.png",
//     desc: "Style your web pages with layouts, colors, and animations."
//   },
//   {
//     name: "JavaScript",
//     icon: "https://img.icons8.com/color/96/javascript--v1.png",
//     desc: "Make your websites interactive using JavaScript."
//   },
//   {
//     name: "PHP",
//     icon: "https://img.icons8.com/officel/96/php-logo.png",
//     desc: "Build dynamic websites with backend server scripting."
//   },
//   {
//     name: "Python",
//     icon: "https://img.icons8.com/color/96/python--v1.png",
//     desc: "Use Python for scripting, automation, and backend logic."
//   },
//   {
//     name: "React",
//     icon: "https://img.icons8.com/color/96/react-native.png",
//     desc: "Develop fast, modern interfaces with this JavaScript library."
//   }
// ];

// const cardWrapper = document.getElementById("cardWrapper");

// courses.forEach(course => {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   card.innerHTML = `
//       <img src="${course.icon}" alt="${course.name}" />
//       <h3>${course.name}</h3>
//       <p>${course.desc}</p>
//       <button>Start Practice</button>
//     `;
//   cardWrapper.appendChild(card);
// });


const courses = [
  {
    name: "HTML",
    icon: "https://img.icons8.com/color/96/html-5--v1.png",
    desc: "Learn the foundation of web pages with structured content."
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/color/96/css3.png",
    desc: "Style your web pages with layouts, colors, and animations."
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/96/javascript--v1.png",
    desc: "Make your websites interactive using JavaScript."
  },
  {
    name: "PHP",
    icon: "https://img.icons8.com/officel/96/php-logo.png",
    desc: "Build dynamic websites with backend server scripting."
  },
  {
    name: "Python",
    icon: "https://img.icons8.com/color/96/python--v1.png",
    desc: "Use Python for scripting, automation, and backend logic."
  },
  {
    name: "React",
    icon: "https://img.icons8.com/color/96/react-native.png",
    desc: "Develop fast, modern interfaces with this JavaScript library."
  }
];

const courseCards = document.getElementById("courseCards");
const searchInput = document.getElementById("searchInput");

function displayCourses(filteredCourses) {
  courseCards.innerHTML = "";
  filteredCourses.forEach(course => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${course.icon}" alt="${course.name}">
      <div class="card-body">
        <h3>${course.name}</h3>
      </div>
    `;
    courseCards.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm)
  );
  displayCourses(filtered);
});

displayCourses(courses);


