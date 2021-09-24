numeroSecreto = parseInt(Math.random() * 11);
tentativas = 2;

function Resetar() {
   numeroSecreto = parseInt(Math.random() * 11);
   tentativas = 2;
   var elementoResultado = document.getElementById("resultado");
   elementoResultado.innerHTML = "";
   //console.log(tentativas);
}

function Chutar() {
   var elementoResultado = document.getElementById("resultado");
   var chute = parseInt(document.getElementById("valor").value);

   if (chute == numeroSecreto && tentativas >= 0) {
      elementoResultado.innerHTML = "Você acertou";
   } else if (chute > 10 || (chute < 0 && tentativas >= 0)) {
      elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
   } else if (tentativas > 0) {
      if (chute > numeroSecreto) {
         elementoResultado.innerHTML =
            "Você errou, tente um número menor, você tem mais " +
            tentativas +
            " tentativas ";
         tentativas = tentativas - 1;
      }
      if (chute < numeroSecreto) {
         elementoResultado.innerHTML =
            "Você errou, tente um número maior, você tem mais " +
            tentativas +
            " tentativas ";
         tentativas = tentativas - 1;
      }
   } else {
      elementoResultado.innerHTML =
         "Acabaram as tentativas, o número secreto era " + numeroSecreto;
      document.getElementById("valor").value = "";
   }
}