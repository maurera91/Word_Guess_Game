var words = ["Chevy Chase", "Bill Murray", "Gilda Radner","Will Ferrell", "Tina Fey", "Eddie Murphy"];
//randomly picks a name out of the name array
var rand = words[Math.floor(Math.random() * words.length)];
var blank = "";
var turns = 0;

var reset= function(){
    turns = 0;
    blank = "";
    rand = words[Math.floor(Math.random() * words.length)];
    $("#head").css({"opacity": "0"});
    $("#body").css({"opacity": "0"});
    $("#left-arm").css({"opacity": "0"});
    $("#right-arm").css({"opacity": "0"});
    $("#left-leg").css({"opacity": "0"});
    $("#right-leg").css({"opacity": "0"});

    $("#guesses").empty();


    for(var j=0; j < rand.length; j++){
        if(rand[j]!==" "){
            blank += "_";
        }
        else{
            blank += " ";
        }     
    };
    $("#name").text(blank);
    $("#name").css({"letter-spacing": "3px"});
    $("#turns").text(6-turns);

    rand= rand.toLocaleLowerCase();
}
//function that displays body parts of the hangman
var bodyParts = function(){
    switch(turns){

        case 1:
            $("#head").css({"opacity": "1"});
            break;

        case 2:
            $("#body").css({"opacity": "1"});
            break;

        case 3:
            $("#left-arm").css({"opacity": "1"});
            break;


        case 4:
            $("#right-arm").css({"opacity": "1"});
            break;

        case 5:
            $("#left-leg").css({"opacity": "1"});
            break;

        case 6:
            $("#right-leg").css({"opacity": "1"});
            alert("You lost! Hit RESET to try again!")
            break;

    }

}
    reset();

        document.onkeyup = function(event){
            //user input saved into userGuess
            var userGuess= event.key;
            console.log(userGuess);
            
            var newGuess = $("</div>");
                newGuess.text(userGuess);
                $("#guesses").append(newGuess);
            

            //checks if userGuess is in the target word
            for(var k=0; k < rand.length; k++){
                if(rand[k] == userGuess || rand[k] == userGuess.toUpperCase){
                    //splits the blank string into an array to write the correct character into the correct index 
                    var blankSplit = blank.split('');
                    blankSplit[k] = userGuess;
                    //rejoin
                    blank= blankSplit.join("");
                    $("#name").text(blank);
                   
                }       
            } 
            //if user guess is not in the target word, one is added to the turns and the guess is shown
            if(!rand.includes(userGuess)){
                turns++;
                $("#turns").text(6-turns);
                var newGuess = $("<div>");
                newGuess.text(userGuess+", ");
                $("#guesses").append(newGuess);
                
            }

            bodyParts();


            //alerts if you win!
            if(rand == blank){
                alert("Congrats you won!")
            }
            
            
        }
      
        $(".reset-button").on("click", function(){
            reset();
        });

       
