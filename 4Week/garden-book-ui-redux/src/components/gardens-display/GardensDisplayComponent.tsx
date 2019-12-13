import React from 'react'
import { Garden } from '../../models/garden'
import { Table } from 'reactstrap'
import { GardensDisplayRowComponent } from './gardens-display-row/GardensDisplayRowComponent'
import { getAllGardens } from '../../remote/garden-book-clients/garden-book-user'
import { RouteComponentProps, Redirect } from 'react-router'

interface IGardensDisplayProps extends RouteComponentProps{
    user:Garden
}

interface IGardensDisplayState{
    allGardens: Garden[]
}

export class GardensDisplayComponent extends React.Component<any, IGardensDisplayState>{
    //is in charge of holding all the gardens
    //it thens creates a gardendisplayrow component for each of those gardens
    //and renders them inside a table
    constructor(props: any) {
        super(props)
        this.state = {
            allGardens: []
        }
    }

    async componentDidMount() {
        try {
            let g = await getAllGardens()
            if (g.status === 200) {
                this.setState({
                    ...this.state,
                    allGardens: g.body
                })
            }
        } catch (e) {
            console.log(e);

        }
    }

    render() {
        let rows = this.state.allGardens.map((e) => {
            return <GardensDisplayRowComponent garden={e} key={'garden ' + e.id} />
        })
        return (
            this.props.user.id ?
                <div>
                    <Table bordered color='danger'>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Username</td>
                                <td>Prettiness</td>
                                <td>Roles</td>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </div>
                :
                //history object is from react router
                //it keeps track of everywhere you have been
                //you can use push to go to a new location or pop to go backwards one
                //this.props.history.push('/login')
                
                // when this component is rendered, it takes you back to the path
                <Redirect to='/login'/>
        )
    }
}