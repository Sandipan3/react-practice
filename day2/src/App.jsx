import './index.css'
import { useRef } from 'react';

function App() {

const showInput = useRef(null);


const displayHandler = () => {

  showInput.current.click();
  //if(showInput.current){
    //showInput.current.style.display = showInput.current.style.display === 'none' ? 'block ' : 'none' ;
  
}

  return (
    <div id="app">
    <p>Please select an image</p>
    <p>
      <input ref={showInput} data-testid="file-picker" type="file" accept="image/*" />
      <button onClick={displayHandler}>Pick Image</button>
    </p>
  </div>
  )
}

export default App;

