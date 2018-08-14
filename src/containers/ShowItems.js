import React from 'react';
import ProgressBar from './ProgressBar';
import ToDoList from './ToDoList';
import "../stylesheets/ShowItems.css";

export default class ShowItems extends React.Component {

  componentDidMount() {
  this.interval = setInterval(() => this.setState({ time: Date.now() }), 100);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const today = new Date();
    let m ;

    switch (today.getMonth()) {
      case 4:
        m = 28;
        break;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        m = 31;
        break;
      default:
        m = 30;
    }

    const yearStart = new Date(2018, 0, 0, 0, 0, 0, 0);
    const yearMeasurement =  365 * 24 * 60 *60 * 1000;
    const monthStart = new Date(2018, today.getMonth(), 0, 0, 0, 0, 0);
    const monthMeasurement = m * 24 * 60 *60 * 1000;
    const dayStart = new Date(2018, today.getMonth(), today.getDate(), 0, 0, 0, 0);
    const dayMeasurement =  24 * 60 *60 * 1000;
    const hourStart = new Date(2018, today.getMonth(), today.getDate(), today.getHours(), 0, 0, 0);
    const hourMeasurement =  60 *60 * 1000;
    const minuteStart = new Date(2018, today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), 0, 0);
    const minuteMeasurement =  60 * 1000;
    const secondStart = new Date(2018, today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds(), 0);
    const secondMeasurement =  1000;

    return (
      <div className="mainContainer">
        <div className="progressBarContainer">
          <h1 className="appTitle">Year In Progress</h1>
          <ProgressBar name="Year" started={yearStart} measurement={yearMeasurement}/>
          <ProgressBar name="Month" started={monthStart} measurement={monthMeasurement} />
          <ProgressBar name="Day" started={dayStart} measurement={dayMeasurement}/>
          <ProgressBar name="Hour" started={hourStart} measurement={hourMeasurement}/>
          <ProgressBar name="Minute" started={minuteStart} measurement={minuteMeasurement}/>
          <ProgressBar name="Second" started={secondStart} measurement={secondMeasurement}/>
          <hr/>
          <ToDoList/>
        </div>
      </div>
    );
  }
}
