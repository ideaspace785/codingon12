
// export default function FoodComponent(props) {
//     console.log(props.name);
//     return (
        // <div>
        //     <h1>This is {props.name} component</h1>
        //     <div>좋아하는 음식 소게</div>
        //     <div>{props.children}</div>
        // </div>
//     );
// }

// FoodComponent.defaultProps = {
//     name : 'This is a food component default props'
// }

import { Component } from "react";

class FoodComponent extends Component {
    render() {
        const { name, children } = this.props;
        return (
            <div>
                <span style={{ color: "red" }}>
                    <h1>This is  <span style={{ color: "red" }}>{name}</span> component</h1>
                </span>
                <div>좋아하는 음식 소개</div>
                <div>{children}</div>
            </div>
        );
    }
}

FoodComponent.defaultProps = {
    name: 'defaultProps'
};

export default FoodComponent;
