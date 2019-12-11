import React from 'react'
import { FirstComponent } from '../first-component/FirstComponent'
import { LifecycleComponent } from '../lifecycle-component/LifecycleComponent'

export class Home extends React.Component<any, any>{
    render() {
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
            </>
        )
    }
}