import { useContext } from "react";
import { activeStepContext } from "../../components/Layout";
import navigationStyle from "./NavigationSteps.module.css";

export default function NavigationsSteps() {
  const { activeStep, setActiveStep } = useContext(activeStepContext);
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };
  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <div className={navigationStyle["navigation-container"]}>
      
        <button
          onClick={prevStep}
          className={navigationStyle["back-btn"]}
          style={activeStep > 1 ? null : { visibility: "hidden" } }
        >
          Go back
        </button>
      
      {activeStep < 4 && (
        <button onClick={nextStep} className={navigationStyle["next-btn"]}>
          Next Step
        </button>
      )}
      {activeStep === 4 && (
        <button className={navigationStyle["confirm-btn"]}>Confirm</button>
      )}
    </div>
  );
}
