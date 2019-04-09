import React, { Component } from 'react';
import './App.css';

class Calendar extends Component {
  state = {
    day: ['월', '화', '수', '목', '금', '토', '일'],
    month: [
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
    ],
    date: {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      day: new Date().getDate()
    }
  };
  dayUpdate = (year, month) => {
    const lastDay = new Date(year, month, 0).getDate();
    return new Array(35).fill(1).map((e, i) => (lastDay >= e + i ? e + i : ''));
  };

  month() {
    const { month, year } = this.state.date;
    return (
      <div className="month">
        <ul>
          <li className="prev" />
          <li className="next" />
          <li>
            {this.state.month[month - 1]}
            <br />
            <span>{year}</span>
          </li>
        </ul>
      </div>
    );
  }
  render() {
    const { year, month } = this.state.date;
    return (
      <div className="Calendar">
        {this.month()}
        <ul className="weeks">
          {this.state.day.map(el => (
            <li key={el}>
              <div children={el} />
            </li>
          ))}
        </ul>
        <ul className="days">
          {this.dayUpdate(year, month).map((el, i) => (
            <li key={i + 1 + 'day'}>
              <div children={el} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Calendar;
