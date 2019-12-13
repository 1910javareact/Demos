import { IState } from "../../reducers";
import { connect } from "react-redux";
import { TicTacToeComponent } from "./TicTacToeComponent";
import {ticTacToeCellClick, newTicTacToeGame} from "../../action-mappers/tic-tac-toe-action-mapper"





const mapStateToProps = (state: IState) => {
    return {
        tictactoe:state.tictactoe
    }
}

const mapDispatchToProps = {
    //we put function names here
    ticTacToeCellClick,
    newTicTacToeGame
}

export default connect(mapStateToProps,mapDispatchToProps)(TicTacToeComponent)