import { useContext } from "react"
import { activeStepContext } from "../../components/Layout";

export default function NavigationsSteps() {
  const step= useContext(activeStepContext)
  
  
  const nextStep = (step) => {
    step.setStep(step.step + 1)
    console.log(step.step);
  }
  
  return (
    <>
   <button>Go back</button>
   {/* <button onClick={nextStep(step)}>Next</button> */}
    </>
  )
}
