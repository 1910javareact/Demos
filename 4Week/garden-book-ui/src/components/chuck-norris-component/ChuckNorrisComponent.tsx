import React from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
import {CNDBGetJoke} from '../../remote/chuck-norris-clients/chuck-joke'

interface IChuckNorrisState{
    joke:string
}


//the first generic after react component is the types of props
//the second generic, is the types of state
export class ChuckNorrisComponent extends React.Component<any,IChuckNorrisState> {
    //every component has a special object called state
    //state is where we should keep all of our data for a component
    //this is because, there is a special function for updating state
    //and this function will trigger a rerender
    constructor(props: any) {
        super(props)
        this.state = {
            joke: 'this is a joke placeholder',
        }
        this.getNewJoke = this.getNewJoke.bind(this)//bind is a special function provided by js, to change the scope of the this keyword
    }

    getNewJokeArrow = async ()=>{
        //arrow functions, don't get there own this scope
        //they always inherit this from a scope above them
        //this.setState this will always go right to the class
        let joke = await CNDBGetJoke()
        //set state is a function
        //when we call it, we pass in an object that is the new state
        //it will trigger a re render
        this.setState({
            ...this.state,
            joke:joke//this is an es6 feature, its part of enhanced object literals
        })
    }

   async getNewJoke(){
        let joke = await CNDBGetJoke()
        //set state is a function
        //when we call it, we pass in an object that is the new state
        //it will trigger a re render
        this.setState({
            ...this.state,
            joke:joke//this is an es6 feature, its part of enhanced object literals
        })
    }

    //we have some special lifecycle methods
    //these are called hooks, because they allow us to hook code into the react component lifecycle
    
    //this will get run, exactly once, when the component gets put on the page
    async componentDidMount(){
        await this.getNewJoke()
    }

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Chuck Norris Jokes Here</h1>
                        <p className="lead">{this.state.joke}</p>
                        <Button outline onClick={this.getNewJoke} color="info">Get Joke</Button>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default ChuckNorrisComponent