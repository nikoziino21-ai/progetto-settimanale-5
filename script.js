document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");
  const themeToggle = document.getElementById("theme-toggle");
  const openModalBtn = document.getElementById("open-modal-btn");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const modal = document.getElementById("quote-modal");
  const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

  const revealElements = document.querySelectorAll(
    "#services h2, #services .card, #team h2, #team .team-card"
  );
  revealElements.forEach((element) => element.classList.add("reveal-ready"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (themeIcon) {
        if (document.body.classList.contains("dark")) {
          themeIcon.classList.remove("fa-moon");
          themeIcon.classList.add("fa-sun");
        } else {
          themeIcon.classList.remove("fa-sun");
          themeIcon.classList.add("fa-moon");
        }
      }
    });
  }

  if (openModalBtn && modal && closeModalBtn) {
    openModalBtn.addEventListener("click", () => {
      modal.classList.add("active");
    });

    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }
});
