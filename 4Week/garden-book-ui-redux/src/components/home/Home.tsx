import React from 'react'
import { FirstComponent } from '../first-component/FirstComponent'
import { LifecycleComponent } from '../lifecycle-component/LifecycleComponent'
import { gardenBookLogin } from '../../remote/garden-book-clients/garden-book-user'

export class Home extends React.Component<any, any>{
    constructor(props:any){
        super(props)
        this.state={
            garden:{}
        }
    }

    async componentDidMount(){
        let garden = await gardenBookLogin('MadisonRocks', 'password')
        this.setState({
            ...this.state,
            garden
        })
    }

    render() {
        console.log(this.state.garden);
        
        return (
            // we have a special tag in react that isn't a real element
            // we call this tag a fragment
            // it look like an empty html tag, and react will treat it as an html tag
            // but it will not get rendered to the real dom
            <>
                <LifecycleComponent name='Lifecycle is Cool' />
                <FirstComponent />
                <FirstComponent />
                <FirstComponent />
                {/* {this.state.garden} */}
            </>
        )
    }
}