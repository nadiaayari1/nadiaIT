const interests = [
  {
    title: "Film Photography",
    category: "photography",
    description: "I enjoy shooting film and editing photos in Lightroom."
  },

  {
    title: "Costa Rica Travel",
    category: "travel",
    description: "I like adventure travel and documenting trips."
  },

  {
    title: "Gym Training",
    category: "fitness",
    description: "I enjoy strength training and StairMaster cardio."
  },

  {
    title: "Car Photography",
    category: "photography",
    description: "I photograph cars and attend car events."
  },

  {
    title: "Surfing",
    category: "travel",
    description: "I recently started surfing in Costa Rica."
  },

  {
    title: "Core Workouts",
    category: "fitness",
    description: "I like training core and mobility exercises."
  }
];

function filterItems(category) {
  let filtered = [];

  switch(category) {
    case "photography":
      filtered = interests.filter(item => item.category === "photography");
      break;

    case "travel":
      filtered = interests.filter(item => item.category === "travel");
      break;

    case "fitness":
      filtered = interests.filter(item => item.category === "fitness");
      break;

    default:
      filtered = interests;
  }

  displayItems(filtered);
}

function displayItems(items) {
  const results = document.getElementById("results");

  results.innerHTML = "";

  items.forEach(item => {
    results.innerHTML += `
      <div class="interest-card">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
  });
}

displayItems(interests);
