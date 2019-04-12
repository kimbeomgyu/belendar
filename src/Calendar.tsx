import * as React from 'react';
import { useState } from 'react';
import './App.css';

const Calendar = () => {
  // 지정 변수들
  const day = ['일', '월', '화', '수', '목', '금', '토'];
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
  const [nowMonth, setNowMonth] = useState(date.month);
  const [nowYear, setNowYear] = useState(date.year);
  const [nowDay, setNowDay] = useState(date.day);

  // 함수들
  function dayUpdate(year: number, month: number) {
    const week = new Date(`${year}-${month}-1`).getDay();
    const lastDay = new Date(year, month, 0).getDate();
    return new Array(42).fill(1).map((e, i) => {
      if (week > i) {
        return 'x';
      } else if (lastDay >= e + i - week) {
        return e + i - week;
      } else {
        return 'x';
      }
    });
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
    setNowMonth(date.month);
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
        {dayUpdate(nowYear, nowMonth + 1).map((el, i) => (
          <li key={i + 1 + 'day'}>
            <div children={el} />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="Calendar">
      {year}
      <button className="now" onClick={now} children="지금 이 순간" />
      {weeks}
      {days}
    </div>
  );
};

export default Calendar;
