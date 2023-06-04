import { activeStepContext } from "../../components/Layout";
import NavigationsSteps from "../NavigationsSteps/NavigationsSteps";
import multiStepFormStyle from "./MultiStepFormContainer.module.css";
import { useContext, createContext, useState } from "react";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectAddsOn from "../SelectAddsOn/SelectAddsOn";
import SelectPlan from "../SelectPlan/SelectPlan";
import FinishUp from "../FinishUp/FinishUp";
import FormTitle from "../FormTitle/FormTitle";

export const isMonthlyContext = createContext();

export default function MultiStepFormContainer() {
  const { activeStep } = useContext(activeStepContext);
  const [isMonthly, setIsMonthly] = useState(true);
  let activeComponent;
  // eslint-disable-next-line default-case
  switch (activeStep) {
    case 1:
      activeComponent = <PersonalInfo />;
      break;
    case 2:
      activeComponent = <SelectPlan />;
      break;
    case 3:
      activeComponent = <SelectAddsOn />;
      break;
    case 4:
      activeComponent = <FinishUp />;
  }
  return (
    <div className={multiStepFormStyle["multi-form-container"]}>
      <isMonthlyContext.Provider value={{ isMonthly, setIsMonthly }}>
        <div className={multiStepFormStyle["form-container"]}>
          <FormTitle />
          {activeComponent}
        </div>
      </isMonthlyContext.Provider>
      <NavigationsSteps />
    </div>
  );
}
