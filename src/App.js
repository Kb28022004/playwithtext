import { useState } from "react";
import Navbar from "./components/Navbar";

import Textform from "./components/Textform";
import Alert from "./components/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const[alerts,setalerts]=useState(null)

  const showalert=(message,type)=>{
    setalerts({
      message:message,
      type:type
    })
  }
  setTimeout(() => {
    setalerts(null)
  }, 1500);

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      showalert("Dark mode has been enabled","success")

      document.body.style.backgroundColor = "black";
    } else {
      setmode("light");
      showalert("Light mode has been enabled","success")

      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div className="App">
      <Navbar mode={mode} showalert={showalert} togglemode={togglemode} title="Playwithtext" />
      <Alert alert={alerts}/>
      <div className="container">
        <Textform showalert={showalert} heading="Play with the text as your own way" mode={mode} />
      </div>
    </div>
  );
}

export default App;
