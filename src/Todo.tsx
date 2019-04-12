import * as React from 'react';
import { useState } from 'react';
import './App.css';

const Todo = () => {
  const [todoList, setTodoList] = useState([
    '커밋하기',
    '일찍일어나기',
    '매일매일 고민하기'
  ]);
  const [text, setText] = useState('');

  function pushText() {
    const set = todoList.slice();
    set.push(text);
    setTodoList(set);
  }

  return (
    <div className="todo">
      <ul>
        {todoList.map((el: string) => (
          <li key={el + 'text'} children={el} />
        ))}
      </ul>
      <input type="text" onChange={e => setText(e.target.value)} />
      <button onClick={pushText} children="넣기" />
    </div>
  );
};

export default Todo;
