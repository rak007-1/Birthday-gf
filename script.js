 // Handle spacebar press to extinguish candles
   let candlesBlown = false;

   document.addEventListener('keydown', function(event) {
       if (event.code === 'Space') {
           event.preventDefault();
           
           if (!candlesBlown) {
               // Blow out all candles
               const flames = document.querySelectorAll('.flame');
               flames.forEach((flame, index) => {
                   setTimeout(() => {
                       flame.classList.add('extinguished');
                   }, index * 100); // Stagger the extinguishing
               });
               
               candlesBlown = true;
               
               // Update instruction text
               const instruction = document.querySelector('.instruction');
               instruction.innerHTML = '🎉 Happy Birthday! You blew out all the candles! 🎉';
               instruction.style.background = 'rgba(255, 215, 0, 0.3)';
               
               // Add celebration effect
               createConfetti();
           } else {
               // Relight the candles
               const flames = document.querySelectorAll('.flame');
               flames.forEach((flame, index) => {
                   setTimeout(() => {
                       flame.classList.remove('extinguished');
                   }, index * 100);
               });
               
               candlesBlown = false;
               
               // Reset instruction text
               const instruction = document.querySelector('.instruction');
               instruction.innerHTML = '💫 Press the SPACE bar to blow out the candles! 💫';
               instruction.style.background = 'rgba(255,255,255,0.7)';
           }
       }
   });

   // Create confetti effect when candles are blown out
   function createConfetti() {
       const colors = ['#ff69b4', '#ffd700', '#ff6b35', '#6f42c1', '#74b9ff'];
       
       for (let i = 0; i < 50; i++) {
           setTimeout(() => {
               const confetti = document.createElement('div');
               confetti.style.position = 'fixed';
               confetti.style.left = Math.random() * 100 + 'vw';
               confetti.style.top = '-10px';
               confetti.style.width = '10px';
               confetti.style.height = '10px';
               confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
               confetti.style.borderRadius = '50%';
               confetti.style.pointerEvents = 'none';
               confetti.style.zIndex = '1000';
               confetti.style.animation = 'confettiFall 3s linear forwards';
               
               document.body.appendChild(confetti);
               
               // Remove confetti after animation
               setTimeout(() => {
                   confetti.remove();
               }, 3000);
           }, i * 50);
       }
   }

   // Add confetti animation
   const style = document.createElement('style');
   style.textContent = `
       @keyframes confettiFall {
           to {
               transform: translateY(100vh) rotate(720deg);
               opacity: 0;
           }
       }
   `;
   document.head.appendChild(style);

   // Add more floating hearts periodically
   setInterval(() => {
const heart = document.createElement('div');
heart.className = 'heart';
heart.innerHTML = ['💖', '💕', '💗', '💝'][Math.floor(Math.random() * 4)];
heart.style.left = Math.random() * 100 + '%';
heart.style.animationDelay = '0s';
document.body.appendChild(heart);

setTimeout(() => {
   heart.remove();
}, 8000);
}, 2000);