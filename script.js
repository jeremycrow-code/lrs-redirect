// 1. Core Light/Dark Theme Engine
function toggleMode() {
  const isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// 2. Multi-App Interface Initializer
document.addEventListener('DOMContentLoaded', () => {
  // Bind Theme Toggle Event
  const toggleBtn = document.getElementById('modeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMode);
  }

  // Evaluate Saved Theme Preference
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
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
