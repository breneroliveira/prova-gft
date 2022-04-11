console.log('Questão 2');

// Para fazer os testes mude o parâmetro passado no método apresentarValorMedicamento.
// É possível criar instâncias da classe Medicamento para a testagem.
// Em seguida, verifique o console no navegador.

class Medicamento {
    constructor(nomeMedicamento, valorMedicamento) {
        this.nomeMedicamento = nomeMedicamento;
        this.valorMedicamento = valorMedicamento;
    }

    apresentarValorMedicamento(idadeCliente) {
        console.log('Valor normal (R$): ' + this.valorMedicamento);
        var valorDesconto;

        if(idadeCliente >= 60 && idadeCliente <= 70) {
            console.log('Percentual de desconto: 20%');
            
            this.valorDesconto = (this.valorMedicamento  * 20) / 100;
            console.log('Valor do desconto (R$): ' + this.valorDesconto);
        } else if(idadeCliente >= 71 && idadeCliente <= 80) {
            console.log('Percentual de desconto: 30%');

            this.valorDesconto = (this.valorMedicamento  * 30) / 100;
            console.log('Valor do desconto (R$): ' + this.valorDesconto);
        } else if(idadeCliente >= 80) {
            console.log('Percentual de desconto: 50%');

            this.valorDesconto = (this.valorMedicamento  * 50) / 100;
            console.log('Valor do desconto (R$): ' + this.valorDesconto);
        } else {
            console.log('Não há desconto para está faixa de idade.');
        }
    }
}

var numesulida = new Medicamento('Nimesulida', 5.99);

console.log('Idade do paciente: ' + 85)
numesulida.apresentarValorMedicamento(85);