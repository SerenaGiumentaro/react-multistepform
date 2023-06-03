import NavigationsSteps from '../NavigationsSteps/NavigationsSteps'
import multiStepFormStyle from './MultiStepFormContainer.module.css'



import React from 'react'

export default function MultiStepFormContainer() {
  return (
    <div className={multiStepFormStyle['multi-form-container']} >
      <div className={multiStepFormStyle['form-container']} >
        form 
      </div>
    <NavigationsSteps />
    </div>
  )
}
