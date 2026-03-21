/**
 * Ring infographic animation: staggered ring reveals + metric counter.
 */

export function initRingAnimation() {
  const section = document.querySelector('.reach');
  if (!section) return;

  const rings = section.querySelectorAll('.ring');
  const counters = section.querySelectorAll('[data-count]');
  const callouts = section.querySelectorAll('.ring-callout');

  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          animateRings(rings);
          setTimeout(() => animateCounters(counters), 600);
          setTimeout(() => animateCallouts(callouts), 1200);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
}

function animateRings(rings) {
  rings.forEach((ring, i) => {
    setTimeout(() => {
      ring.classList.add('ring--visible');
    }, i * 200);
  });
}

function animateCounters(counters) {
  counters.forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1400;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

function animateCallouts(callouts) {
  callouts.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('ring-callout--visible');
    }, i * 150);
  });
}
