let ticTacToe = ["x","o","x","o","x","o","x","o","x"]

let grid = document.querySelector('.grid');
function drawGrid(){
    for (i=0;i<ticTacToe.length;i++){
        let newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.textContent = ticTacToe[i];
        grid.appendChild(newSquare);
    }
}
function resetGrid(){
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    for (i=0;i<ticTacToe.length;i++){
        ticTacToe[i] = "";
    }
    drawGrid();
}
function player(name, sign){
    return {name, sign};
}

drawGrid();
