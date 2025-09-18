const modalCard = document.querySelector('.POP-UP');
const botaoTransacao = document.querySelector('.nova_transação');
const modalFechar = document.querySelector('.botão_fechar');

function criar_popup() {
  modalCard.classList.toggle('abrir');
}

botaoTransacao.addEventListener('click', criar_popup);
modalFechar.addEventListener('click', criar_popup);