import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm'
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = '#f8f9fa';

      showAlert("Dark Mode is enabled", 'success');
      document.title = 'TextUtility - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      document.body.style.color = '#212529';

      showAlert("Light Mode is enabled", 'success');
      document.title = 'TextUtility - Light Mode';

    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const [color, setColor] = useState('#fff');
  const setColorTheme = (color) => {
    document.body.style.backgroundColor = color;
  }

  return (
  <>
    <Router>
        <Navbar title="TextUtils" homeLink="Home" aboutLink="About" toggleMode={toggleMode} theme={mode} setColorTheme={setColorTheme}/>
        <Alert alertMsg={alert}/>
        <div className="container my-3">
          <Switch>
              <Route exact path="/about">
                <About />
              </Route>
            
              <Route exact path="/">
                <TextForm sendAlert={showAlert} heading="Enter the text to analyze below"/>
              </Route>
          </Switch>
        </div>
    </Router>
  </>
  );
}

export default App;
