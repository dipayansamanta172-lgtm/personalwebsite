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
