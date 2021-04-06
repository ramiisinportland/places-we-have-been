function Country(city, landmarks, timeOfYear) {
  this.city = city;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
}

let Egypt = new Country("Cairo", "Pyramids", "Summer");
let Mexico = new Country("Mexico City", "Castilo D Chapultepec", "Spring");
let UnitedStates = new Country("California", "Presido of San Francisco", "Winter");