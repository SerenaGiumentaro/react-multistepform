import { activeStepContext } from "../../components/Layout";
import Step from "../Step/Step";
import styleDisplayStep from "./DisplaySteps.module.css";

export default function DisplaySteps() {
  const stepExplained = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  const steps = stepExplained.map((stepCounter) => {
    return (
      <Step
        key={stepExplained.indexOf(stepCounter)}
        step={stepExplained.indexOf(stepCounter) + 1}
        stepExplained={stepCounter}
      />
    );
  });
  return (
    <div
      className={styleDisplayStep.sidebar}
      style={{
        backgroundImage: `url(${
          require("../../img/bg-sidebar-desktop.svg").default
        })`,
      }}
    >
      {steps}
    </div>
  );
}
