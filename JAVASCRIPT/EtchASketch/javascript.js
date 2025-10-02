const container = document.getElementById('container');
const resizeBtn = document.getElementById('resizeBtn');

createGrid(16);

resizeBtn.addEventListener('click', ()=>{
    const input = prompt('Quanti quadrati per lato? (1–100)', '16');
    if (input===null) return;
    const n = parseInt(input,10);
    if (isNaN(n)|| n<1 || n>100){
        alert('Inserisci un numero intero valido tra 1 e 100.');
        return;
    }
    createGrid(n)
})
function createGrid(n) {
  container.innerHTML = '';
  container.style.setProperty('--cells', n);
  const total = n * n;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < total; i++) {
    const sq = document.createElement('div');
    sq.className = 'square';
    sq.dataset.darkness= '0';
    frag.appendChild(sq);
  }
  container.appendChild(frag);
}
/*
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
*/

container.addEventListener('pointerover', (e) => {
  const target = e.target;
  if (!target.classList || !target.classList.contains('square')) return;
  let level= parseInt(target.dataset.darkness, 10);
  if (level<10){
    level++;
    target.dataset.darkness= level;
    target.style.opacity= level/10;
  }

});