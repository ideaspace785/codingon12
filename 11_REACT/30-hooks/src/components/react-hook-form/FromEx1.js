// import React from 'react'
// import {useForm} from 'react-hook-form'


// export default function FromEx1() {
//     const { 
//         register,
//         handleSubmit,
//         formState: {errors},
//     }=useForm();
//     const onValid= (data)=>{
//         console.log('onValid', data);
//     }
//     const onInValid = (err)=>{
//         console.log("onInValid", err)
//     }
//   return (
//     <div>
//         <form onSubmit={handleSubmit(onValid, onInValid)}>
//             <input type="text"placeholder='홍길동'
//             {...register('username',{required:'이름은 필수 항목입니다'})} />
//             {errors.username?.message}
//             <br />
//             <input type="text" placeholder='나이'
//             {...register('age', { 
//             required: '나이는 필수 항목입니다.',
//             min: {
//             value: 0, 
//             message: '0 이상의 숫자만 입력 가능합니다.'
//         }
// })} 
// />
// {errors.age?.message}
// <button>Submit</button>
// </form>
//     </div>
//   )
// }
//해답
import { useForm } from 'react-hook-form';

export default function FromEx1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>react-hook-form 실습</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="이름"
          {...register('username', { required: '이름은 필수 항목입니다.' })}
        ></input>
        {errors.username && (
          <div style={{ color: 'red' }}>{errors.username.message}</div>
        )}
        <br />
        <input
          type="text"
          placeholder="나이"
          {...register('age', {
            validate: {
              useNumber: (v) =>
                Number(v) >= 0 || '0이상의 숫자만 입력 가능합니다.',
            },
          })}
        ></input>
        {errors.age && <div style={{ color: 'red' }}>{errors.age.message}</div>}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
}