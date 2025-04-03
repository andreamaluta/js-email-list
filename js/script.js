// riprendo l'elemento ul tramite id
const list = document.getElementById('lists');

// creo il ciclo che mi serve per creare le 10 mail
for(let i=0; i<10; i++){
    // faccio la chiamata ajax tramite libreria axio
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((resp) => {
        // aggiungo dentro al dom gli li con dentro la mail
        list.innerHTML += `<li>${resp.data.response}</li>`;
    }) 
}