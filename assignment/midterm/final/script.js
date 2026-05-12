// ================================
// Nadia Ayari Final Project
// script.js
// ================================

// Contact page button message
function showMessage() {
  const message = document.getElementById("message");

  message.textContent = "Thank you for visiting my website!";
  message.style.marginTop = "15px";
  message.style.fontWeight = "bold";
  message.style.color = "#3965E6";
}

// Fade-in effect when page loads
window.addEventListener("load", () => {
  const sections = document.querySelectorAll(".section-box, .card");

  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease";

    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 150);
  });
});

// Hover effect for cards
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.03)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Console message
console.log("Nadia Ayari Final Project Loaded");
