import React, { useState } from "react";

export const activeStepContext = React.createContext(null)
export default function Layout({ className, children }) {
  const [step, setStep] = useState(1)
  return (
    <activeStepContext.Provider value={{step, setStep}} >

    <div className={className}>
      {children}
    </div>
    </activeStepContext.Provider>

  );
}
