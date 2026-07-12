// LRS Portal Interactive Obelisk Node Controls
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.node-tab');
  const panels = document.querySelectorAll('.node-panel');

  if (tabs.length > 0 && panels.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetNode = tab.getAttribute('data-node');

        // Deactivate all matching tabs
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });

        // Hide all data containers
        panels.forEach(p => {
          p.classList.remove('active');
        });

        // Activate targeted structures
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
