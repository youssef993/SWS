import { render } from '@testing-library/react';
import React from 'react'
import Child from './child';
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            childResponse : ""
        }
        this.myChildCallMe = this.myChildCallMe.bind(this);
    }

myChildCallMe(param){
this.setState({
    childResponse : param
})
}


render(){
    return(
        <div>
            <h3>I'm the Parent</h3>
            <Child name="MAX" call={this.myChildCallMe}/>
    <p>{ this.state.childResponse}</p>
        </div>
    );
}


}
export default Parent;