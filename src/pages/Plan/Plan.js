import planStyle from './Plan.module.css'
import { useState } from 'react'

export default function Plan({ svgPlan, planTitle, planPrice , selected, onClick, planId}) {
  const handleClick = () => {
    if(!selected){
      onClick(planId)
    }
  }
  return (
    <div className={selected? planStyle.selected : ''} onClick={handleClick}>
      {svgPlan}
      <div>
        <p>{planTitle} </p>
        <p>{planPrice} </p>
      </div>
    </div>
  );
}
