let valorFinal = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = '';

function adicionar() {
    // recuperar valores: nomedo produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // calcular o preço total do carrinho
    let valorTotal = quantidade * valorProduto;
    // adicionar o produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotal}</span>
        </section>`
    // atualizar o valor total
    valorFinal = valorFinal + valorTotal;
    let campoValorFinal = document.getElementById('valor-total');
    campoValorFinal.textContent = `R$ ${valorFinal}`   
    document.getElementById('quantidade').value = '';
}

function limpar() {

}