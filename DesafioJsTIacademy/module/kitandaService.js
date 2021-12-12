function totalFinal(produtosSelecionados) {
  const totalElemento = document.querySelector("#mostraTotalCompra");
  const total = produtosSelecionados.reduce((acc, value) => {
    acc += value.preco;
    return acc;
  }, 0);
  totalElemento.innerText = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function verificaItem(descricao, produtosSelecionados) {
  return produtosSelecionados.some((item) => {
    return item.descricao === descricao;
  });
}

export { totalFinal, verificaItem };
