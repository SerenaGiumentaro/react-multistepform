import {useContext} from 'react'
import { activeStepContext } from '../../components/Layout'

export default function FormTitle() {
    const {activeStep} = useContext(activeStepContext)
    const stepsTitles = [
        {title: 'Personal Info', sibtitle: 'Please provide your name, email address, and phone number.'},
        {title: 'Select your plan', sibtitle: 'You have the option of monthly or yearly billing.'},
        {title: 'Pick add-ons', sibtitle: 'Add-ons help enhance your gaming experience.'},
        {title: 'Finishing up', sibtitle: 'Double-check everything looks OK before confirming.'},
    ]
  return (
    <div>
        <h1> {stepsTitles[activeStep - 1].title} </h1>
        <p> {stepsTitles[activeStep - 1].sibtitle} </p>
    </div>
  )
}
