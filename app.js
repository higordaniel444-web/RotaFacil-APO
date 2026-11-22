// Adiciona campos de produto dinamicamente sem recarregar a página.
const addButton = document.getElementById('adicionar');
const items = document.getElementById('itens');
if (addButton && items) {
  addButton.addEventListener('click', () => {
    const copy = items.querySelector('.item-frete').cloneNode(true);
    copy.querySelector('select').value = '';
    copy.querySelector('input').value = '1';
    items.appendChild(copy);
  });
  items.addEventListener('click', (event) => {
    if (event.target.closest('.remover') && items.querySelectorAll('.item-frete').length > 1) {
      event.target.closest('.item-frete').remove();
    }
  });
}
