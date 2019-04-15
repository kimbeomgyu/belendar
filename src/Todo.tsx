import * as React from 'react';
import { useState } from 'react';
import './App.css';

const Todo = () => {
  const [todoList, setTodoList] = useState(new Array());
  const [text, setText] = useState('');

  const pushText = () => {
    const set = todoList.slice();
    set.push(text);
    setTodoList(set);
  };

  const deleteText = (e: string) => {
    const set = todoList.filter(el => {
      return e !== el ? el : null;
    });
    setTodoList(set);
  };
  return (
    <div className="todo">
      <ul>
        {todoList.map((el: string) => (
          <li key={el + 'text'}>
            {el}
            <button children="삭제" onClick={() => deleteText(el)} />
          </li>
        ))}
      </ul>
      <input type="text" onChange={e => setText(e.target.value)} />
      <button onClick={pushText} children="넣기" />
      <span style={{ color: '#f26d5b' }} children="즁복입니다" />
    </div>
  );
};

export default Todo;
