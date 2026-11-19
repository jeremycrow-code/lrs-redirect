// 1. Core Light/Dark Theme Engine
function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-mode', isLight);
  document.body.classList.toggle('dark-mode', !isLight);

  const toggleBtn = document.getElementById('modeToggle');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-pressed', String(isLight));
  }
}

function getSavedTheme() {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  } catch (e) {
    return 'dark';
  }
}

function toggleMode() {
  const nextTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
  applyTheme(nextTheme);
  try {
    localStorage.setItem('theme', nextTheme);
  } catch (e) {
    // Ignore storage errors in restricted browsing contexts
  }
}

// Apply saved theme immediately on script execution
applyTheme(getSavedTheme());

// 2. Multi-App Interface Initializer
document.addEventListener('DOMContentLoaded', () => {
  // Bind Theme Toggle Event
  const toggleBtn = document.getElementById('modeToggle');
  if (toggleBtn && !toggleBtn.hasAttribute('onclick')) {
    toggleBtn.addEventListener('click', toggleMode);
  }

  // Bind LRS Interactive Obelisk Tabs
  const tabs = document.querySelectorAll('.node-tab');
  const panels = document.querySelectorAll('.node-panel');

  if (tabs.length > 0 && panels.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetNode = tab.getAttribute('data-node');

        // Reset all tabs to inactive state
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });

        // Hide all information panels
        panels.forEach(p => {
          p.classList.remove('active');
        });

        // Activate selected tab and matching panel
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const activePanel = document.getElementById(`node-${targetNode}`);
        if (activePanel) {
          activePanel.classList.add('active');
        }
      });
    });
  }
});
