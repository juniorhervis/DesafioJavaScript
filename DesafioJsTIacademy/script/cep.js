window.onload = () => {
  const btnBuscar = document.querySelector("#buscarDados");
  const cep_ = document.querySelector("#CEP");

  btnBuscar.addEventListener("click", () => {
    
    if (cep_.value.length !== 8) {
      alert("O CEP precisa ter 8 dígitos!");
      return;
    }
    dadosCep(cep_.value);
  });

  const dadosCep = async function (cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const dadosFetch = await fetch(url);
    const dadosJson = await dadosFetch.json();
    if (dadosJson.hasOwnProperty("erro")) {
      alert("CEP não encontrado!");
      return;
    } else {
      resultadoCep(dadosJson);
    }
  };

  function resultadoCep(cepDados) {
    for (const campo in cepDados) {
      if (document.querySelector(`#${campo}`)) {
        document.querySelector(`#${campo}`).value = cepDados[campo];
        console.log(campo);
      }
    }
  }
};



//implementação manual
// document.querySelector("#logradouro").value = cepDados.logradouro;
// document.querySelector("#bairro").value = cepDados.bairro;
// document.querySelector("#localidade").value = cepDados.localidade;
// document.querySelector("#uf").value = cepDados.uf;
