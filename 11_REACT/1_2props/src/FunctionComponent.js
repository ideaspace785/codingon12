import PropTypes from 'prop-types'

export default function FunctionComponent(props) {
    console.log(props.name);
    return (
        <div>
            <h1>Hi {props.name}</h1>
            <div>여기는 FunctionComponent</div>
            <div>{props.children}</div>
        </div>
    );
}

FunctionComponent.defaultProps = {
    name : '홍길동'
}

FunctionComponent.propTypes = {
    name: PropTypes.string
}