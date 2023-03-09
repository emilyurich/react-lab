import "./App.css";
import Ad from "./Components/Ad";
import AdDesigner from "./Components/AdDesigner";
import Header from "./Components/Header";
import Votes from "./Components/Votes";

function App() {
  return (
    <div className="App">
      <Header user="Emily" />
      <Ad flavor="Chocolate" size={24} darkMode={true} />
      <Ad flavor="Vanilla" size={24} darkMode={false} />
      <Ad flavor="Strawberry" size={24} darkMode={true} />
      <main>
        <AdDesigner />
        <Votes />
      </main>
    </div>
  );
}

export default App;
