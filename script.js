// document.getElementById("p2").innerHTML = "Hello" + " MY NAMe is Dhrueev";
// document.getElementById("p3").innerHTML = "Hello" + " MY NAMe is Dhrueev";
// // let username = window.prompt("whats your name");
// // console.log(username)
// document.getElementById("p3").innerHTML = "Hello " + username;

var username;
function set_username() 
{
    username = document.getElementById("username_id").value;
    document.getElementById("label3").innerHTML = " Hello " + username + " Welcome To Ninax " + '\n' + "Which Game You Want To Play";
}

var game;
function set_game() {
    game = document.getElementById("game_id").value;
    if(game == "Tic-Tac-Toe")
    {
        var newURL = "index_tictactoe.html";
        document.getElementById("game_link_id").href = newURL;
    }
    else if (game == "Snake-Game")
    {
        var newURL = "index_snake.html";
        document.getElementById("game_link_id").href = newURL;
    }
    else if (game == "Chess")
    {
        var newURL = "index_chess.html";
        document.getElementById("game_link_id").href = newURL;
    }
    else if (game == "Word-Game")
    {
        var newURL = "index_wordgame.html";
        document.getElementById("game_link_id").href = newURL;
    }
    else if (game == "flappybird")
    {
        var newURL = "index_flappybird.html";
        document.getElementById("game_link_id").href = newURL;
    }
    else if (game == "Tetris")
    {
        var newURL = "index_tetris.html";
        document.getElementById("game_link_id").href = newURL;
    }
}