console.log('Questão 1'); 

// Para fazer os testes, altere a variável tamanhoVetor e os elementos do vetor.
// Em seguida, verifique o console no navegador.
var tamanhoVetor = 6;
var vetor = [8, 5, 6, 9, 2, 7]; // Está no escopo global.

// A) Ordem crescente.
vetor.sort((a, b) => a - b);
console.log('A) Ordem crescente: ' + vetor);

// B) Ordem decrescente.
vetor.sort((a, b) => b - a);
console.log('B) Ordem decrescente: ' + vetor);

// C) Menor valor.
var maior = vetor[0];
var menor = vetor[0];

for(var i = 0; i < tamanhoVetor; i++) {
    if(vetor[i] < menor) {
        menor = vetor[i];
    }
}
console.log('C) Menor valor do vetor: ' + menor);

// D) Maior valor.
for(var i = 0; i < tamanhoVetor; i++) {
    if(vetor[i] > maior) {
        maior = vetor[i];
    }
}
console.log('D) Maior valor do vetor: ' + maior);

// E) Média dos valores.
var somaValoresVetor = 0;
var media = 0;

for(var i = 0; i < tamanhoVetor; i++) {
    somaValoresVetor = somaValoresVetor + vetor[i];
}
media = somaValoresVetor / tamanhoVetor;
console.log('E) Média dos valores do vetor: ' + media);