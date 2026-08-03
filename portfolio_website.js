// ============================================
// Terminal typing effect (hero widget)
// ============================================
(function () {
  const output = document.getElementById('typed-output');
  if (!output) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const lines = [
    'languages   = ["Python", "SQL", "Java", "C"]',
    'analytics   = ["Pandas", "NumPy", "Matplotlib", "ML"]',
    'web         = ["HTML", "CSS", "JavaScript", "PHP"]',
    'learning    = ["Power BI", "Excel", "Generative AI"]',
    'status      = "open to work"'
  ];

  if (prefersReduced) {
    output.textContent = lines.join('\n');
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  let displayed = [];

  function typeStep() {
    if (lineIndex >= lines.length) {
      // brief pause, then restart
      setTimeout(() => {
        displayed = [];
        lineIndex = 0;
        charIndex = 0;
        output.textContent = '';
        typeStep();
      }, 2200);
      return;
    }

    const currentLine = lines[lineIndex];

    if (charIndex <= currentLine.length) {
      const partial = displayed.concat(currentLine.slice(0, charIndex)).join('\n');
      output.textContent = partial;
      charIndex++;
      setTimeout(typeStep, 22 + Math.random() * 20);
    } else {
      displayed.push(currentLine);
      lineIndex++;
      charIndex = 0;
      setTimeout(typeStep, 260);
    }
  }

  typeStep();
})();

// ============================================
// Scroll reveal
// ============================================
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((el) => observer.observe(el));
})();

// ============================================
// Close mobile nav after a link is tapped
// ============================================
(function () {
  const toggle = document.getElementById('nav-toggle');
  const links = document.querySelectorAll('.nav-links a');
  if (!toggle || !links.length) return;

  links.forEach((link) => {
    link.addEventListener('click', () => {
      toggle.checked = false;
    });
  });
})();