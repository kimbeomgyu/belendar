import * as React from 'react';
import { useState } from 'react';
import './App.css';

const Calendar = () => {
  // 지정 변수들
  const day = ['월', '화', '수', '목', '금', '토', '일'];
  const date = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate()
  };
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

  // useState
  const [nowMonth, setNowMonth] = useState(date.month - 1);
  const [nowYear, setNowYear] = useState(date.year);

  // 함수들
  function dayUpdate(year: number, month: number) {
    const lastDay = new Date(year, month, 0).getDate();
    return new Array(35).fill(1).map((e, i) => (lastDay >= e + i ? e + i : ''));
  }
  function prevMonthUpdate() {
    if (0 < nowMonth) {
      setNowMonth(nowMonth - 1);
    } else {
      setNowMonth(11);
      setNowYear(nowYear - 1);
    }
  }
  function nextMonthUpdate() {
    if (nowMonth < 11) {
      setNowMonth(nowMonth + 1);
    } else {
      setNowMonth(0);
      setNowYear(nowYear + 1);
    }
  }
  function now() {
    setNowMonth(date.month - 1);
    setNowYear(date.year);
  }

  // 년,월 표시하는 부분
  const year = (
    <div className="month">
      <ul>
        <li className="prev" children="<" onClick={prevMonthUpdate} />
        <li className="YM">
          <span>{month[nowMonth]}</span>
          <br />
          <span>{nowYear}</span>
        </li>
        <li className="next" children=">" onClick={nextMonthUpdate} />
      </ul>
    </div>
  );

  // 주단위 표시하는 부분
  const weeks = (
    <div>
      <ul className="weeks">
        {day.map(el => (
          <li key={el} children={el} />
        ))}
      </ul>
    </div>
  );

  // 날짜 표시하는 부분
  const days = (
    <div>
      <ul className="days">
        {dayUpdate(date.year, date.month).map((el, i) => (
          <li key={i + 1 + 'day'}>
            <div children={el} />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="Calendar">
      <button className="now" onClick={now} children="지금 이 순간" />
      {year}
      {weeks}
      {days}
    </div>
  );
};

export default Calendar;
