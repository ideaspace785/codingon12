import { useState } from "react";

const P1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const Btn = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ border: '1px solid black'}}>
      <button onClick={Btn}>
        {isVisible ? '사라져라' : '보여라'}
      </button>
      {isVisible && <p>안녕하세요</p>}
    </div>
  );
};

export default P1;
