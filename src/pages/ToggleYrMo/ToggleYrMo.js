// import {useContext} from 'react'
// import { isMonthlyContext } from '../MultiStepFormContainer/MultiStepFormContainer'

export default function ToggleYrMo({onToggle}) {
    // const {isMonthly, setIsMonthly} = useContext(isMonthlyContext)
    const toggleYrMo = () => {
        onToggle()
    }
  return (
    <div>
        <p>Monthly</p>
        <input type='checkbox' onChange={toggleYrMo}/>
        <p>Yearly</p>
    </div>
  )
}
