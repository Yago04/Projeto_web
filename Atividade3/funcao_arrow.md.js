<script src="https://cdn.jsdelivr.net/npm/showdown@1.10.3/dist/showdown.min.js"></script>

const nomeDaFuncao = (parametros) => {
    // corpo da função
    return valor;
  };


  // Função tradicional
function soma(a, b) {
    return a + b;
  }
  
  // Função de seta equivalente
  const somaArrow = (a, b) => a + b;
  
  console.log(soma(2, 3));        // Saída: 5
  console.log(somaArrow(2, 3));   // Saída: 5

  
  //As funções de seta são especialmente úteis quando usadas como argumentos de funções de ordem superior (como map, filter, reduce, etc.) e quando se deseja preservar o valor do this do escopo externo.//