import { ITicTacToeState } from ".";
import { ticTacToeTypes } from "../action-mappers/tic-tac-toe-action-mapper";

const initialState: ITicTacToeState = {
    board: [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ],
    xsTurn: true,
    oWins: 0,
    xWins: 0,
    playable: false
}

export const tictactoeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ticTacToeTypes.CELL_CLICK: {
            if (state.playable) {
                let cell = state.board[action.payload.x][action.payload.y]
                if (cell !== ' ') {
                    return state
                }
                //get new board with cell filled
                let newBoard = makeBoard(action.payload.x, action.payload.y, state)
                // see if there is a winner
                let winner = checkWinner(newBoard)
                if (winner) {
                    //winner is player x
                    if (winner === 'X') {
                        return {
                            ...state,
                            board: newBoard,
                            xWins: state.xWins + 1,
                            playable:false
                        }
                        //winner is player o
                    } else {
                        return {
                            ...state,
                            board: newBoard,
                            oWins: state.oWins + 1,
                            playable:false
                        }
                    }

                } else {
                    //look for tie
                    if(checkFull(newBoard)){
                        return{
                            ...state,
                            board:newBoard,
                            playable:false
                        }

                    }else {
                        // move forward one turn
                        return {
                            ...state,
                            board: newBoard,
                            xsTurn: !state.xsTurn
                        }
                    }
                }
                //game is not playable
            } else {
                return state
            }
        }
        case ticTacToeTypes.RESET_GAME: {
            return {
                ...state,
                board: initialState.board,
                xsTurn: true,
                playable: true
            }
        }
        default:
            return state
    }

}


function makeBoard(x: number, y: number, state: any) {
    let newBoard = [...state.board]
    newBoard[0] = [...state.board[0]]
    newBoard[1] = [...state.board[1]]
    newBoard[2] = [...state.board[2]]

    if (state.xsTurn) {
        newBoard[x][y] = 'X'
    } else {
        newBoard[x][y] = 'O'
    }
    return newBoard
}



const checkWinner = (board: string[][]) => {
    //all horizontals
    let res = ''
    for (const row of board) {
        if ((row[0] === row[1]) && (row[0] === row[2]) && row[0] !== ' ') {
            res = row[0]
        }
    }
    res ? true : res = board[0].reduce((total, cell, index) => {
        if ((cell === board[1][index]) && (cell === board[2][index]) && cell !== ' ') {
            return total + cell
        } else {
            return total + ''
        }
    }, '')
    if (((board[0][0] === board[1][1] && board[0][0] === board[2][2])
        || (board[2][0] === board[1][1] && board[2][0] === board[0][2]))
        && board[1][1] !== ' ') {
        res = board[1][1]
    }

    return res
}

function checkFull(board:string[][]){
    for(const row of board){
        for(const cell of row){
            if(cell === ' '){
                return false
            }
        }
    }
    return true
}
