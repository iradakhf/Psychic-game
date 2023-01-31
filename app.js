const letters = ['a','b','c','d','e','f','g','h','i',
  'j','k','l','m','n','o','p', 'q','r',
  's','t','u','v','w','x','y','z'];

var lettersGuessed = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;

function generateRandomAnswer(){
    let randomLetterIndex = Math.floor(Math.random() * letters.length);
    return letters[randomLetterIndex];
  }
  
  function start(){
    guessesLeft=10; 
    document.getElementById("usersGuess").innerHTML = " ";
    generateRandomAnswer();
  }
  var computerGuess = generateRandomAnswer();
window.addEventListener("keyup", function(e){
  
  if(letters.includes(e.key)){
     userguess = document.getElementById("usersGuess").innerHTML;
    if(userguess.includes(e.key)){
      this.alert(`${e.key} is already guessed`)
    }
    else{
       userguess = document.getElementById("usersGuess").innerHTML +=e.key + ",";
  
       if(e.key==computerGuess){
        wins+=1;
        document.getElementById("Wins").innerText = wins;
        this.alert("you won!")
        start();
       }
       else{
         if(guessesLeft>0){
           guessesLeft-=1;
           document.getElementById("guessesLeft").innerText= guessesLeft;
         }
         else{
          losses +=1
           document.getElementById("Losses").innerText = losses;
          this.alert("no guesses left")
          start();
         }
       }
    }

  }
  else{
    alert("please enter a letter")
  }
})

