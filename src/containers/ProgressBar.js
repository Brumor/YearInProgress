import React from 'react';
import "../stylesheets/ProgressBar.css"

export default class ProgressBar extends React.Component {

  render() {
    let today = new Date();
    let progress = ((today.getTime() - this.props.started.getTime())/(this.props.measurement)) * 100;
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{ Math.ceil(progress)} %</p>
        <div className="myProgress">
          <div style={{width:progress+'%', height: 20, backgroundColor:'#ffca28' }} width={progress}></div>
        </div>
      </div>
    );
  }
}
