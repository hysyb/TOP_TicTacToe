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
        circleTurn = !circleTurn;
    } 
    if (checkwin()){
        console.log(`${circleTurn ? 'o ' : 'x '}` + 'wins');
    }
}
function checkwin(){
        if (squares[0].innerHTML == 'x' && squares[1].innerHTML == 'x' && squares[2].innerHTML == 'x'){
            return true;
        }
        else return false;
}
function checkSquare(id){
    console.log(squares[id].innerHTML);
}