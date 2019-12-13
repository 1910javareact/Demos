import { IState } from "../../reducers";
import { connect } from "react-redux";
import { TicTacToeComponent } from "./TicTacToeComponent";
import {ticTacToeCellClick} from "../../action-mappers/tic-tac-toe-action-mapper"





const mapStateToProps = (state: IState) => {
    return {
        tictactoe:state.tictactoe
    }
}

const mapDispatchToProps = {
    //we put function names here
    ticTacToeCellClick
}

export default connect(mapStateToProps,mapDispatchToProps)(TicTacToeComponent)