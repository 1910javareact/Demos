import { ITicTacToeState } from ".";
import { ticTacToeTypes } from "../action-mappers/tic-tac-toe-action-mapper";

const initialState: ITicTacToeState = {
    board: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ],
    xsTurn:true,
    oWins:0,
    xWins:0
}

export const tictactoeReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case ticTacToeTypes.CELL_CLICK:{
            let newBoard = [...state.board]
            newBoard[0] = [...state.board[0]]
            newBoard[1] = [...state.board[1]]
            newBoard[2] = [...state.board[2]]
            let cell = newBoard[action.payload.x][action.payload.y]
            if(cell !== ' '){
                return state
            } else {
                if(state.xsTurn){
                    newBoard[action.payload.x][action.payload.y] = 'X'
                } else{
                    newBoard[action.payload.x][action.payload.y] = 'O'
                }
                let winner = checkWinner(newBoard)
                if(winner){
                    if(winner==='X'){
                        return{
                            ...state,
                            board:newBoard,
                            xWins: state.xWins + 1
                        }
                    }else{
                        return{
                            ...state,
                            board:newBoard,
                            oWins: state.oWins + 1
                        }
                    }
                     
                } else {
                    return{
                        ...state,
                        board:newBoard,
                        xsTurn: !state.xsTurn
                    }
                }
            }
        }
        default:
            return state
    }

}



const checkWinner = (board:string[][]) => {
    //all horizontals
    let res = ''
    for (const row of board) {
        if((row[0] === row[1])&& (row[0]=== row[2]) && row[0] !== ' '){
            res = row[0]
        }   
    }
    res ? res = res : res = board[0].reduce((total, cell, index)=>{
        if((cell === board[1][index])&& (cell=== board[2][index]) && cell !== ' ' ){
            return total + cell
        }else {
            return total + ''
        }
    }, '') 
    if(((board[0][0] === board[1][1] && board[0][0] === board[2][2])
    || (board[2][0] === board[1][1] && board[2][0] === board[0][2]))
    && board[1][1] !== ' '){
        res = board[1][1]
    }

    return res
}
