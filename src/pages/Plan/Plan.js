export default function Plan({ svgPlan, planTitle, planPrice }) {
  return (
    <div>
      {svgPlan}
      <div>
        <p>{planTitle} </p>
        <p>{planPrice} </p>
      </div>
    </div>
  );
}
