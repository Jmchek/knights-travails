export default function knightTravails() {
    let gameBoard = [];

    for (let i = 0; i < 8; i++){
        gameBoard[i] = [0, 1, 2, 3, 4, 5, 6, 7];
        if(i === 3){
            gameBoard[i] = [3,2,1,2];
        }
    }

    const knightMoves = ([i, j]) => {
        console.log(gameBoard[i, j]);
    }

    return {knightMoves};
}