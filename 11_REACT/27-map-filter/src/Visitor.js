import React, { useState } from 'react';

function Visitor() {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [entries, setEntries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchField, setSearchField] = useState('author');
    const [editIndex, setEditIndex] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    function addEntry() {
        if (editIndex !== null) {
            const updatedEntries = entries.map((entry, index) =>
                index === editIndex ? { author, title } : entry
            );
            setEntries(updatedEntries);
            setEditIndex(null);
        } else {
            setEntries([...entries, { author, title }]);
        }
        setAuthor('');
        setTitle('');
    }

    const handleEdit = (index) => {
        setAuthor(entries[index].author);
        setTitle(entries[index].title);
        setEditIndex(index);
    };

    const doubleClick = (index) => {
        const newEntries = entries.filter((_, i) => i !== index);
        setEntries(newEntries);
    };

    const search = () => {
        const results = entries.filter((entry) =>
            entry[searchField].includes(searchTerm)
        );
        setSearchResults(results);
    };

    return (
        <div>
            <div>
                <label>작성자: </label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label> 제목: </label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={addEntry}>{editIndex !== null ? '수정' : '작성'}</button>
            </div>
            <div>
                <select value={searchField} onChange={(e) => setSearchField(e.target.value)}>
                    <option value="author">작성자</option>
                    <option value="title">제목</option>
                </select>
                <input
                    type="text"
                    placeholder="검색어"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={search}>검색</button>
            </div>
            <h2>목록</h2>
            <table border='1'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>수정</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((entry, index) => (
                        <tr key={index} onDoubleClick={() => doubleClick(index)}>
                            <td>{index + 1}</td>
                            <td>{entry.title}</td>
                            <td>{entry.author}</td>
                            <td>
                                <button onClick={() => handleEdit(index)}>수정</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>검색 결과</h2>
            <table  border='1'>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map((entry, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{entry.title}</td>
                            <td>{entry.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Visitor;
