import React from 'react'
//Every single Component needs to start with a capital letter
//otherwise, babel will not be able to identify it as a component
export class FirstComponent extends React.Component {
    //I made a class field called batch name
    //and set it to the batchs name
    batchname = '1910 Java React Extended'
    //when dealing with class components, we need a function called render
    //that returns some jsx, with a single root tag
    render() {
        return (
            <div>
                {/* This is called one way data binding
                When I change the variable batchname, this jsx will trigger a re-render
                its one way, because if the user changes this value, like in a form
                it does not update the variable */}
                <p>Hey {this.batchname}, you guys exist</p>
            </div>
        )
    }
}