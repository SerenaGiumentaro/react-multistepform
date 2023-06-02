import Step from "../Step/Step";


export default function DisplaySteps() {
  return (
    <div style={{display: 'flex', backgroundColor: 'green'}}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
        <Step />
    </div>
  )
}
