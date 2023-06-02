import styleApp from "./App.module.css";
import { Layout } from "./components";
import MultiStepFormContainer from "./pages/MultiStepFormContainer/MultiStepFormContainer";
import DisplaySteps from "./pages/DisplaySteps/DisplaySteps";
// import layoutContainer from './Layout.module.css'
function App() {
  return (
    <>
      <Layout className={styleApp.flex}>
        <DisplaySteps />
        <MultiStepFormContainer />
        
      </Layout>
    </>
  );
}

export default App;
