function adicionar() {
// recuperar valores: nomedo produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    let valorTotal = quantidade.value * valorProduto;
// calcular o preço total do carrinho

// adicionar o produto no carrinho
// atualizar o valor total
}

function limpar() {

}