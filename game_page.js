var player1_name = localStorage.getItem("keyplayer_1");
var player2_name = localStorage.getItem("keyplayer_2");

var player1_score=0;
var player2_score=0;
var word = "";

var question_turn = "player_1";
var answer_turn = "player_2";

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;

function send()
{
    var get_word = document.getElementById("word").value;
    console.log(get_word);
    
    word = get_word.toLowerCase();
    console.log(word);

    var character1 = word.charAt(1);
    console.log(character1);

    var middle_index_number = Math.floor(word.length/2);
    console.log(middle_index_number);

    var character2 = word.charAt(middle_index_number);
    console.log(character2);

    var last_index_number = word.length - 1;
    console.log(last_index_number);

    var character3 = word.charAt(last_index_number);
    console.log(character3);

    var replace_character1 = word.replace(character1 , "_");
    var replace_character2 = replace_character1.replace(character2 , "_");
    var replace_character3 = replace_character2.replace(character3 , "_");
    console.log(replace_character3);

    var row_question = "<h4 id='question_word'>Q. "+replace_character3+"</h4>";
    var row_answer = "<br>Answer: <input id='answer_word' type='text'>";
    var row_button = "<br><br><button onclick='check()' class='btn btn-success'>Check</button>";

    document.getElementById("output").innerHTML = row_question + row_answer + row_button;
    document.getElementById("word").value = "";
}

function check()
{
    get_answer = document.getElementById("answer_word").value;

    answer = get_answer.toLowerCase();
    console.log("user has answered this - " + answer);

    console.log("question word is - " + word);

    if(answer == word)
    {
        console.log("user has answered correctly");
        if(answer_turn == "player_1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }

        if(answer_turn == "player_2")
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;   
        }
    }

    if(question_turn == "player_1")
    {
        question_turn = "player_2";
        
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }

    else
    {
        question_turn = "player_1";
        
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if(answer_turn == "player_1")
    {
        answer_turn = "player_2";

        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }

    else 
    {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}