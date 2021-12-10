window.onload = () => {
  const btnBuscar = document.querySelector("#buscarDados");
  const cep_ = document.querySelector("#CEP");

  btnBuscar.addEventListener("click", () => {
    if (cep_.value.length !== 8) {
      alert("O CEP precisa ter 8 dígitos!");
    }
    dadosCep(cep_.value);
    btnBuscar.classList.add("disabled");
  });

  let dadosCep = async function (cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let dadosFetch = await fetch(url);
    let dadosJson = await dadosFetch.json();
    if (dadosJson.hasOwnProperty("erro")) {
      alert("CEP não encontrado!");
    } else {
      resultadoCep(dadosJson);
    }
  };

  function resultadoCep(cepDados) {
    // document.querySelector("#logradouro").value = cepDados.logradouro;
    // document.querySelector("#bairro").value = cepDados.bairro;
    // document.querySelector("#localidade").value = cepDados.localidade;
    // document.querySelector("#uf").value = cepDados.uf;

    for (let campo in cepDados) {
      if (document.querySelector(`#${campo}`)) {
        document.querySelector(`#${campo}`).value = cepDados[campo];
        console.log(campo);
      }
    }
  }
};
