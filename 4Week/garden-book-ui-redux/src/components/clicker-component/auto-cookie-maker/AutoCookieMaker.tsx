import React from 'react'
import { Button } from 'reactstrap'


interface IAutoCookieMakerProps{
    itemCount:number,
    buyFunction:()=>void,
    generateCookies:()=>void,
    interval:number,
    name:string
}

//a pure component, is one that does not have any state
//it takes all of its required info in as props

//this is the dumb component
export class AutoCookieMaker extends React.PureComponent<IAutoCookieMakerProps>{

    componentDidMount(){
        setInterval(this.props.generateCookies, this.props.interval)
    }

    render(){
        return(
            <div>
                <p>{this.props.name}s: you have {this.props.itemCount}</p>
                <Button onClick={this.props.buyFunction} outline color="danger">Buy One</Button>
            </div>
        )
    }
}