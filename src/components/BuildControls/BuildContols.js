import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import Aux from '../../HOC/helper';

const BuildControls=(props)=>{
  var items=['Salad','Meat','Cheese','Bacon'];
  return(
    <Aux>
      {items.map((item,index)=><BuildControl key={index} label={item} add={props.add} remove={props.remove}/>)}   
    </Aux>
  )
};
export default BuildControls;