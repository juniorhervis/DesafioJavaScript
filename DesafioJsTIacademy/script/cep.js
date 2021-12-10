window.onload = () => {
  const btnBuscar = document.querySelector("#buscarDados");
  const cep_ = document.querySelector("#cep")
  try {
    btnBuscar.addEventListener("click", () => {
    cep_.value.replace("-","")
      if(cep_.value.length == 8 )
        dadosCep(cep_.value); 
    })
  } catch (error) {
    alert("Digite um cep válido");
  }

  let dadosCep = async function (cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let dadosFetch = await fetch(url);
    let dadosJson = await dadosFetch.json();
    resultadoCep(dadosJson)
  };

function resultadoCep(dadosCep) {
    for (let campo in dadosCep) {
      if (document.querySelector(`#${campo}`)) {
        document.querySelector(`#${campo}`).value = dadosCep[campo];
      }
    }
  }
};
