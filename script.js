const collapseBtn = document.getElementById('collapseBtn');
const mobileDropdown = document.getElementById('mobileDropdown');

collapseBtn.addEventListener('click', () => {
  mobileDropdown.classList.toggle('hidden');
});

// Close dropdown when clicking outside
window.addEventListener('click', (event) => {
  if (!collapseBtn.contains(event.target) && !mobileDropdown.contains(event.target)) {
    mobileDropdown.classList.add('hidden');
  }
});