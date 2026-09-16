document.addEventListener("DOMContentLoaded", function () {
  initNav();
  initThemeToggle();
  initEventFilter();
  initCarousel();
  initScrollReveal();
  initContactForm();
});

/* Mobile navigation toggle */
function initNav() {
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });
}

/* Dark / light mode toggle, persisted in localStorage */
function initThemeToggle() {
  var themeToggle = document.getElementById("themeToggle");
  var root = document.documentElement;

  function syncIcon() {
    var isDark = root.getAttribute("data-theme") === "dark";
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  }

  syncIcon();

  themeToggle.addEventListener("click", function () {
    var isDark = root.getAttribute("data-theme") === "dark";
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    syncIcon();
  });
}

/* Filter event cards by category */
function initEventFilter() {
  var filterBar = document.getElementById("filterBar");
  var cards = document.querySelectorAll("#eventsGrid .card");

  filterBar.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;

    filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    var filter = btn.getAttribute("data-filter");
    cards.forEach(function (card) {
      var matches = filter === "all" || card.getAttribute("data-category") === filter;
      card.classList.toggle("hidden", !matches);
    });
  });
}

/* Gallery image/content carousel */
function initCarousel() {
  var track = document.getElementById("carouselTrack");
  var slides = track.querySelectorAll(".carousel-slide");
  var prevBtn = document.getElementById("prevSlide");
  var nextBtn = document.getElementById("nextSlide");
  var dotsWrap = document.getElementById("carouselDots");
  var current = 0;
  var autoPlayTimer;

  slides.forEach(function (_, index) {
    var dot = document.createElement("button");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to slide " + (index + 1));
    dot.addEventListener("click", function () {
      goToSlide(index);
    });
    dotsWrap.appendChild(dot);
  });

  var dots = dotsWrap.querySelectorAll(".dot");

  function goToSlide(index) {
    current = (index + slides.length) % slides.length;
    track.style.transform = "translateX(-" + current * 100 + "%)";
    dots.forEach(function (dot, i) {
      dot.classList.toggle("active", i === current);
    });
  }

  function restartAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(function () {
      goToSlide(current + 1);
    }, 4000);
  }

  prevBtn.addEventListener("click", function () {
    goToSlide(current - 1);
    restartAutoPlay();
  });

  nextBtn.addEventListener("click", function () {
    goToSlide(current + 1);
    restartAutoPlay();
  });

  restartAutoPlay();
}

/* Fade-in-up animation for elements as they scroll into view */
function initScrollReveal() {
  var items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach(function (item) {
      item.classList.add("visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach(function (item) {
    observer.observe(item);
  });
}

/* Contact form: front-end validation, no real submission */
function initContactForm() {
  var form = document.getElementById("contactForm");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var status = document.getElementById("formStatus");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateName() {
    var value = nameInput.value.trim();
    if (value.length < 2) {
      nameInput.classList.add("invalid");
      nameInput.classList.remove("valid");
      nameError.textContent = "Please enter your full name (min 2 characters).";
      return false;
    }
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
    nameError.textContent = "";
    return true;
  }

  function validateEmail() {
    var value = emailInput.value.trim();
    if (!emailPattern.test(value)) {
      emailInput.classList.add("invalid");
      emailInput.classList.remove("valid");
      emailError.textContent = "Please enter a valid email address.";
      return false;
    }
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
    emailError.textContent = "";
    return true;
  }

  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var isNameValid = validateName();
    var isEmailValid = validateEmail();

    if (isNameValid && isEmailValid) {
      status.textContent = "Thanks! This is a demo form — no data was sent.";
      status.classList.add("success");
      form.reset();
      nameInput.classList.remove("valid");
      emailInput.classList.remove("valid");
    } else {
      status.textContent = "Please fix the errors above before submitting.";
      status.classList.remove("success");
    }
  });
}
