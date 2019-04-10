import * as React from 'react';
import { useState } from 'react';
import './App.css';

const Calendar = () => {
  const day = ['월', '화', '수', '목', '금', '토', '일'];
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate()
  };
  const [nowMonth, setNowMonth] = useState(date.month - 1);
  const onclickPrevMonth = () => {};
  const dayUpdate = (year: number, month: number) => {
    const lastDay = new Date(year, month, 0).getDate();
    return new Array(35).fill(1).map((e, i) => (lastDay >= e + i ? e + i : ''));
  };

  const title = (
    <div className="month">
      <ul>
        <li
          className="prev"
          children="<"
          onClick={
            0 < nowMonth
              ? () => setNowMonth(nowMonth - 1)
              : () => setNowMonth(11)
          }
        />
        <li className="YM">
          <span>{month[nowMonth]}</span>
          <br />
          <span>{date.year}</span>
        </li>
        <li
          className="next"
          children=">"
          onClick={
            nowMonth < 11
              ? () => setNowMonth(nowMonth + 1)
              : () => setNowMonth(0)
          }
        />
      </ul>
    </div>
  );

  return (
    <div className="Calendar">
      {title}
      <ul className="weeks">
        {day.map(el => (
          <li key={el} children={el} />
        ))}
      </ul>
      <ul className="days">
        {dayUpdate(date.year, date.month).map((el, i) => (
          <li key={i + 1 + 'day'}>
            <div children={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
