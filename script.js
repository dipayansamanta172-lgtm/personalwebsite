const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');
const threshold = 18;

const setScrolledNav = () => {
  navbar.classList.toggle('scrolled', window.scrollY > threshold);
};

const setActiveLink = () => {
  const currentPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const id = section.getAttribute('id');
    const start = section.offsetTop;
    const end = start + section.offsetHeight;
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (!link) {
      return;
    }

    link.classList.toggle('active', currentPosition >= start && currentPosition < end);
  });
};

const onScroll = () => {
  setScrolledNav();
  setActiveLink();
};

window.addEventListener('scroll', onScroll, { passive: true });
links.forEach((link) => {
  link.addEventListener('click', () => {
    links.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

onScroll();

const revealTargets = document.querySelectorAll(
  '#about, #skills, #projects, #timeline, #education, #languages, #about h2, #skills h2, #projects h2, #timeline h2, #education h2, #languages h2, #skills .skill-card, #projects .project-card, #timeline .timeline-card, #education .project-card, #languages .project-card'
);

revealTargets.forEach((element) => element.classList.add('reveal'));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: '0px 0px -6% 0px' }
);

revealTargets.forEach((element) => revealObserver.observe(element));

