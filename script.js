// Skill expand/collapse
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});

// Simple form handler
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formNote').innerText = 'Thank you! Your message has been sent.';
  this.reset();
});

document.getElementById('clearBtn').addEventListener('click', function(){
  document.getElementById('contactForm').reset();
  document.getElementById('formNote').innerText = '';
});