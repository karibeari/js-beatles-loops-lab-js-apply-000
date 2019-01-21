var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments){
  var Beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    Beatles.push(musicians[i] + "plays" + instruments[i]);
  }
  return Beatles;
}