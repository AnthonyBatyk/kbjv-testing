document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const cards = document.querySelectorAll('.food-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const name = card.getAttribute('data-text').toLowerCase().trim();
      if (name.includes(query)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});