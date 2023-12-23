//? 1. Recuperare gli elementi dal DOM

// Elementi del form
const nameField = document.getElementById('name');
const kmsField = document.getElementById('kms');
const ageField = document.getElementById('age');
const ticketForm = document.getElementById('ticket-form');

// Bottoni del form
const confirmButton = document.getElementById('confirm-button');
const resetButton = document.getElementById('reset-button');

// Bottone del biglietto
const ticketButton = document.getElementById('ticket-button');

// Elementi del biglietto
const ticketSection = document.getElementById('ticket-section');
const passengerName = document.getElementById('passenger-name');
const ticketRate = document.getElementById('rate');
const cabNumber = document.getElementById('cab');
const cpCodeNumber = document.getElementById('cp-code');
const price = document.getElementById('price');


//? 2. Creare variabile per il prezzo in base ai km
const pricePerKm = 0.21;

//? 3. Creare event listener per il bottone di conferma
confirmButton.addEventListener('click', function () {
    //3.1 Recuperare valori dal form
    const nameValue = nameField.value.trim();
    const kmsValue = parseInt(kmsField.value);
    const ageValue = ageField.value;

    //! Validazione
    if (!nameValue || nameValue.length < 2 || isNaN(kmsValue) || kmsValue < 1) {
        alert('Ci sono degli errori nel form');
        return;
    };


    //3.2 Calcolare prezzo di base
    let basicPrice = pricePerKm * kmsValue;
    let rate = 'Tariffa base';


    //3.3 Calcolare sconti
    if (ageValue === 'minor') {
        rate = 'Tariffa under 18';
        basicPrice = basicPrice * 0.8;
    } else if (ageValue === 'over') {
        rate = 'Tariffa over 65';
        basicPrice = basicPrice * 0.6;
    }

    //3.4 Numero di carrozza casuale
    const cab = Math.floor(Math.random() * 10) + 1;

    //3.4 Numero di biglietto casuale
    const cpCode = Math.floor(Math.random() * (100000 - 10000)) + 10000;



})


