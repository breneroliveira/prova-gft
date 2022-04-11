console.log('Questão 3');

class Animais {
    constructor(genero, classe, ordem, habitat) {
        this.genero = genero;
        this.classe = classe;
        this.ordem = ordem;
        this.habitat = habitat;
    }

    locomoverSe(ordem) {
        if(ordem == 'Mamífero') {
            console.log('Caminha.')
        } else if(ordem == 'Peixe') {
            console.log('Nada.')
        } else if(ordem == 'Ave') {
            console.log('Voa.')
        }
    }

    set alimentarSe(classe) {
        if(classe == 'Carnívoro') {
            console.log('Come carne.')
        } else if(classe == 'Herbívoro') {
            console.log('Come plantas.')
        } else if(classe == 'Onívoro') {
            console.log('Come tudo.')
        } 
    }
}

class Mamiferos extends Animais {
    constructor(genero, classe, ordem, habitat, cetaceo) {
        super(genero, classe, ordem, habitat, locomoverSe);
        this.cetaceo = true;
    }
}

class Peixes extends Animais {
    constructor(genero, classe, ordem, habitat, mar) {
        super(genero, classe, ordem, habitat);
        this.mar = true;
    }
}

class Aves extends Animais {
    constructor(genero, classe, ordem, habitat, migratoria) {
        super(genero, classe, ordem, habitat);
        this.migratoria = true;
    }
}

var pardal = new Aves('Passer', 'Herbívoro', 'Ave', 'Árvores');

console.log(pardal);