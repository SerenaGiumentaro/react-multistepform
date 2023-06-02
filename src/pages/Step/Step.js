import { activeStepContext } from "../../components/Layout";
import { useContext } from "react";
import stepStyle from "./Step.module.css";

export default function Step({ step, stepExplained }) {
  const activeState = {
    background: "white",
    color: "black",
  };

  const { activeStep, setActiveStep } = useContext(activeStepContext);
  return (
    <div
      className="flex-center row"
    >
      <div
        className={stepStyle.step}
        style={step === activeStep ? activeState : null}
      >
        <p>{step}</p>
      </div>
      <div
        className={stepStyle['step-description']}
      >
        <p>STEP {step}</p>
        <p>{stepExplained}</p>
      </div>
    </div>
  );
}
