import React, { createContext, useState } from "react";
import DisplaySteps from "../pages/DisplaySteps/DisplaySteps";
import MultiStepFormContainer from "../pages/MultiStepFormContainer/MultiStepFormContainer";

export const activeStepContext = createContext();

// export default function Layout({ className, children }) {
//   const [step, setStep] = useState(1)
//   return (
//     <activeStepContext.Provider value={{step, setStep}} >

//     <div className={className}>
//       {children}
//     </div>
//     </activeStepContext.Provider>

//   );
// }


export default function Layout({ className, children }) {
  const [activeStep, setActiveStep] = useState(1);
  return (
    <activeStepContext.Provider value={{ activeStep, setActiveStep }}>
      <DisplaySteps />
      <MultiStepFormContainer />
    </activeStepContext.Provider>
  );
}

