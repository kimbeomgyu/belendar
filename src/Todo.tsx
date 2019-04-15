import * as React from 'react';
import { useState } from 'react';
import './App.css';

const Todo = () => {
  const [todoList, setTodoList] = useState(new Array());
  const [text, setText] = useState('');
  const [isOverlap, setIsOverlap] = useState(true);

  const pushText = (e: any) => {
    const set = todoList.slice();

    if (set.includes(text)) {
      setIsOverlap(false);
    } else {
      set.push(text);
      setTodoList(set);
      setIsOverlap(true);
      e.parentElement.children[1].value = '';
    }
  };

  const deleteText = (value: string) =>
    setTodoList(todoList.filter(el => (value !== el ? el : null)));

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
      <button onClick={e => pushText(e.target)} children="넣기" />
      {isOverlap ? (
        <span />
      ) : (
        <span style={{ color: '#f26d5b' }} children="즁복입니다" />
      )}
    </div>
  );
};

export default Todo;
