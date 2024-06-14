import React from 'react';
import PropTypes from 'prop-types';
export default function Pr3({text="이건 기본 text props입니다.", valid}){
    return (
        //valid : 함수 (부모에서 넘겨줄 때 함수를 넘겨줘라)
        <div>
            <p>{text}</p>
            <button onClick={valid}>console message</button>
        </div>
    );
}


// PropTypes를 사용하여 text를 필수로 지정
Pr3.propTypes = {
  text: PropTypes.string.isRequired,
};

