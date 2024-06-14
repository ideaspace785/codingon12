import { Component } from "react";

export default class HandlerEx extends Component{
    state={
        message: "Hello World"
    }
    handleClick = () =>{
        this.setState({message: "Goodbye World!"});

    }
    render(){
        return(
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.handleClick}>Click!</button>
            </div>
        )
    }
}