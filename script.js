const resultText = document.getElementById('resultText');
const coin = document.getElementById('coin');
const shadow = document.getElementById('shadow');

let hasFliped = false;

function flipCoin() {
  const result = Math.random() < 0.5 ? 'heads' : 'tails';
  
  if(!hasFliped) {
    hasFliped = true;
    shadow.style.display = 'block';
  }

  resultText.textContent = result === 'heads' ? 'Heads' : 'Tails';
  coin.classList.add('flip');
  setTimeout(() => {
    coin.className = `coin ${result}`;
  }, 150); 

  setTimeout(() => {
    coin.classList.remove('flip');
  }, 600); 
}

document.getElementById('flipBtn').addEventListener('click', flipCoin);
coin.addEventListener('click', flipCoin);
