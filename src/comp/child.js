import React from 'react'
import Parent from './parent';
class Child extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name : props.name,
            call : props.call
        }
    }




render(){
    return(
        <div>
            <h3>I'm the Child my name Is {this.state.name}</h3>
            <button onClick={()=>{this.state.call("hello parent")}}>call</button>
        </div>
    );
}


}
export default Child;