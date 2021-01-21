var today = new Date();
var time = today.getHours();

if (time >= 5 && time < 12) {
  console.log("Good morning!")
}

else if ( time >= 12 && time <= 16) {
  console.log("Good afternoon!")
}

else {
  console.log("Hey there!")
}
