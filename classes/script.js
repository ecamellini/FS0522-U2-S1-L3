
// Questo è uno stampino per creare oggetti Pizza
class Pizza { // Questa parola class non centra con una classe CSS

  constructor(gusto, prezzo) { // Quello che viene chiamato quando uso new
    this.gusto = gusto;
    this.prezzo = prezzo;
  }

  // Nelle classi, posso definire i metodi direttamente come altre funzioni assieme al costruttore.
  // NON SERVE LA PAROLA CHIAVE function
  visualizza() {
    document.getElementById('menu-pizze').innerHTML += `<div class="pizza">🍕🍕🍕🍕${this.gusto} -- ${this.prezzo}</div>`
  }
}

// Questa cosa è come fare quello che abbiamo fatto nell'esempio dei products.
// È come definire una funzione con il nome Pizza.
// function Pizza(gusto, prezzo) {
//   this.gusto = gusto
//   this.prezzo = prezzo
// }

// Con la parola new creo un nuovo oggetto con lo stampino Pizza
let pizze = [
  new Pizza('Margherita', 8), // Una istanza di Pizza
  new Pizza('Diavola', 9), // Un'altra istanza di Pizza
  new Pizza('Diavola gourmet', 15),
  new Pizza('Capricciosa', 9),
]


for (let pizza of pizze) {
  pizza.visualizza()
}
