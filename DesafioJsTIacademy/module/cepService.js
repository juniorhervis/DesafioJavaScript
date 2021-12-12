const dadosCep = async function (cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  const dadosFetch = await fetch(url);
  const dadosJson = await dadosFetch.json();
  if (dadosJson.hasOwnProperty("erro")) {
    alert("CEP não encontrado!");
    return;
  } else {
    // resultadoCep(dadosJson);
    return dadosJson;
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

export { dadosCep, resultadoCep };

// implementação manual
// document.querySelector("#logradouro").value = cepDados.logradouro;
// document.querySelector("#bairro").value = cepDados.bairro;
// document.querySelector("#localidade").value = cepDados.localidade;
// document.querySelector("#uf").value = cepDados.uf;
