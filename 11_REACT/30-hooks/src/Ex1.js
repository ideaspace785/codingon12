import { useState, useMemo } from 'react';

export default function Ex1() {
  const [text, setText] = useState('');
  const [searchWord, setSearchWord] = useState('');

  const countWord = useMemo(() => {
      if (text.trim() && searchWord.trim()) {
        const words = text.split(' ');
        return words.filter((word) => word.includes(searchWord)).length;
      }
      return 0;
    },
    [text, searchWord]
  );

  return (
    <>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='텍스트를 입력하세요'
      />
      <input
        type='text'
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder='찾을 단어를 입력하세요'
      />
      <p>
        "{searchWord}" 단어의 빈도수: {countWord}
      </p>
    </>
  );
}