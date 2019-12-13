export const ticTacToeTypes = {
    CELL_CLICK: 'TICTACTOE_CELL_CLICK'
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