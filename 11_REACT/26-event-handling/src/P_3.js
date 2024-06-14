import{ useState } from 'react';

const P_3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const Btn = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ border: '2px solid orange', padding: '10px', width: '200px' }}>
      <button onClick={Btn}>
        {isVisible ? '사라져라' : '보여라'}
      </button>
      {isVisible && <p>안녕하세요</p>}
    </div>
  );
};

export default P_3;
