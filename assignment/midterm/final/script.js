const items = [
  {
    name: "Costa Rica Photography",
    category: "Photography",
    image: "costa-rica.jpg",
    description: "Travel photography from my solo trip through Costa Rica."
  },
  {
    name: "Window Project",
    category: "Photography",
    image: "window-project.jpg",
    description: "A photography series exploring movement and perspective through windows."
  },
  {
    name: "Car Photography",
    category: "Cars",
    image: "cars.jpg",
    description: "Photos from car meets and automotive events."
  },
  {
    name: "GT3 RS Content",
    category: "Cars",
    image: "gt3rs.jpg",
    description: "Automotive photography focused on Porsche GT3 RS models."
  },
  {
    name: "Travel Vlogging",
    category: "Travel",
    image: "vlogging.jpg",
    description: "Creating cinematic travel videos and social media content."
  },
  {
    name: "Rainforest Adventures",
    category: "Travel",
    image: "rainforest.jpg",
    description: "Exploring rainforests, waterfalls, and outdoor adventures."
  }
];

function renderItems(list) {
  const container = document.getElementById("items-container");

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");

    card.className = "item-card";

    card.innerHTML =
      "<img src='" + list[i].image + "' alt='" + list[i].name + "' class='card-image'>" +
      "<h3>" + list[i].name + "</h3>" +
      "<p>" + list[i].description + "</p>" +
      "<span class='item-tag'>" + list[i].category + "</span>";

    container.appendChild(card);
  }

  document.getElementById("result-count").textContent =
    list.length + " items shown";
}

function filterItems(category) {
  switch (category) {
    case "":
      renderItems(items);
      break;

    case "Photography":
      const filtered1 = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Photography") {
          filtered1.push(items[i]);
        }
      }

      renderItems(filtered1);
      break;

    case "Cars":
      const filtered2 = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Cars") {
          filtered2.push(items[i]);
        }
      }

      renderItems(filtered2);
      break;

    case "Travel":
      const filtered3 = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Travel") {
          filtered3.push(items[i]);
        }
      }

      renderItems(filtered3);
      break;

    default:
      renderItems(items);
      break;
  }
}

filterItems("");
