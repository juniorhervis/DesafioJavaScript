import { dadosCep, resultadoCep } from "../module/cepService.js";

window.onload = () => {
  const btnBuscar = document.querySelector("#buscarDados");
  const cep_ = document.querySelector("#CEP");

  btnBuscar.addEventListener("click", async () => {
    if (cep_.value.length !== 8) {
      alert("O CEP precisa ter 8 dígitos!");
      return;
    }
    const dados = await dadosCep(cep_.value);
    resultadoCep(dados);
  });
};
