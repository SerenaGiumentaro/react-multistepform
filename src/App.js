import styleApp from "./App.module.css";
import { Layout } from "./components";

// import layoutContainer from './Layout.module.css'
function App() {
  return (
    <>
      <Layout className={styleApp.flex} />
    </>
  );
}

export default App;
