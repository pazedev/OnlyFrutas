let carrinho = [];
let total = 0;

function adicionarAoCarrinho(produtoId) {
  // Lógica para adicionar o produto ao carrinho
  let produto;

  // Encontre o produto pelo ID (você pode substituir essa lógica com a lógica do seu sistema)
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

  function removerProduto(botao) {
    // Obtém o elemento pai do botão (div.item)
    let item = botao.parentNode;
    
    // Remove o elemento do carrinho
    item.remove();
  }

  carrinho.push(produto);
  total += produto.preco;

  atualizarCarrinho();
}

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
  // Aqui você pode redirecionar o usuário para a página de checkout ou realizar outras ações, como enviar uma solicitação ao servidor para processar o pagamento
  // Neste exemplo, apenas exibimos um alerta com a mensagem "Checkout realizado"

  alert('PEDIDO REALIZADO!Em breve você receberá um e-mail com todas as informações sobre o pagamento e entrega. Obrigado!!');
}





