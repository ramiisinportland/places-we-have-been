
('Use Strict')

function Country(city, landmarks, timeOfYear) {
  this.city = city;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

let Egypt = new Country("Cairo", "Pyramids", "Summer");
let Mexico = new Country("Mexico City", "Castilo D Chapultepec", "Spring");
let UnitedStates = new Country("California", "Presido of San Francisco", "Winter");

$(document).ready(function(){
  $("#egyptContent").html(`${Egypt.city}, ${Egypt.landmarks}, ${Egypt.timeOfYear}`);
  $("#egyptContent").hide();
  $("#egypt").click(function() {
      $("#egyptContent").slideDown(600);
  });


  $("#mexicoContent").html(`${Mexico.city}, ${Mexico.landmarks}, ${Mexico.timeOfYear}`);
  $("#mexicoContent").hide();
  $("#mexico").click(function() {
      $("#mexicoContent").slideDown(600);
  });

  $("#usaContent").html(`${UnitedStates.city}, ${UnitedStates.landmarks}, ${UnitedStates.timeOfYear}`);
  $("#usaContent").hide();
  $("#usa").click(function() {
      $("#usaContent").slideDown(600);
  });


});





// $(document).ready(function() {
//   $("#egypt").click(function) {
//   $("#egypt").slideDown(function() 
//   $("#egypt").html(`${Egypt.city}, ${Egypt.landmarks}, ${Egypt.timeOfYear}`);
  
// });
// });