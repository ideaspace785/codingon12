import { Component } from 'react'

export default class ClassBind extends Component {
    // 변수 = '필드' 라고 부름
    state = {
        name: 'codingon'
    }

    // 메서드 : 함수

    // #1 클래스 컴포넌트에서 이벤트 쓰기 - 화살표 함수 사용
    // 인자가 없는 경우
    printConsole = () => {
        console.log('this', this); // 현재 컴포넌트
        console.log('printConsole', this.state); // 현재 컴포넌트에 저장된 state
    }

    // 인자 + 이벤트 객체 전달하는 경우
    printConsole2 = (msg) => {
        console.log(msg);
    }

    printConsole3 = (e, msg) => {
        console.log(e);
        console.log(msg);
    }
    render() {
        return (
            <div>
                <h1>Class Component Event</h1>
                <button onClick={this.printConsole}>PrintConsole(인자X)</button>
                <button onClick={() => this.printConsole2('안녕')}>PrintConsole(인자O)</button>
                <button onClick={(e) => this.printConsole3(e, '안녕')}>PrintConsole(인자O, e객체O)</button>
            </div>
        )
    }
}
