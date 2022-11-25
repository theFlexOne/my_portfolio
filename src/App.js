import "./App.css";
import Layout from "./components/Layout/Layout";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App h-screen bg-bg-default font-primary text-primary-300 max-h-full overflow-hidden">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
