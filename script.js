/**
 * Portfolio Interactive Scripts
 * Handles modal controls, smooth animations, and progress bar effects.
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Bio Modal Interaction
  // -------------------------------------------------------------------------
  const avatarBtn = document.getElementById('avatarBtn');
  const bioModal = document.getElementById('bioModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openModal() {
    bioModal.classList.add('is-active');
    bioModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    modalCloseBtn.focus();
  }

  function closeModal() {
    bioModal.classList.remove('is-active');
    bioModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    avatarBtn.focus();
  }

  if (avatarBtn) {
    avatarBtn.addEventListener('click', openModal);
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Close when clicking on backdrop
  if (bioModal) {
    bioModal.addEventListener('click', (e) => {
      if (e.target === bioModal) {
        closeModal();
      }
    });
  }

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bioModal && bioModal.classList.contains('is-active')) {
      closeModal();
    }
  });

  // -------------------------------------------------------------------------
  // 2. Animated Progress Bar & Number Counter (1.4K Milestone)
  // -------------------------------------------------------------------------
  const progressFill = document.querySelector('.progress-fill');
  const currentCountEl = document.querySelector('.current-count');

  if (progressFill) {
    // Smooth fill to ~93.3% (1.4K / 1.5K)
    setTimeout(() => {
      progressFill.style.width = '93.33%';
    }, 250);
  }

  if (currentCountEl) {
    const targetVal = 1400;
    const duration = 1200; // ms
    const startTime = performance.now();

    function updateCounter(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * targetVal);

      if (progress < 1) {
        currentCountEl.textContent = (current / 1000).toFixed(1) + 'K';
        requestAnimationFrame(updateCounter);
      } else {
        currentCountEl.textContent = '1.4K';
      }
    }

    requestAnimationFrame(updateCounter);
  }

  // -------------------------------------------------------------------------
  // 3. One-Time Typewriter Narrative Effect (No Loop)
  // -------------------------------------------------------------------------
  const typewriterEl = document.getElementById('typewriterText');
  const cursorEl = document.getElementById('typewriterCursor');

  if (typewriterEl) {
    const storyText = "I'm an editor who started my journey from zero, and now I'm at 1.4k subscribers! I'm very happy with how far we've come, so I made this site to share the custom extensions I built along with the apps and presets I use in my edits.";
    let charIndex = 0;
    const typeSpeed = 26; // ms per character

    function typeCharacter() {
      if (charIndex < storyText.length) {
        typewriterEl.textContent += storyText.charAt(charIndex);
        charIndex++;
        setTimeout(typeCharacter, typeSpeed);
      } else {
        // Typing finished: keep cursor softly blinking for 4 seconds then stabilize
        setTimeout(() => {
          if (cursorEl) cursorEl.style.opacity = '0.4';
        }, 4000);
      }
    }

    // Start typing shortly after page load
    setTimeout(typeCharacter, 450);
  }

  // -------------------------------------------------------------------------
  // 4. Cinematic Background Zoom Navigation Transition
  // -------------------------------------------------------------------------
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href.endsWith('.html') || href === 'index.html' || href === 'extensions.html' || href === 'ffx.html')) {
      link.addEventListener('click', (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || link.target === '_blank') return;
        
        e.preventDefault();
        document.body.classList.add('is-navigating');
        
        // Let the background zoom in smoothly before navigating
        setTimeout(() => {
          window.location.href = href;
        }, 360);
      });
    }
  });
});
