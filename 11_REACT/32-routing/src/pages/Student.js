import React from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

function Student() {
  const { name} = useParams();
  const [searchParams, setSearchParams]=useSearchParams();
  const keyWord=searchParams.get('name'); //null 또는 kdt12th
  const navigate= useNavigate();

  return (
    <div>
      <h5>학생의 이름은 <span style={{ color: name === 'kdt' ? 'blue' : name === 'codingon' ? 'green' : 'black' }}>{name}</span> 입니다.</h5>
      {keyWord && <p>실제 이름은 <span style={{ color: 'red' }}>{keyWord}</span></p>}
      <button onClick={() => navigate(-1)}>이전페이지로</button>
    </div>
  );
}

export default Student;
