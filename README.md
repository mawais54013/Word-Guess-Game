# Word-Guess-Game
Word Guess Game with a Avenger's theme using Javascript

# Link to Deployed Site

[Word-Guess-Game](https://mawais54013.github.io/Word-Guess-Game/)

[Portfolio](https://mawais54013.github.io/New-Portfolio/)

# Images
![Game](assets/images/screen1.png)

# Technology Used 
- HTML
- CSS
- Bootstrap

# Code Snippets
```
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
```

This code snippets shows that the names are stored into a array and the computer randomly chooses them with Math.random. Once the word is picked then the scores are set with the guesses left and they are all sent to the html file with the id's of each holder. 
# Learned Materials
I learned to use Javascript as the base for this game while using CSS and Bootstrap to add style and background.

# Author
[Muhammad Awais](https://github.com/mawais54013/Bootstrap-Portfolio)
