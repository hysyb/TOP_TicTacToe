let squares = document.querySelectorAll('.square');
let turn = 0;
let circleTurn = false;
let winScreenX = document.getElementById('Xwin');
let winScreenO = document.getElementById('Owin');
let drawScreen = document.getElementById('Draw');
let restartBtn = document.querySelectorAll('.restartButton');

for (i=0;i<squares.length;i++){
    squares[i].addEventListener('click', function(e) { gameLoop(this.id)});
};
for (i=0;i<restartBtn.length;i++){
restartBtn[i].addEventListener('click', ()=>reset());
}

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
        winScreenX.classList.remove('hide');


    }else if (checkwin('o')){
        console.log('O wins')
        winScreenO.classList.remove('hide');
    }else if (turn == 8){
        drawScreen.classList.remove('hide');
        return;
    }
    circleTurn = !circleTurn;
    turn++;
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
function reset(){
    for (i=0;i<squares.length;i++){
        squares[i].innerHTML = '';
    }
    winScreenO.classList.add('hide');
    winScreenX.classList.add('hide');
    drawScreen.classList.add('hide');
    turn = 0;
    
}