import React from 'react'

interface ILifecycleProps {
    name: string
}

export class LifecycleComponent extends React.Component<ILifecycleProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            message: 'I am Alive',
            numUpdates: 0,
            realUpdate: false
        }
    }

    //this lifecycle, runs once, when the component finished mounting
    //very useful for fetching inital data
    componentDidMount() {
        this.setState({
            ...this.state,
            message: 'I have mounted',
            realUpdate: true
        })
    }

    //this lifecycle get called after every single update
    componentDidUpdate() {
        //this means, you have to be very careful calling state updates in this lifecycle method
        //you can setState, but you need some selection for doing it
        //it needs to be false, probably most of the time
        if (this.state.realUpdate) {
            this.setState({
                ...this.state,
                numUpdates: this.state.numUpdates + 1,
                realUpdate: false
            })
        }
    }

    componentWillUnmount(){
        console.log('We are destroying the cycle of life');
        
    }

    render() {
        return (
            <div>
                {/* we are going to be passed in a name, from whoever makes us */}
                <p>{this.props.name}</p>
                {/* we are also going to display a message, from our state */}
                <p>{this.state.message}</p>
                <p>Number of Updates: {this.state.numUpdates}</p>
            </div>
        )
    }

}

