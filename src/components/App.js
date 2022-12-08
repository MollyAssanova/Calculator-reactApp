import React, { useState } from 'react';
import './styles/App.css';
import ButtonGroup from './ButtonGroup';
import Header from './Header';
import Footer from './Footer';

const App = ()=> {
  const [screenText, setScreenText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleClickOperation = (buttonValue) => {
    let result = '';
    if (buttonValue === '=') {
      return;
    } else if (buttonValue === 'DEL') {
      result=''
    } else if (buttonValue === 'RES' && screenText !== '') {
      let val = screenText;
      result = val.substring(0, val.length - 1);
    } else if (buttonValue !== '=' && buttonValue !== '<=') {
      result = screenText+buttonValue;
    }
    setScreenText(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let result = '';
    try {

      result = eval(screenText);
    } catch (e) {}
    result = result.toString();
    setScreenText(result);
  }

  return (
    <div className={darkMode ? "darkApp app" : "lightApp app"}>
      <div className={darkMode ? "darkCalculator calculator" : "lightCalculator calculator"}>
        <Header 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <ButtonGroup 
          darkMode={darkMode}
          screenText={screenText}
          setScreenText={setScreenText}
          handleClickOperation={handleClickOperation}
          handleSubmit={handleSubmit}
        />
      </div>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
