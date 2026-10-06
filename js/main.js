/* =========================================================
   Earlene Agestha Sugeng · Portfolio
   Small vanilla JavaScript file, no libraries:
   1. Reveal elements with a fade-up when they scroll into view
   2. Highlight the current section in the header nav
   3. Scroll progress bar + header shadow
   4. Current year in the footer
   ========================================================= */

// ---------- 1. Scroll reveal ----------
// IntersectionObserver tells us when an element enters the screen,
// which is much lighter than checking positions on every scroll event.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ---------- 2. Active link in the header ----------
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('#home, #about, #skills, #projects, #contact');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id);
      });
    });
  },
  // a section counts as "current" when it crosses the middle of the screen
  { rootMargin: '-45% 0px -50% 0px' }
);

sections.forEach((section) => navObserver.observe(section));

// ---------- 3. Progress bar + header shadow ----------
const header = document.getElementById('siteHeader');
const progress = document.getElementById('scrollProgress');
let ticking = false;

function updateOnScroll() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${maxScroll > 0 ? scrollTop / maxScroll : 0})`;
  header.classList.toggle('is-scrolled', scrollTop > 10);
  ticking = false;
}

// requestAnimationFrame limits the work to once per frame, so scrolling stays smooth
window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  },
  { passive: true }
);
updateOnScroll();

// ---------- 4. Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();
