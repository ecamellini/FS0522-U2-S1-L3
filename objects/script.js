/* Voglio rappresentare nel mio programma uno studente
di Epicode. Perché devo creare un'applicazione che gestisca i dati
degli studenti.

Uno studente di Epicode ha:
- un nome
- un cognome
- un età
- classe
- ha un laptop, oppure no?

Queste sono le carattetistiche di uno studente di Epicode che mi interessa
rappresentare e gestire nella mia applicazione.
Questo è il Modello di uno studente di Epicode, nella mia applicazione.

Modellare un'entità: ho una entità mel mondo reale, vado a scegliere solo le
caratteristiche che mi interessano per l'applicazione che sto facendo.
*/

// Rappresentiamo uno studente di Epicode
let student1 = {
  // Attributi/proprieta dell'oggetto
  // chiave: valore
  // la chiave è il nome dell'attributo, che mi permette di prenderne il valore
  name: "Eric",
  surname: "Camellini",
  age: 50,
  class: "FS-0522",
  hasLaptop: true,
  address: { street: "Via Rossi", city: "Milano", country: "IT", zip: "123123" },
  skills: ["Reasoning", 'Public Speaking', 'Simpatico']
}

let student2 = {
  name: "Paolo",
  surname: "Rossi",
  age: 20,
  class: "FS-0522",
  hasLaptop: false,
  address: { street: "Via Rossi", city: "Milano", country: "IT", zip: "123123" },
  skills: ['Reasoning', 'Public Speaking', 'Simpatico']
}

// Utilizzando il . è possibile accedere agli attributi o proprietà di un oggetto

console.log(`Il nome del primo studente è ${student1.name} e ha ${student1.age} anni`)
console.log(`Il nome del secondo studente è ${student2.name}  e ha ${student2.age} anni`)

console.log(`La via e la città in cui abita ${student2.name} sono: ${ student2.address.street } - ${ student2.address.city}`)
console.log(`La skill numero 1 di ${student1.name } è ${ student1.skills[0] } `)

// Ma possiamo anche modificarli
console.log(`Student 1 - hasLaptop: ${ student1.hasLaptop }`)
student1.hasLaptop = false // Per modificare il valore di una proprietà ci basta assegnargliene uno nuovo
console.log(`Student 1 ha rotto il laptop - hasLaptop: ${ student1.hasLaptop }`)

// Questa cosa si applica anche alle proprietà che ancora non esistono...
// Nel senso che se assegno un valore a una proprietà che non c'è, JavaScript la crea con quel valore
student1.matricola = "123123123123"
console.log(student1)


// Se avessi avuto student1 e student2 dichiarati come const
// avrei potuto comunque modificare il contenuto dei due oggetti.
// Const non si applica sulle proprietà degli oggetti, sul contenuto degli array, etc.
// L'unica cosa che fa e evitare che svuotiamo la variabile e la riempiamo del tutto con un nuovo valore.


// ______________________________________________________________________________
// Se avessi invece un array di studenti // array di oggetti
let studenti = [
  // È un array con tanti oggetti all'interno
  { name: "Eric", surname: "Camellini", age: 50, class: "FS-0522", hasLaptop: false, skills: ["Reasoning", 'Public Speaking', 'Simpatico'], address: { street: "Via Rossi", city: "Milano", country: "IT", zip: "123123" }},
  { name: "Paolo", surname: "Rossi", age: 26, class: "FS-0522", hasLaptop: false, skills: ["Reasoning", 'lol', 'Simpatico'], address: { street: "Via Rossi", city: "Milano", country: "IT", zip: "123123" }},
  { name: "Mario", surname: "Bianchi", age: 20, class: "FS-0522", hasLaptop: false, skills: ["Reasoning", '123123', 'Simpatico'], address: { street: "Via Rossi", city: "Milano", country: "IT", zip: "123123" } },
  { name: "Paolo", surname: "Verdi", age: 20, class: "FS-0522", hasLaptop: false, skills: ["Lol", 'Asd', 'Simpatico'], address: { street: "Via Rossi", city: "Milano", country: "IT", zip: "123123" }, }
]

// let studenti = leggiStudentiDalDatabase() // --> so che questa funzione mi restituisce una lista di oggetti, ognuno di questi ha un name, surname, age

let listaStudenti = document.getElementById('lista-studenti')

// Se voglio il nome del primo studente?
for (let i = 0; i < studenti.length; i++) {
  let studente = studenti[i]

  // Ora che ho lo studente i-esimo dentro la variabile, lo visualizzo
  listaStudenti.innerHTML += `<div>${studente.name} - ${studente.age}</div>`

  for (let skill of studente.skills) {
    listaStudenti.innerHTML += `<span class="skill">${skill}</span>`
  }

  listaStudenti.innerHTML += `<div class="indirizzo">${studente.address.city} ${studente.address.street}</div>`

  listaStudenti.innerHTML += "<hr />"
}

// STESSA COSA, PER SCORRERE ARRAY DI STUDENTI E FARE QUALCOSA CON OGNI studente
// for (let studente of studenti) {
//   // faccio qualche cosa con studente
// }
