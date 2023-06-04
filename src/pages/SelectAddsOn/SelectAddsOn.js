import { useContext , useState} from "react";
import { isMonthlyContext } from "../MultiStepFormContainer/MultiStepFormContainer";

export default function SelectAddsOn() {
  const { isMonthly } = useContext(isMonthlyContext);
  const [isSelected , setIsSelected]= useState(true);
  const addOnsData = [
    {
      title: "Online service",
      subtitle: "Access to multiplayer games",
      monthlyPrice: "+$1/mo",
      yearlyPrice: "+$10/yr",
    },
    {
      title: "Larger storage",
      subtitle: "Extra 1TB of cloud save",
      monthlyPrice: "+$2/mo",
      yearlyPrice: "+$20/yr",
    },
    {
      title: "Customizable profile",
      subtitle: "Custom theme on your profile",
      monthlyPrice: "+$2/mo",
      yearlyPrice: "+$20/yr",
    },
  ];
  const selectAddOn = () => {
    setIsSelected(!isSelected);
  };
  const addOnsList = addOnsData.map((addOns, index) => {
    return (
      <div key={index}>
        <input type="checkbox" onChange={selectAddOn} />
        <div>
          <p> {addOns.title} </p>
          <p> {addOns.subtitle} </p>
        </div>
        <p> {isMonthly ? addOns.monthlyPrice : addOns.yearlyPrice} </p>
      </div>
    );
  });
  return (
    <>
    {addOnsList}
    </>
  )
}
