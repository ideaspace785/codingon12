import logo from "./logo192.png";
export default function ExComponent(props) {
    const { title, author, price, type } = props;
    return (
        <div>
            <h1>이번주 베스트셀러</h1>
            <img src={logo} />
            <div>{title}</div>
            <div>저자: {author}</div>
            <div>판매가: {price} 원</div>
            <div>구분: {type}</div>
            <hr/>
            <img src="/logo512/png"/>
        </div>
    );
}

ExComponent.defaultProps = {
    title: '혹시 모르는 default 값'
};

