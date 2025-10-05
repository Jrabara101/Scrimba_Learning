// Create confetti elements
const colors = ['#ff0a54', '#ff477e', '#ff85a1', '#fbb1b1', '#f9bec7'];
const confettiCount = 80;

for (let i = 0; i < confettiCount; i++) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.animationDuration = 3 + Math.random() * 3 + 's';
  confetti.style.animationDelay = Math.random() * 5 + 's';
  confetti.style.width = confetti.style.height = 5 + Math.random() * 10 + 'px';
  document.body.appendChild(confetti);
}

// Create balloons
const balloonCount = 10;

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.animationDuration = 5 + Math.random() * 5 + 's';
  balloon.style.animationDelay = Math.random() * 10 + 's';
  balloon.style.width = 30 + Math.random() * 20 + 'px';
  balloon.style.height = 40 + Math.random() * 40 + 'px';
  document.body.appendChild(balloon);

  // Remove balloon after animation
  balloon.addEventListener('animationend', () => balloon.remove());
}

setInterval(createBalloon, 1000);

// Optional: Add click sound on gift hover or click
const gifts = document.querySelectorAll('.gift-img');
const popSound = new Audio('sounds/pop.mp3'); // Add a pop.mp3 sound file to your sounds folder

gifts.forEach(gift => {
  gift.addEventListener('mouseenter', () => popSound.play());
});
