import NavigationsSteps from '../NavigationsSteps/NavigationsSteps'
import multiStepFormStyle from './MultiStepFormContainer.module.css'



import React from 'react'

export default function MultiStepFormContainer() {
  return (
    <div className={multiStepFormStyle.ciao} >MultiStepFormContainer
    <NavigationsSteps />
    </div>
  )
}
