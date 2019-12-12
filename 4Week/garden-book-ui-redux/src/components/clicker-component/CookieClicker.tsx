import React from 'react'
import BigCookie from '../../assests/perfectCookie.png'
import { Prompt } from 'react-router'
import { AutoCookieMaker } from './auto-cookie-maker/AutoCookieMaker'


interface ICookieClickerState {
    numCookies: number,
    numClicks: number,
    numCursors: number,
    numGrandmas: number,
    numFarms: number,
    numTrees: number,
    numSubmarines: number
}

export class CookieClicker extends React.Component<any, ICookieClickerState>{
    constructor(props: any) {
        super(props)
        this.state = {
            numCookies: 0,
            numClicks: 0,
            numCursors: 0,
            numFarms: 0,
            numGrandmas: 0,
            numSubmarines: 0,
            numTrees: 0
        }
    }
    cookieClick = () => {
        this.setState({
            ...this.state,
            numClicks: this.state.numClicks + 1,
            numCookies: this.state.numCookies + 1
        })
    }

    //probably buys a single auto maker
    buyAutoMaker = (cost: number, autoMaker: string) => {
        if (this.state.numCookies < cost) {
        } else {
            let newState = {
                ...this.state,
                numCookies: this.state.numCookies - cost,
            }
            switch (autoMaker) {
                case 'Grandma':
                    newState.numGrandmas++
                    break
                case 'Submarine':
                    newState.numSubmarines++
                    break
                case 'Cursor':
                    newState.numCursors++
                    break
                case 'Farm':
                    newState.numFarms++
                    break
                case 'Tree':
                    newState.numTrees++
                    break
            }
            this.setState(newState)
        }
    }


    autoGenerateCookies = (numMaker: number, cookiePerMaker: number) => {
        this.setState({
            ...this.state,
            numCookies: this.state.numCookies + numMaker * cookiePerMaker
        })
    }

    buyAFarm=()=>{
        this.buyAutoMaker(500, 'Farm')
    }
    farmGenerate=()=>{
        this.autoGenerateCookies(this.state.numFarms, 25)
    }

    render() {
        let generators = [<AutoCookieMaker
            name='Grandma'
            interval={500}
            itemCount={this.state.numGrandmas}
            // this is an advanced manuever
            // we are making an anon function, that calls a named function
            //it calls that function with particular inputs
            buyFunction={() => { this.buyAutoMaker(100, 'Grandma') }}
            generateCookies={() => { this.autoGenerateCookies(this.state.numGrandmas, 5) }}
        />,
        <AutoCookieMaker
        name='Farm'
        interval={1000}
        itemCount={this.state.numFarms}
        buyFunction={this.buyAFarm}
        generateCookies={this.farmGenerate}
        />]

        return (
            <div>
                <div id='cookie-container'>
                    {/* This is called event binding, we pass in the name of a function to use, when an event gets triggered */}
                    <img id='bigCookie' onClick={this.cookieClick} src={BigCookie} alt="This is a large chocolate chip cookie" />
                </div>
                <div id='cookie-info-container'>
                    <p>Number of Cookies: {this.state.numCookies}</p>
                    <p>Number of Clicks: {this.state.numClicks}</p>
                </div>
                <div>
                    {generators}
                </div>
                <Prompt when={this.state.numClicks > 0} message='Are you sure you want to give up your cookies?' />
            </div>

        )
    }

}
export default CookieClicker