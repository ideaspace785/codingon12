// import{ Component } from 'react';

// class P_2 extends Component {
//   // state = {
//   //   message:'검정색 글씨',
//   //   color: 'black'
//   // };

//   // handleRedClick = () => {
//   //   this.setState({ 
//   //     message: '빨간색 글씨',
//   //     color: 'red'
//   //   });
//   // }

//   // handleBlueClick = () => {
//   //   this.setState({ 
//   //     message: '파란색 글씨',
//   //     color: 'blue'
//   //   });
//   // }

//   // render() {
//   //   return (
//   //     <div>
//   //       <p style={{ color: this.state.color }}>{this.state.message}</p>
//   //       <button onClick={this.handleRedClick}>빨간색</button>
//   //       <button onClick={this.handleBlueClick}>파란색</button>
//   //     </div>
//   //   );
//   // }
// }

// export default P_2;




// ----------------------------------------------------------------------------------------------
//문제 풀이

import React, {useState} from "react";

export default function P_2(){
  const [textInfo, changeTextInfo] = useState({
    color:'black',
    text:"검정색",
  });
  const handleText = (color, e) =>{
    //color, text 내용 둘다 변경
    changeTextInfo({color: color, text: e.target.innerText})
  }
    return (
      <div>
        <h1 style={{color:textInfo.color}}>{textInfo.text} 글씨</h1>
        <button onClick={(e) => handleText('red', e )}>빨간색</button>
        <button onClick={(e) => handleText('blue', e )}>파란색</button>

      </div>
    )
}
