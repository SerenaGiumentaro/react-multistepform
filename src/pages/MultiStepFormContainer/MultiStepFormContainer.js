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
export const totalCartDataContext = createContext();

export default function MultiStepFormContainer() {
  const { activeStep } = useContext(activeStepContext);
  const baseCartData = {
    activePlan: {
      planTitle: "Arcade",
      billingType: "Monthly",
      price: "$9/mo",
    },
    addOns: [],
  };
  const [totalCartData, setTotalCartData] = useState(baseCartData);
  const handleActivePlanCartData = (activePlan) => {
    setTotalCartData({ ...totalCartData, activePlan: { ...activePlan } });
  };
  const handleAddOnsCartData = (addOnsData) => {
    setTotalCartData({ ...totalCartData.addOns, addOnsData });
  };
  const [isMonthly, setIsMonthly] = useState(true);
  const handleToggleTyMo = async () => {
    await setIsMonthly(!isMonthly);
    setTotalCartData({
      ...totalCartData,
      activePlan: {
        ...totalCartData.activePlan,
        billingType: !isMonthly ? "Monthly" : "Yearly",
      },
    });
  };
  let activeComponent;
  // eslint-disable-next-line default-case
  switch (activeStep) {
    case 1:
      activeComponent = <PersonalInfo />;
      break;
    case 2:
      activeComponent = (
        <SelectPlan
          handleMoYrToggle={handleToggleTyMo}
          handleSelectPlan={handleActivePlanCartData}
        />
      );
      break;
    case 3:
      activeComponent = <SelectAddsOn handleAddOns={handleAddOnsCartData} />;
      break;
    case 4:
      activeComponent = <FinishUp />;
  }
  return (
    <div className={multiStepFormStyle["multi-form-container"]}>
      <isMonthlyContext.Provider value={{ isMonthly }}>
        <totalCartDataContext.Provider value={{ totalCartData }}>
          <div className={multiStepFormStyle["form-container"]}>
            <FormTitle />
            {activeComponent}
          </div>
        </totalCartDataContext.Provider>
      </isMonthlyContext.Provider>
      <NavigationsSteps />
    </div>
  );
}
