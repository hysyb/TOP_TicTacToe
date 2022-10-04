let ticTacToe = ["x","o","x","o","x","o","x","o","x"]

//let square0 = document.getElementById('0');
//square0.addEventListener('click', function(e) {gameLoop(this.id)})

let squares = document.querySelectorAll('.square');
let turn = 0;

for (i=0;i<squares.length;i++){
    squares[i].addEventListener('click', function(e) { gameLoop(this.id)});
};

function gameLoop(id) {
    if (checkwin == true){
        console.log(ticTacToe[id] + 'wins');
    }
    if (squares[id].innerText == ""){
        squares[id].innerText = ticTacToe[turn];
        turn=turn+1;
    } 
}

function checkwin(){
        if (squares[0].innerText == 'x' && squares[1].innerText == 'x' && squares[2].innerText == 'x'){
            return true;
        }
        else return false;
}