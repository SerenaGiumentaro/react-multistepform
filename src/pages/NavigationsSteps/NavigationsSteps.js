import { useContext } from "react";
import { activeStepContext } from "../../components/Layout";

export default function NavigationsSteps() {
  const { activeStep, setActiveStep } = useContext(activeStepContext);
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };
  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <button onClick={prevStep}>Go back</button>
      <button onClick={nextStep}>Go next</button>
    </>
  );
}
