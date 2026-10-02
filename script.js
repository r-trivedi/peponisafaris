// Shrink the nav into a rounded bar once the page is scrolled
const header = document.querySelector('.site-header');
const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 40);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// Fade sections in as they enter the viewport
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Toggle both ways so the fade replays each time a section re-enters the screen
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  items.forEach((el) => observer.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-visible'));
}

// Placeholder form handler: shows a message but does not send the details anywhere yet
const guideForm = document.getElementById('guide-form');
if (guideForm) {
  guideForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = guideForm.elements['first-name'].value.trim();
    guideForm.querySelector('.form-status').textContent = `Thanks, ${name}. Your Safari Guide is on its way.`;
    guideForm.reset();
  });
}