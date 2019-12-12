import React, { SyntheticEvent } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
//import { gardenBookLogin } from '../../remote/garden-book-clients/garden-book-user'
import { Garden } from '../../models/garden'

//we need to pass in
interface ILoginComponentProps{
    user:Garden
    gbLogin:(u:string,p:string)=>void
}



export class LoginComponent extends React.Component<ILoginComponentProps, any>{
    constructor(props: any) {
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }
    updateUsername = (e:any)=>{
        this.setState({
            ...this.state,
            username: e.target.value
        })
    }
    updatePassword = (e:any)=>{
        this.setState({
            ...this.state,
            password: e.target.value
        })
    }

    submitLogin = async (e:SyntheticEvent) => {
        e.preventDefault()
        this.props.gbLogin(this.state.username, this.state.password)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.submitLogin}>
                    <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <Input value={this.state.username} onChange={this.updateUsername} type="text" name="username" id="exampleUsername" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input value={this.state.password} onChange={this.updatePassword} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                    <Button color='danger'>Submit</Button>
                </Form>
                <p>{this.props.user.name}</p>
            </div>
        )
    }
}