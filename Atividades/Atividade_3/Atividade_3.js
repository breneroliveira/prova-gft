class Animais {
    constructor(genero, classe, ordem, habitat) {
        this.genero = genero;
        this.classe = classe;
        this.ordem = ordem;
        this.habitat = habitat;
    }

    locomoverSe() {
    }

    alimentarSe() {
        
    }
}

class Mamiferos extends Animais {
    constructor(genero, classe, ordem, habitat, cetaceo) {
        super(genero, classe, ordem, habitat);
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

var pardal = new Aves('Passer', Aves, 'Passeriformes', 'Árvores');

console.log(pardal);