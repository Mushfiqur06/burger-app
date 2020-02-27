import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = props => {
  return (
    <div className="buildControls">
      {controls.map((control, index) => (
        <BuildControl
          added={() => props.ingredientAdded(control.type)}
          remove={() => props.ingredientRemove(control.type)}
          key={index}
          label={control.label}
          disabled={props.disabled[control.type]}
        />
      ))}
    </div>
  );
};

export default buildControls;
