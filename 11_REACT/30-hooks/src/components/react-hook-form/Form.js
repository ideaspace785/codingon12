import React from 'react'
import {useForm} from 'react-hook-form'

export default function Form() {
    const {
        register,               // register :  input 입력 요소에 할당 , value 변경 감지
        handleSubmit,           //form submit 하면 호출이 된다.
        formState: {errors},    // formState: 폼의 상태를 갖고 있는 객체
        watch    
    }=useForm( );
          
    
    //handleSubmit(funcA[, funcB]): 두개의 함수를 받음
    // funcA: 필수, 유효
    
    const onValid= (data)=>{
        console.log('onValid', data);
    }
    const onInValid = (err)=>{
        console.log("onInValid", err)
    }
    console.log('watch username:', watch('username'))

  return (
    <div>
        <h1>React Hook form library demo</h1>
        <form onSubmit={handleSubmit(onValid, onInValid)}>
            <input type="text" placeholder='username' {...register("username", {
                required:'이름을 입력해주세요!',
                minLength: {
                    message:'이름을 두글자 이상 작성해주세요',
                    value:2
                }
                 })} />
            {/* name="username 했던거와 똑같은 기능 {...register("username")}" */}

            {/* 에러 메시지 */}
            {errors.username?.message}
            <br />
        <input type="email" placeholder='email(gmail)'{
            ...register('email', {
                required:'이메일을 입력해주세요',
                validate:{
                    //useGmail 함수 이름은 알아서 지정, 한줄 자리라 return 생략
                    useGmail: (value) => value.includes('gmail.com') || 'gmail로만 가입 가능합니다'
                }
            })
        } />
        {errors.email?.message}
        <br />
        <button>Submit</button>
        </form>

    </div>
  )
}
