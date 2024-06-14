//함수형
export default function SyntheticEvent(){
    function syntheticEvent(e) {
        console.log("Synthetic Event btn Click!")
        console.log(e)
    }
    function printInputValue(e){
        console.log(e.target.value)
    }
    return(
        <div>
            {/* 합성이벤트 객체를 확인해보기 */}
            <button onClick={syntheticEvent}>Synthetic Event 콘솔에 찍기</button>
            <br />
            {/* input 값의 변화를 보고 싶을 때 */}
            <input type="text" onChange={printInputValue}/>
        </div>
    )
} 