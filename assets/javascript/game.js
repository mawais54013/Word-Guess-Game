document.getElementById("text1").innerHTML = "Press space bar to get started " + "</br>";

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var text = ["ironman", "spiderman", "thanos", "thor", "antman", "captainamerica", "hulk", "blackwidow", "starlord"];
var wins = 0;
var losses = 0;
var guessLeft = 16;
var guess = [];
var letter=[];


var computerChoice = text[Math.floor(Math.random() * text.length)];
var word = computerChoice.length;

document.getElementById("text2").innerHTML = "Wins " + "<br>";
document.getElementById("text21").innerHTML = "Losses " + "<br>";
document.getElementById("text3").innerHTML = "Current Word:" + "<br>";
 document.getElementById("text5").innerHTML = "Guess left: ";
 document.getElementById("text6").innerHTML = 15;
 document.getElementById("text7").innerHTML = "Letters already used: ";

 var replace = [];

 function setup(){
    replace = [];
    for(var i =0; i<computerChoice.length; i++)
    {
        // console.log("-------", i, computerChoice, replace)
        replace[i] = "_";
        console.log(replace);
    }
 }
 setup();

function reset()
    {
        if(guessLeft === 0)
        {
           
            letter = [];
            guess = [];
            guessLeft = 15;
            losses++;
            computerChoice = text[Math.floor(Math.random() * text.length)];
            
            setup();
            
            console.log(replace)
            document.getElementById("text21").innerHTML = "Losses " + losses;
            document.getElementById("text2").innerHTML = "Wins " + wins;
            document.getElementById("text1").innerHTML = "Keep trying";
            document.getElementById("text4").innerHTML = replace;
            document.getElementById("text6").innerHTML = guessLeft;
            document.getElementById("text7").innerHTML = "Letters already used: " + guess;

            
        }
    }
function resetWin()
    {
        if(word === 0)
        {
        console.log(word);
        wins++;
        letter = [];
        guessLeft = 15;
        guess = [];
        computerChoice = text[Math.floor(Math.random() * text.length)];
        word = computerChoice.length;
        setup();
        document.getElementById("text2").innerHTML = "Wins " + wins;
        document.getElementById("text21").innerHTML = "Losses " + losses;
        document.getElementById("text1").innerHTML = "Congradulation, you win";
        document.getElementById("text4").innerHTML = replace;
        document.getElementById("text6").innerHTML = guessLeft;
        }

    }

document.onkeyup = function(event)
{
    
    var userGuess = event.key;
    guess.push(userGuess);
    if(letter.indexOf(userGuess) === -1)
    {
        letter.push(userGuess);   
    }
    else
    {
        guessLeft++;
        alert("Please pick another letter");
    }


    for(var x = 0; x < computerChoice.length; x++)
    {      
        if(computerChoice[x] === userGuess)
        {
            
            replace[x] = userGuess;
            word--;
            
        }
    }
    if(event)
    {
        
        guessLeft--;
        reset();
        resetWin();
        
    };



    // if(word === 0)
    // {
    //     wins++;
    //     guess = [];
    //     document.getElementById("text1").innerHTML = "Press space bar to start over";
    //     resetWin();
    //     document.getElementById("text2").innerHTML = "Wins " + wins;
    // }
    
    document.getElementById("text4").innerHTML = replace;
    document.getElementById("text6").innerHTML = guessLeft;
    document.getElementById("text7").innerHTML = "Letters already used: " + guess;
  
}   


