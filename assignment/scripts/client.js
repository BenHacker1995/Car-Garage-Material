let garage = [];
 // garage size
 let carCount = 0;
 const maxCars = 10;
 let carsLeft = maxCars - carCount;

$( document ).ready( function(){
  $('#inputDiv').find('input:text').val(''); // clear inputs on load
  $('#carsNum').append( '<h2>Number of Cars in Garage: ' + carCount + '</h2>');
  $('#carsLeft').append( '<h2>Number of Spaces Remaining: ' + carsLeft +'</h2>'); // initial values for cars and spaces
  $( '#carButton' ).on( 'click', function(){ // when button clicked, do this stuff
    let inputCar = new Car( $( '#inputYear' ).val(), $( '#inputMake' ).val(), $( '#inputModel' ).val());
    if ( inputCar.year === '' || inputCar.make === '' || inputCar.model === '' ) {
      alert( 'Error: Invalid Input' ); // if any fields are blank
    } // end if statement
    else if ( garage.length === maxCars ) {
      alert( 'Error: Too Many Cars' ); // if garage is full
    } // end else if statement
    else {
    updateGarage();
      carCount = carCount + 1;
      carsLeft = carsLeft - 1; // update number of cars and spaces after listed
      document.getElementById('carsNum').innerHTML = '<h2>Number of Cars in Garage: ' + carCount + '</h2>';
      document.getElementById('carsLeft').innerHTML = '<h2>Number of Spaces Remaining: ' + carsLeft +'</h2>'; // update car and space numbers
  } // end else statement
    $( '#inputDiv' ).find( 'input:text' ).val(''); // clear inputs after input submission
  }); // end when clicked
}); // end document ready

class Car{
  constructor( year, make, model ){
    this.year = year;
    this.make = make;
    this.model = model;
  } //end constructor
} // end Car class

function newCar( year, make, model ){ // for console use
  let output = $( '#list' ); // once done, values will be displayed under this id
  let outputValNC = '<li>' + year + ' ' + make + ' ' + model + '</li>'; // list item the values are displayed under
  console.log( 'in newCar:', year, make, model ); // verify inputs are through
  output.append( outputValNC ); // append list item with all inputs
  garage.push( new Car( year, make, model ) ); // push to garage
  carCount = carCount + 1;
  carsLeft = carsLeft - 1; // update number of cars and spaces after listed
  document.getElementById('carsNum').innerHTML = '<h2>Number of Cars in Garage: ' + carCount + '</h2>';
  document.getElementById('carsLeft').innerHTML = '<h2>Number of Spaces Remaining: ' + carsLeft +'</h2>'; // update displayed values
  return true;
} // end newCar

function updateGarage(){
  let output = $( '#list' ); // once done, values will be displayed under this id
  if ( $('#inputImage').val() != '' ){
    output.append( '<li>' + $('#inputYear').val() + ' ' + $('#inputMake').val() + ' ' + $('#inputModel').val() + '<br><img src="' + $('#inputImage').val() + '", width = inherit, height = 200px></br></li>' );
  } // append list item with all inputs, including image
  else {
    output.append( '<li>' + $('#inputYear').val() + ' ' + $('#inputMake').val() + ' ' + $('#inputModel').val() + '</li>');
  } // append list item with all inputs, excluding image
  console.log( 'in updateGarage:', $('#inputYear').val(), $('#inputMake').val(), $('#inputModel').val() );
  garage.push( new Car( $('#inputYear').val(), $('#inputMake').val(), $('#inputModel').val() ) ); // push to garage
  return true;
} // end updateGarage
