/**
 * DEV SAINI - PERSONAL PORTFOLIO INTERACTIVITY SCRIPT
 * 1st Year B.Tech CSE | JECRC University, Jaipur
 *
 * Handles:
 * - Mobile navigation menu toggle and auto-collapse
 * - Active section highlighting on scroll (ScrollSpy)
 * - Light / Dark mode theme toggle with localStorage persistence
 * - Contact form validation & honest client feedback
 * - Project preview modal
 * - Back to top floating button
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================
  // 1. DOM ELEMENT REFERENCES
  // ==========================================================
  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelectorAll('.nav-link');
  const themeToggle = document.getElementById('themeToggle');
  const backToTopBtn = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const sections = document.querySelectorAll('section[id]');
  
  // Modal Elements
  const projectModal = document.getElementById('projectModal');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectDesc = document.getElementById('modalProjectDesc');
  const modalClose = document.getElementById('modalClose');
  const modalDismiss = document.getElementById('modalDismiss');
  const previewButtons = document.querySelectorAll('.preview-btn');

  // ==========================================================
  // 2. THEME TOGGLE (Dark / Light Mode)
  // ==========================================================
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // ==========================================================
  // 3. MOBILE MENU TOGGLE
  // ==========================================================
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ==========================================================
  // 4. SCROLLSPY (Highlight Active Section in Navigation)
  // ==========================================================
  const highlightActiveSection = () => {
    const scrollPosition = window.scrollY + 120; // Offset for sticky navbar height

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Handle Navbar Scrolled styling & Back to Top button
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', highlightActiveSection, { passive: true });
  highlightActiveSection(); // Run once on load

  // ==========================================================
  // 5. SMOOTH SCROLL BACK TO TOP
  // ==========================================================
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ==========================================================
  // 6. CONTACT FORM HANDLING & VALIDATION
  // ==========================================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('invalid');
        isValid = false;
      } else {
        nameInput.classList.remove('invalid');
      }

      // Validate Email with regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('invalid');
        isValid = false;
      } else {
        emailInput.classList.remove('invalid');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageInput.classList.add('invalid');
        isValid = false;
      } else {
        messageInput.classList.remove('invalid');
      }

      if (!isValid) {
        return;
      }

      const senderName = encodeURIComponent(nameInput.value.trim());
      const senderEmail = encodeURIComponent(emailInput.value.trim());
      const senderMsg = encodeURIComponent(messageInput.value.trim());
      const mailtoUrl = `mailto:?subject=Message%20from%20${senderName}%20via%20Portfolio&body=${senderMsg}%0A%0AFrom:%20${senderName}%20(${senderEmail})`;

      // Display clear feedback
      formStatus.style.display = 'block';
      formStatus.className = 'form-status info';
      formStatus.innerHTML = `
        <strong>Thank you, ${nameInput.value.trim()}!</strong><br>
        Your message details have been validated. Since this portfolio is a front-end website without an active backend email server, you can directly launch your email client with this message drafted:
        <div style="margin-top: 0.75rem;">
          <a href="${mailtoUrl}" class="btn btn-primary btn-sm" style="display: inline-flex;">
            Launch Email Draft
          </a>
        </div>
      `;

      // Reset fields
      contactForm.reset();
    });

    // Remove invalid styling on input
    ['name', 'email', 'message'].forEach(id => {
      const input = document.getElementById(id);
      if (input) {
        input.addEventListener('input', () => {
          input.classList.remove('invalid');
        });
      }
    });
  }

  // ==========================================================
  // 7. PROJECT PREVIEW MODAL
  // ==========================================================
  const openModal = (title, description) => {
    if (projectModal && modalProjectTitle && modalProjectDesc) {
      modalProjectTitle.textContent = title;
      modalProjectDesc.textContent = description;
      projectModal.classList.add('active');
      projectModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (projectModal) {
      projectModal.classList.remove('active');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  previewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const projectName = btn.getAttribute('data-project') || 'Project Preview';
      let projectDetail = 'Created as a practical web development project focusing on website structure, responsive layout, and user-friendly design.';
      if (projectName === 'Running Website') {
        projectDetail = 'The Running Website is a practical project created to explore website layout, navigation structure, and athletic/fitness web UI design using HTML, CSS, and JavaScript.';
      }
      openModal(projectName, projectDetail);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalDismiss) modalDismiss.addEventListener('click', closeModal);
  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeModal();
    }
  });

});
