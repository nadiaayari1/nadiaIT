const items = [
  {
    name: "Street Photography",
    category: "Photography",
    description: "I enjoy capturing candid moments and city scenes with cinematic editing."
  },
  {
    name: "Film Cameras",
    category: "Photography",
    description: "I like experimenting with film-style color, composition, and storytelling."
  },
  {
    name: "Porsche GT3 RS",
    category: "Cars",
    description: "One of my favorite cars because of its aggressive design and track-focused details."
  },
  {
    name: "Cars and Coffee",
    category: "Cars",
    description: "I enjoy going to car meets and photographing unique vehicles."
  },
  {
    name: "Costa Rica Adventures",
    category: "Travel",
    description: "I like exploring rainforests, waterfalls, beaches, and adventure activities."
  },
  {
    name: "Travel Vlogging",
    category: "Travel",
    description: "I enjoy creating cinematic travel videos with my action camera."
  }
];

function renderItems(list) {
  const container = document.getElementById("items-container");

  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML =
      "<h3>" + list[i].name + "</h3>" +
      "<p>" + list[i].description + "</p>" +
      "<span class='item-tag'>" + list[i].category + "</span>";

    container.appendChild(card);
  }

  document.getElementById("results-count").textContent =
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
