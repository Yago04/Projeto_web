<script src="https://cdn.jsdelivr.net/npm/showdown@1.10.3/dist/showdown.min.js"></script>

//Promises são objetos em JavaScript usados para representar a eventual conclusão ou falha de uma operação assíncrona. Elas fornecem uma maneira mais estruturada de lidar com código assíncrono, facilitando o encadeamento de operações e a captura de erros.


function aguardarTempo(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Aguardou por ${ms}ms`);
      }, ms);
    });
  }
  
  aguardarTempo(2000)
    .then(resultado => {
      console.log(resultado); // Saída: Aguardou por 2000ms
    })
    .catch(erro => {
      console.error(erro);
    });

     