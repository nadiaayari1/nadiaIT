const items = [
  {
    title: "Photography",
    category: "Photography",
    description: "Photography helps me capture emotion, details, and perspective.",
    image: "images/camera.jpg"
  },
  {
    title: "Cars",
    category: "Cars",
    description: "I enjoy car photography and going to car events.",
    image: "images/gt3rs.jpg"
  },
  {
    title: "Travel",
    category: "Travel",
    description: "Travel gives me new experiences and stories to photograph.",
    image: "images/costa-rica.jpg"
  },
  {
    title: "Vlogging",
    category: "Photography",
    description: "I like creating digital storytelling through videos and photos.",
    image: "images/vlogging.jpg"
  }
];

function filterItems() {
  const filter = document.getElementById("category-filter");
  const container = document.getElementById("items-container");
  const count = document.getElementById("results-count");

  if (!filter || !container || !count) {
    return;
  }

  const selected = filter.value;

  const filteredItems = selected === ""
    ? items
    : items.filter(item => item.category === selected);

  container.innerHTML = "";

  filteredItems.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
  });

  count.textContent = filteredItems.length + " item(s) showing";
}

function showMessage() {
  const message = document.getElementById("message");

  if (message) {
    message.textContent = "Thank you for visiting my website!";
  }
}

window.onload = filterItems;
