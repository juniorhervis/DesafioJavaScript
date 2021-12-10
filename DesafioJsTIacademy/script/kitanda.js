window.onload = function () {
  let produtos = [
    {
      descricao: "Laranja",
      preco: 2.25,
    },
    {
      descricao: "Limão",
      preco: 1.82,
    },
    {
      descricao: "Pêra",
      preco: 6.55,
    },
    {
      descricao: "Melancia",
      preco: 8.92,
    },
    {
      descricao: "Maçã",
      preco: 4.58,
    },
  ];

  const produtosSelecionados = [];
  const listaProdutos = document.querySelector("#produtos");

  (() => {
    produtos.forEach((compra) => {
      const frutas = document.createElement("li");
      for (item in compra) {
        listaProdutos
          .appendChild(frutas)
          .setAttribute("data-preco", compra.preco);
        listaProdutos.appendChild(frutas).setAttribute("class", "fruta-item");
        listaProdutos.appendChild(frutas).innerText = `${compra.descricao}`;
      }
    });

    const produtoElementos = document.querySelectorAll(".fruta-item");
    const cestaCliente = document.querySelector("#cestaDoCliente");

    produtoElementos.forEach((frutaComprada) => {
      frutaComprada.addEventListener("click", () => {
        const descricao = frutaComprada.innerText;
        const existe = verificaItem(descricao);
        if (existe) {
          alert(`A fruta ${descricao} já está na sua cesta!`);
          return;
        }
        frutaComprada.classList.add("selected");
        let li = document.createElement("li");
        const preco = frutaComprada.getAttribute("data-preco");
        li.innerText = descricao;
        li.setAttribute("data-preco", preco);
        cestaCliente.appendChild(li);
        cestaCliente.appendChild(li);
        produtosSelecionados.push({
          descricao: frutaComprada.innerText,
          preco: Number(preco),
        });
        totalFinal();
      });
    });
  })();

  function totalFinal() {
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

  function verificaItem(descricao) {
    return produtosSelecionados.some((item) => {
      return item.descricao === descricao;
    });
  }

  // function removerCompra(elemento) {
  //   const lista = document.querySelectorAll(`#${elemento} > li`);

  //   for (let produtosSelecionados of lista) {
  //     produtosSelecionados.addEventListener("click", () => {
  //       produtosSelecionados.remove();
  //       verificaItem();
  //       totalFinal();
  //     });
  //   }
  // }
};
