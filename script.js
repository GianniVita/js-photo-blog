/* 
Esercizio di oggi: **Photo Blog**

repo: `js-photo-blog`

**CONSEGNA**

**Milestone 1**
 
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: concentriamoci su HTML e CSS riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
 
**Milestone 2**
Utilizzando Postman, testiamo una chiamata a questo endpoint: 
 
https://lanciweb.github.io/demo/api/pictures/

Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
 

**Milestone 3**
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

**Font utilizzati:**
titoli:  ‘Edu Tas Beginner’, sans-serif;
date: ‘Sometype Mono’, ‘monospace’;
(Dovreste sapere a questo punto cosa e come prendere da Google Fonts… 😉)

**Bonus**
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
 
**Note**
Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile 🙂 */

// getting the API declaring a costant variable
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

// CHIAMA l'indirizzo (usa axios.get).
axios.get(endpoint)
// Arrivano i dati con .then
.then(response =>{
// Loggo per vedere se si vedono i dati da "endpoint"
    console.log(response.data);
// Creo una costante dove mettere i dati di response che diventa un'array
    const listaFoto = response.data;
// Creo un ciclo "for" scorrere le foto fornite dall'endpoint
for (let i = 0; i < listaFoto.length; i++) {
// Salvo le foto in una costante
    const datiFoto = listaFoto[i];
// uso un IF per la cosa più base per vedere se i dati ci sono
if (datiFoto){
   // console.log(datiFoto)

// I dati sono presenti allora posso provare a inserire le foto nell'html con cosa? 
    // un 'innerhtml' può farlo 
    // Potremmo usare anche una "classList" per aggiungere gli elementi in html
    
    // Qui faccio la scheda delle foto importando quello che ce nel div che mi interessa cambiare

    {/* <img src="./assets_day1/img/pin.svg" class="pinicon" alt="red pin" >
                <img src="./assets_day1/img/verde.png" alt="Photo 1">
                <div class="info">
                    <p> Dates photo goes here</p>
                    <h3>SKATE PARK</h3>
 */
        }

    }
    
} 

})


        
