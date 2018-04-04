var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room === 'ballroom') {
    weapon = 'poison';
    solved = suspect === 'Mr. Kalehoff';
} else if (room === 'gallery') {
    weapon = 'trophy';
    solved = suspect === 'Ms. Van Cleve';
} else if (room === 'billiards room') {
    weapon = 'pool stick';
    solved = suspect === 'Mrs. Sparr';
} else {
    weapon = 'knife';
    solved = suspect === "Mr. Parkes";
}

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
