import { Component } from "react";
duu
export default class Counter extends Component{
    state={
        number:0,
    };
    render(){
        const {number}= this.state;
        return <div>
            {/* <h1>{this.state.number}</h1> */}
            <h1>{number}</h1>

            {/* Inline Function ()=> */}
            <button onClick={()=>{
                this.setState({
                    // number:this.state.number+1  이렇게 써도 되는데
                    number: number+2
                });
            }} >+2</button>
            {/* --------------------------------------------------------- */}
            <button onClick={()=>{
                this.setState((prevState)=>{
                    return {
                       number: prevState.number-1
                    }
                })
            }}>-1</button>
        </div>
    }
}