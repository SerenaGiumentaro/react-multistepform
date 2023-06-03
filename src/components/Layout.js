import React, { createContext, useState } from "react";
import DisplaySteps from "../pages/DisplaySteps/DisplaySteps";
import MultiStepFormContainer from "../pages/MultiStepFormContainer/MultiStepFormContainer";
import layoutStyle from './Layout.module.css'
export const activeStepContext = createContext();


export default function Layout() {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <activeStepContext.Provider value={{ activeStep, setActiveStep }}>
      <div className={layoutStyle.layout}>

      <DisplaySteps />
      <MultiStepFormContainer />
      </div>
    </activeStepContext.Provider>
  );
}

