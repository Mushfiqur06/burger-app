import React from 'react';
import './BuildControl.css';

const buildControl = props => (
  <div className="buildControl">
    <div className="label">{props.label}</div>
    <button className="less" onClick={props.remove}>
      Less
    </button>
    <button className="more" onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
