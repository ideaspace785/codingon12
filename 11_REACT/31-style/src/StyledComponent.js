import React from 'react'
import styled from 'styled-components'


// CSS in JS: js 안에 css를 작성
// styled-components, emotion, styled-jsx, ...
// 각 컴포넌트마다 격리된 스타일 적용 가능

const StyledContainer=styled.div`
    display: flex;
`;
const StyledBox= styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.$bgColor || 'blue'};
    &:hover{
        transform: translateY(-20px);
    }
`;
export default function StyledComponent() {
  return <StyledContainer>
    <StyledBox/>
    <StyledBox $bgColor='pink'/>
    <StyledBox $bgColor='red'/>


  </StyledContainer>;
}
