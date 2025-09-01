const tela1 = document.getElementById('tela1');
const tela2 = document.getElementById('tela2');
const btnAbrir = document.getElementById('btnAbrir');
const btnVoltar = document.getElementById('btnVoltar');

btnAbrir.addEventListener('click', ()=>{
  tela1.classList.remove('active');
  tela2.classList.add('active');
  btnVoltar.style.display='inline-flex';
});

btnVoltar.addEventListener('click', ()=>{
  tela2.classList.remove('active');
  tela1.classList.add('active');
  btnVoltar.style.display='none';
});


