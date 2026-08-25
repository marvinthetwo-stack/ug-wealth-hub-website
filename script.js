// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('open');
}

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav').classList.remove('open');
  });
});

// Sample plans data
const plans = [
  { amount: 'UGX 10,000', description: 'Start small' },
  { amount: 'UGX 25,000', description: 'Build steady' },
  { amount: 'UGX 50,000', description: 'Grow faster' },
  { amount: 'UGX 100,000', description: 'Scale up' },
  { amount: 'UGX 250,000', description: 'Premium' },
  { amount: 'UGX 500,000', description: 'Elite' }
];

// Populate plans grid
function populatePlans() {
  const planGrid = document.getElementById('planGrid');
  planGrid.innerHTML = '';
  
  plans.forEach((plan, index) => {
    const planCard = document.createElement('div');
    planCard.className = 'plan';
    planCard.innerHTML = `
      <div class="amount">${plan.amount}</div>
      <p>${plan.description}</p>
      <button onclick="selectPlan(${index}, '${plan.amount}')">Select Plan</button>
    `;
    planGrid.appendChild(planCard);
  });
}

// Select a plan (demo functionality)
function selectPlan(index, amount) {
  document.getElementById('selectedPlan').textContent = amount;
  showToast(`Selected plan: ${amount}`);
}

// Show toast notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  populatePlans();
});