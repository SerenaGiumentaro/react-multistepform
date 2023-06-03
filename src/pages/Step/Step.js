import { activeStepContext } from "../../components/Layout";
import { useContext } from "react";
import stepStyle from "./Step.module.css";

export default function Step({ step, stepExplained }) {
  const activeState = {
    background: "var(--light-blue)",
    color: "var(--marine-blue)",
    border: 'none'
  };

  const { activeStep } = useContext(activeStepContext);
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
        <p className={stepStyle['step-number']}>STEP {step}</p>
        <p>{stepExplained}</p>
      </div>
    </div>
  );
}
