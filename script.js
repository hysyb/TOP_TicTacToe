let squares = document.querySelectorAll('.square');
let turn = 0;
let circleTurn = false;
let winScreenX = document.getElementById('Xwin');
let winScreenO = document.getElementById('Owin');
let drawScreen = document.getElementById('Draw');
let restartBtn = document.querySelectorAll('.restartButton');
let pvpRadio = document.getElementById('pvp');
let pvcRadio = document.getElementById('pvc');
let player2 = 'human';
let playAs = 'x';


for (i=0;i<squares.length;i++){
    squares[i].addEventListener('click', function(e) { gameLoop(this.id)});
};
for (i=0;i<restartBtn.length;i++){
restartBtn[i].addEventListener('click', ()=>reset());
}
pvpRadio.addEventListener('click', () => player2 = 'human');
pvcRadio.addEventListener('click', () => player2 = 'computer');

function gameLoop(id) {
    if (player2 == 'computer'){
        if (squares[id].innerText == ""){
                squares[id].innerText = playAs;
                checkwinner();
            }
        for (i=0;i<squares.length;i++){
            if (squares[i].innerText == ""){
                squares[i].innerText = 'o';
                checkwinner;
                return;
            }
        }
    }else if (squares[id].innerText == ""){
        if (circleTurn){
            squares[id].innerText = 'o';
        }else{
            squares[id].innerText = 'x';
        }
        circleTurn = !circleTurn;
    } 
    checkwinner();
    turn++;
}
//win condition checker
function checkwinner(){
    if (checkwin('x')){
        console.log('X wins');
        winScreenX.classList.remove('hide');


    }else if (checkwin('o')){
        console.log('O wins')
        winScreenO.classList.remove('hide');
    }else if (turn == 9){
        drawScreen.classList.remove('hide');
        return;
    }
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
//clear gameboard
function reset(){
    for (i=0;i<squares.length;i++){
        squares[i].innerHTML = '';
    }
    winScreenO.classList.add('hide');
    winScreenX.classList.add('hide');
    drawScreen.classList.add('hide');
    turn = 0;
    
}