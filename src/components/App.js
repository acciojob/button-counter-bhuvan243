
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [clicks, setClicks] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {clicks} times</p>
        <button onClick={() => setClicks(clicks + 1)}>Click me</button>
    </div>
  )
}

export default App
