let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produtoId) {
  // Lógica para adicionar o produto ao carrinho
  let produto;

  // Encontre o produto pelo ID 
  switch (produtoId) {
    case 1:
      produto = {
        id: 1,
        nome: 'Melancia 1Kg',
        preco: 2.99
      };
      break;
      
    case 2:
      produto = {
        id: 2,
        nome: 'Goiaba 1Kg',
        preco: 6.99
      };
      break;
    case 3:
      produto = {
        id: 3,
        nome: 'Banana 1Kg',
        preco: 5.99
      };
      break;
    case 4:
      produto = {
        id: 4,
        nome: 'Abacaxi 1kg',
        preco: 6.99
      };
      break;
    default:
      return;
  }

  carrinho.push(produto);
  total += produto.preco;

  atualizarCarrinho();
}

// Selecione todos os botões "Remover"
const botoesRemover = document.querySelectorAll('.remover');

// Adicione um ouvinte de eventos de clique a cada botão "Remover"
botoesRemover.forEach(botao => {
  botao.addEventListener('click', function() {
    // Encontre o item pai (li) do botão Remover
    const item = this.parentNode;

    // Encontre o carrinho
    const carrinho = document.getElementById('carrinho');

    // Remova o item do carrinho
    carrinho.removeChild(item);
  });
});


function atualizarCarrinho() {
  const listaProdutos = document.getElementById('lista-produtos');
  const totalElement = document.getElementById('total');

  listaProdutos.innerHTML = '';
  carrinho.forEach(produto => {
    const li = document.createElement('li');
    li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    listaProdutos.appendChild(li);
  });

  totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

function fazerCheckout() {
  // Lógica para fazer o checkout


  alert('PEDIDO REALIZADO!Em breve você receberá um e-mail com todas as informações sobre o pagamento e entrega. Obrigado!!');
}