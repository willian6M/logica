
  

 function calcularRank() {
     let vitorias = parseInt(document.getElementById("vitorias").value);
     let derrotas= parseInt(document.getElementById("derrotas").value);
      
     
     if (isNaN(vitorias) || isNaN(derrotas)){
        alert (" Por favor, insira numero válido de  e derrotas.");
      return
    } 

      let saldoDeVitoria = (vitorias - derrotas);
       let nivel

     if ( saldoDeVitoria < 10) {
        nivel = "Ferro";
    } else if ( saldoDeVitoria >= 11 && saldoDeVitoria <= 20) {
        nivel = "Bronze";
    } else if ( saldoDeVitoria >= 21 && saldoDeVitoria <= 50) {
        nivel = "Prata";
    } else if ( saldoDeVitoria >= 51 && saldoDeVitoria <= 80) {
        nivel = "Ouro";
    } else if ( saldoDeVitoria >= 81 && saldoDeVitoria <= 90) {
        nivel = "Diamante";
    } else if (saldoDeVitoria >= 91 &&  saldoDeVitoria<= 100) {
        nivel = "Lendário";
    } else if ( saldoDeVitoria >= 101) {
        nivel = "Imortal";
    }

    document.getElementById('resultado').innerText = `O Herói tem  ${saldoDeVitoria} pontos de vitorias, e nível = ${nivel}`;

    document.getElementById('vitorias').value = '';
    document.getElementById('derrotas').value = '';

    };  



