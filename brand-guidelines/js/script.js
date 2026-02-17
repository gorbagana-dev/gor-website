// Copy color to clipboard
function copyColor(hex) {
  navigator.clipboard.writeText(hex).then(() => {
    // Show feedback
    const toast = document.createElement('div');
    toast.textContent = `Copied ${hex}!`;
    toast.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #00FF00;
      color: #0d3d24;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      font-weight: 600;
      z-index: 1000;
      box-shadow: 0 0 20px rgba(0, 255, 0, 0.6);
      animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
  });
}

// Add animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Add glow effect on hover for buttons
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', function() {
    this.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.5)';
  });
  btn.addEventListener('mouseleave', function() {
    this.style.textShadow = 'none';
  });
});
