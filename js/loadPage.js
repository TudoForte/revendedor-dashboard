// Cria a constante 'load' e seleciona o body
const load = document.querySelector('body');
// Adiciona a classe 'loaded' ao body depois de 3245ms
setTimeout(function(){
  load.classList.add('loaded');
}, 650);