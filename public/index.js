'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];


function Exercise1(){
  rentals.forEach(function(entry){
    const time = (new Date(entry.returnDate.replace(/-/g,'/')) - new Date(entry.pickupDate.replace(/-/g,'/')))/(24*60*60*1000)+1;
    cars.forEach(function(input){
      if (input.id == entry.carId){
        entry.price = input.pricePerDay*time + input.pricePerKm*entry.distance;
      }
    });
  });
}

function Exercise2(){
  rentals.forEach(function(entry){
    var rentalPrice = 0;
    const time = (new Date(entry.returnDate.replace(/-/g,'/')) - new Date(entry.pickupDate.replace(/-/g,'/')))/(24*60*60*1000)+1;
    cars.forEach(function(input){
      if (input.id == entry.carId){
        rentalPrice = input.pricePerKm*entry.distance;
        if(time > 1){
          rentalPrice += 9*input.pricePerDay*time / 10;
        }
        else if(time > 4){
          rentalPrice += 7*input.pricePerDay*time / 10;
        }
        else if(time > 10){
          rentalPrice += 5*input.pricePerDay*time / 10;
        }
        else{
          rentalPrice += input.pricePerDay*time;
        }
        entry.price = rentalPrice;
      }
    });
  });
}

function Exercise3(){
  rentals.forEach(function(entry){
    var rentalPrice = 0;
    const time = (new Date(entry.returnDate.replace(/-/g,'/')) - new Date(entry.pickupDate.replace(/-/g,'/')))/(24*60*60*1000)+1;
    cars.forEach(function(input){
      if (input.id == entry.carId){
        rentalPrice = input.pricePerKm*entry.distance;
        if(time > 1){
          rentalPrice += 9*input.pricePerDay*time / 10;
        }
        else if(time > 4){
          rentalPrice += 7*input.pricePerDay*time / 10;
        }
        else if(time > 10){
          rentalPrice += 5*input.pricePerDay*time / 10;
        }
        else{
          rentalPrice += input.pricePerDay*time;
        }
        entry.price = rentalPrice;
      }
    });
    entry.commission.insurance = 15*rentalPrice / 100;
    entry.commission.assistance = time;
    entry.commission.drivy = entry.commission.insurance-entry.commission.assistance;
  });
}

function Exercise4(){
  rentals.forEach(function(entry){
    var rentalPrice = 0;
    const time = (new Date(entry.returnDate.replace(/-/g,'/')) - new Date(entry.pickupDate.replace(/-/g,'/')))/(24*60*60*1000)+1;
    cars.forEach(function(input){
      if (input.id == entry.carId){
        rentalPrice = input.pricePerKm*entry.distance;
        if(time > 1){
          rentalPrice += 9*input.pricePerDay*time / 10;
        }
        else if(time > 4){
          rentalPrice += 7*input.pricePerDay*time / 10;
        }
        else if(time > 10){
          rentalPrice += 5*input.pricePerDay*time / 10;
        }
        else{
          rentalPrice += input.pricePerDay*time;
        }
        entry.price = rentalPrice;
      }
    });
    entry.commission.insurance = 15*rentalPrice / 100;
    entry.commission.assistance = time;
    entry.commission.drivy = entry.commission.insurance-entry.commission.assistance;
    if (entry.options.deductibleReduction == true){
      entry.commission.drivy += 4*time;
    }
  });
}

function searchActor(str){
  for (var i=0; i<actors.length;i++){
    if (actors[i].rentalId==str)
      return i;
  }
}

function Exercise5(){
  Exercise4();
  for (var i=0; i<rentals.length;i++){
    actors[searchActor(rentals[i].id)].payment[0].amount=rentals[i].price;
    actors[searchActor(rentals[i].id)].payment[1].amount=rentals[i].price-rentals[i].commission.insurance*2;
    actors[searchActor(rentals[i].id)].payment[2].amount=rentals[i].commission.insurance;
    actors[searchActor(rentals[i].id)].payment[3].amount=rentals[i].commission.assistance;
    actors[searchActor(rentals[i].id)].payment[4].amount=rentals[i].commission.drivy;
  }
}

function searchRental(str){
  for (var i=0; i<rentals.length;i++){
    if (rentals[i].id==str)
      return i;
  }
}

function Exercise6(){
  for (var i=0; i<rentalModifications.length;i++){
    if (rentalModifications[i].pickupDate) rentals[searchRental(rentalModifications[i].rentalId)].pickupDate=rentalModifications[i].pickupDate;
    if (rentalModifications[i].distance) rentals[searchRental(rentalModifications[i].rentalId)].distance=rentalModifications[i].distance;
    if (rentalModifications[i].returnDate) rentals[searchRental(rentalModifications[i].rentalId)].returnDate=rentalModifications[i].returnDate;
  }
  Exercise5();
}


console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);
