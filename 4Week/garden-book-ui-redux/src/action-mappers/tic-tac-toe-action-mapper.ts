export const ticTacToeTypes = {
    CELL_CLICK: 'TICTACTOE_CELL_CLICK',
    RESET_GAME:'TICTACTOE_RESET_GAME'
}


// this is a basic ol' action mapper
//nothing async, so we just return the action and it goes right to dispatch
export const ticTacToeCellClick = (x:number, y:number)=> {
    return{
        type:ticTacToeTypes.CELL_CLICK,
        payload:{
            x,
            y
        }
    }
}

export const newTicTacToeGame =()=>{
    return {
        type:ticTacToeTypes.RESET_GAME
    }
}