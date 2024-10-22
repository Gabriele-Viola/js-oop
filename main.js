/*In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
La classe "Veicolo" dovrebbe avere le seguenti caratteristiche:
marca
anno
colore
porte
carburante
Successivamente:
Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()
BONUS
In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
Successivamente:
Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
Stampiamo il numero di porte e il tipo di carburante.
IDEE PER PRATICA RIPASSO:
crea un array di veicoli
cicla nell'array usando un forEach
cicla nell'array usando un for
crea una nuova array che contenga solo il nome dei veicoli
crea una nuova array con solo i veicoli elettriche*/
console.log('hi');

class Veicolo {
    marca;
    anno;
    colore;

    constructor(brand, year, color) {
        this.marca=brand;
        this.anno=year;
        this.colore=color;

        
    }

    getinformation(){
        return `the vehicle is a ${this.marca} mada in ${this.anno} in this color: ${this.colore}`
    }
    getage(){  
        return new Date().getFullYear() - this.anno  
    }
}

const punto = new Veicolo ( 'FIAT', 2019, 'blu')
console.log(punto);
console.log(punto.getinformation());
console.log(punto.getage());

class Automobile extends Veicolo {
    constructor(brand, year, color, doors, fuels) {
       super(brand, year, color)
       this.porte = doors
       this.carburante = fuels
        
    }
    getMoreInfo(doors, fuels){
        return `${this.getinformation()}, with ${this.porte} and ${this.carburante} engine`
    }
}
const corsa = new Automobile('Opel', 2020, 'nera','4 porte', 'benzina')
console.log(corsa.carburante);
console.log(corsa.getage());
console.log(corsa.getinformation());
console.log(corsa.getMoreInfo());


