import { Component } from "react";
import PropTypes from 'prop-types'
class ClassComponent extends Component{
    render(){
        const {name, children}= this.props;
        return(
            <div>
            <h1>Hi {name}</h1>
            <div>여기는 FunctionComponent</div>
            <div>{children}</div>
        </div>
        )

    }
}
ClassComponent.defaultProps = {
    name : 'defaultProps'
}

ClassComponent.propTypes = {
    name: PropTypes.string
}
export default ClassComponent;
