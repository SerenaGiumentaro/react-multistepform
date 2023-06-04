import {useContext} from 'react'
import { isMonthlyContext } from '../MultiStepFormContainer/MultiStepFormContainer'

export default function ToggleYrMo() {
    const {isMonthly, setIsMonthly} = useContext(isMonthlyContext)
    const toggleYrMo = () => {
        setIsMonthly(!isMonthly)
    }
  return (
    <div>
        <p>Monthly</p>
        <input type='checkbox' onChange={toggleYrMo}/>
        <p>Yearly</p>
    </div>
  )
}
