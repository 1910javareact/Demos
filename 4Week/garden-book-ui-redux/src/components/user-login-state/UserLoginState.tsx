import React from 'react'
import { Garden } from '../../models/garden';

interface IUserLoginStateState {
    user: Garden
}


export class UserLoginStateComponent extends React.Component<any, IUserLoginStateState>{
    constructor(props: any) {
        super(props)
        this.state = {
            user: new Garden('', 0, 0, '', '', [])
        }
    }

    updateLoggedInUser = (user: Garden) => {
        this.setState({
            ...this.state,
            user
        })
    }

    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}