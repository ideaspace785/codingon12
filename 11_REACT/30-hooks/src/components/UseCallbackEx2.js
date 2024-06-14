import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export default function UseCallbackEx2({ postId }) {
    const [post, setPost] = useState({});

    // [before]
    /* const getPost = async () => {
        console.log('data fetching...');
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(res.data);
    } */

    // [after]
    // useCallback 훅으로 메모리제이션 -> 의존성 배열에 postId 변경될 때
    // 함수가 다시 호출되지 않는다
    const getPost = useCallback(async () => {
        console.log('data fetching...');
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        setPost(res.data);
    }, [postId])

    // useEffect 의존성 배열에 "함수"
    // 컴포넌트가 리렌더링 -> 함수 재생성 (주소값 변경) -> getPost 호출
    useEffect(() => {
        getPost()
    }, [getPost])

    return (
        <div>
            <h1>UseCallbackEx2</h1>
            {post.id ? post.title : 'Loading...'}
        </div>
    )
}
