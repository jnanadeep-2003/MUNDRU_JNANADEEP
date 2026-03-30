// =========================
// MOBILE NAVIGATION TOGGLE
// This opens and closes the menu on small screens.
// =========================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close the mobile menu when a link is clicked
const navItems = document.querySelectorAll(".nav-links a");
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// =========================
// FOOTER YEAR
// Adds the current year automatically.
// =========================
document.getElementById("year").textContent = new Date().getFullYear();

// =========================
// CONTACT FORM VALIDATION
// Checks that the user fills all fields correctly.
// =========================
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Remove old message styles before checking again
  formMessage.className = "form-message";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Very basic email pattern for beginner-friendly validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    showMessage("Please enter your name.", "error");
    return;
  }

  if (!emailPattern.test(email)) {
    showMessage("Please enter a valid email address.", "error");
    return;
  }

  if (message.length < 10) {
    showMessage("Message should be at least 10 characters long.", "error");
    return;
  }

  // If everything is valid, show a success message
  showMessage("Thank you! Your message has been sent successfully.", "success");
  contactForm.reset();
});

// Helper function to show form messages
function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.classList.add(type);
}

// =========================
// FADE-IN ANIMATION ON SCROLL
// Makes sections appear smoothly when they enter the screen.
// =========================
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});
