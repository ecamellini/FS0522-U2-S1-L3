
let prodotto = {
  name: "Scarpe",
  price: 99.99,
  printProduct: function() {
    // Nome -- prezzo
    console.log(`${this.name} -- ${this.price}`)

    // This è un modo per riferirsi ad un oggetto, dall'interno, che funziona sempre
    // senza bisogno di avere nessuna informazione su come quest'oggetto verrà usato
    // Se io stampo console.log(this) vedo l'oggetto intero
  }
}

prodotto.printProduct()


// Questa sintassi si chiama funzione costruttore, questa funzione
// chiamata con la keyword new davanti mi costruisce oggetti etichettati come "Product",
// che hanno un name e un price.
function Product(name, price, size) {
  this.name = name
  this.price = price
  this.size = size
  // Metodi del Product - funzioni all'interno di un oggetto
  this.printToConsole = function() { console.log(`${this.name} -- ${this.price}`) }
  this.visualize = function() {
    document.getElementById('lista-prodotti').innerHTML += `<div class="prodotto">${this.name} - ${this.price}</div>`
  }
}

// Lista dei prodotti che vendo. In un'applicazione completa, questi arriveranno dal
// server che li legge da un database, non so quanti saranno, ma so che sono fatti così.
// Cioè che sono degli oggetti Product
let prodotti = [
  new Product("Maglione", 12, 'M'),
  new Product("T-shirt", 8, 'S'),
  new Product("T-shirt in cotone", 25, 'L'),
  new Product("Pantalone", 30, 'S'),
  new Product("Hoodie", 50, 'XXL'),
]

console.log(prodotti)

for (let index = 0; index < prodotti.length; index++) {
  let prodotto = prodotti[index]
  prodotto.visualize()
}
