import React from 'react'
import { Table } from 'reactstrap'
import { ITicTacToeState } from '../../reducers';

interface ITicTacToeProps{
    tictactoe:ITicTacToeState
    ticTacToeCellClick:(x:number, y:number)=>void
}

export class TicTacToeComponent extends React.Component<ITicTacToeProps,any>{

    componentDidMount(){
        console.log(this.props);
        
    }

    cellClick = (x:number,y:number) => {
        
    }

    render(){
        return (
            <div>
                <Table bordered>
                <tbody>
                    <tr>
                        <td onClick={()=>this.props.ticTacToeCellClick(0,0)}>{this.props.tictactoe.board[0][0]}</td>
                        <td onClick={()=>this.props.ticTacToeCellClick(0,1)}>{this.props.tictactoe.board[0][1]}</td>
                        <td onClick={()=>this.props.ticTacToeCellClick(0,2)}>{this.props.tictactoe.board[0][2]}</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.props.ticTacToeCellClick(1,0)}>{this.props.tictactoe.board[1][0]}</td>
                        <td onClick={()=>this.props.ticTacToeCellClick(1,1)}>{this.props.tictactoe.board[1][1]}</td>
                        <td onClick={()=>this.props.ticTacToeCellClick(1,2)}>{this.props.tictactoe.board[1][2]}</td>
                    </tr>
                    <tr>
                        <td onClick={()=>this.props.ticTacToeCellClick(2,0)}>{this.props.tictactoe.board[2][0]}</td>
                        <td onClick={()=>this.props.ticTacToeCellClick(2,1)}>{this.props.tictactoe.board[2][1]}</td>
                        <td onClick={()=>this.props.ticTacToeCellClick(2,2)}>{this.props.tictactoe.board[2][2]}</td>
                    </tr>
                </tbody>
                </Table>
            </div>
        )
    }

}