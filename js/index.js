// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Volunteer Modal
const volunteerBtn = document.getElementById("volunteer-btn");
const footerVolunteerBtn = document.getElementById("footer-volunteer-btn");
const volunteerModal = document.getElementById("volunteerModal");
const closeModal = document.querySelector(".close-modal");

volunteerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  volunteerModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

footerVolunteerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  volunteerModal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeModal.addEventListener("click", () => {
  volunteerModal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === volunteerModal) {
    volunteerModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Form Submissions
document.getElementById("serviceForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your service request! We will contact you shortly.");
  this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href") !== "#") {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  });
});

// Sticky header on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});
const formElem = document.getElementById("volunteerForm");

formElem.addEventListener("submit", function (e) {
  e.preventDefault();
  const formAPI =
    "https://docs.google.com/forms/d/e/1FAIpQLScTlMJQMCRjVBf1BzwtChzNDXOiOHtrXYfsyvmLdxfDUYhYCA/formResponse";

  const formData = new FormData();
  formData.append("entry.76550698", document.getElementById("vol-name").value);
  formData.append(
    "entry.124399292",
    document.getElementById("vol-email").value
  );
  formData.append(
    "entry.1417944368",
    document.getElementById("vol-phone").value
  );
  formData.append(
    "entry.559063717",
    document.getElementById("vol-location").value
  );
  formData.append(
    "entry.1591502383",
    document.getElementById("vol-availability").value
  );
  formData.append(
    "entry.568059133",
    document.getElementById("vol-transport").value
  );
  formData.append(
    "entry.1180833287",
    document.getElementById("vol-experience").value
  );

  //Send data to server (you'll need a backend for this)
  fetch(formAPI, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  })
    .then(() => {
      alert("Thank you for volunteering! We will contact you soon.");
      volunteerModal.style.display = "none";
      document.body.style.overflow = "auto";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error submitting your form. Please try again.");
    });
  this.reset();
});
