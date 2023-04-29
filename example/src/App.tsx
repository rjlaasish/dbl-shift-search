import { ChangeEvent, useState } from 'react';
import './App.css';
import {DoubleShiftSearch} from 'dbl-shift-search'

function App() {

  const [value,setValue]=useState<string>()
  const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
setValue(e.target.value)
  }
  return (
    <div className="app">
      <h3>#dbl-shift-search</h3>
      <span><p>Press &nbsp;</p><p className='shft-key'>Shift</p> <p> &nbsp; key two times simultaneously to activate search input</p></span>
      <div className="search-wrapper">
     <DoubleShiftSearch helperText='Press shift to search' onChange={handleInputChange} value={value}/>
     </div>

      <span className='value-container'>{value}</span>

     <h6>&copy; Aasish Rijal | <a href="https://github.com/rjlaasish">https://github.com/rjlaasish</a></h6>
    </div>
  );
}

export default App;
