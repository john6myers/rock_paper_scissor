function computerPlay() {
    var word = ['Rock','Paper','Scissors'];
    var randomChoice = word[Math.floor(Math.random()*word.length)];
    alert('The computer chose:' + randomChoice);
}
console.log(computerPlay())