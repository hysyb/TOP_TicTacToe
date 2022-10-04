let ticTacToe = ["x","o","x","o","x","o","x","o","x"]

//let square0 = document.getElementById('0');
//square0.addEventListener('click', function(e) {gameLoop(this.id)})

let squares = document.querySelectorAll('.square');
let turn = 0;
let circleTurn = false;

for (i=0;i<squares.length;i++){
    squares[i].addEventListener('click', function(e) { gameLoop(this.id)});
};

function gameLoop(id) {
    if (squares[id].innerText == ""){
        if (circleTurn){
            squares[id].innerText = 'o';
        }else{
            squares[id].innerText = 'x';
        }
    } 
    if (checkwin('x')){
        console.log('X wins');
    }else if (checkwin('o')){
        console.log('O wins')
    }
    circleTurn = !circleTurn;
}
function checkwin(sign){
        if (squares[0].innerHTML == sign && squares[1].innerHTML == sign && squares[2].innerHTML == sign){
            return true;
        }else  if (squares[3].innerHTML == sign && squares[4].innerHTML == sign && squares[5].innerHTML == sign){
            return true;
        }else  if (squares[6].innerHTML == sign && squares[7].innerHTML == sign && squares[8].innerHTML == sign){
            return true;
        }else if (squares[0].innerHTML == sign && squares[3].innerHTML == sign && squares[6].innerHTML == sign){
            return true;
        }else if (squares[1].innerHTML == sign && squares[4].innerHTML == sign && squares[7].innerHTML == sign){
            return true;
        }else if (squares[2].innerHTML == sign && squares[5].innerHTML == sign && squares[8].innerHTML == sign){
            return true;
        }else if (squares[0].innerHTML == sign && squares[4].innerHTML == sign && squares[8].innerHTML == sign){
            return true;
        }else  if (squares[2].innerHTML == sign && squares[4].innerHTML == sign && squares[6].innerHTML == sign){
            return true;
        }
        else return false;
}
function checkSquare(id){
    console.log(squares[id].innerHTML);
}