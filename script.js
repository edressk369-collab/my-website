// Star rating & simple UX interactions
const stars = document.querySelectorAll('.rating i');
const thanks = document.getElementById('thanks');
const btn = document.getElementById('submitReview');
let currentRating = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    currentRating = parseInt(star.dataset.value);
    stars.forEach(s => {
      s.classList.toggle('active', parseInt(s.dataset.value) <= currentRating);
      s.classList.remove('fa-regular');
      s.classList.add('fa-solid');
    });
  });
});

btn.addEventListener('click', () => {
  if(currentRating === 0) { alert('Please select a star rating first.'); return; }
  thanks.hidden = false;
  // In a real site you would send this with fetch() to your backend or a form service.
});