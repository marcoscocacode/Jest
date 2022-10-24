// Array Chunking
// Separar o array em um conjunto de array com um length específico
// Ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]]


const chunkArray = (arr, len) => {
  // Inicia o Chunk Array
  const chunkedArr = [];

  // Faz um loop pelo array
  arr.forEach(val => {
    // Pega o último elemento
    const last = chunkedArr[chunkedArr.length - 1];

    // Verifica se o last e o tamando do last é igual o tamanho do chunk 
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunkArray;