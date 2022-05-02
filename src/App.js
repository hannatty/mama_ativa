

import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ComoDoar from './pages/ComoDoar'
 

function App() {
  return (
    <div className="App">
        <BrowserRouter>
             <Routes>
                <Route path='/comodoar'  element={<ComoDoar/>}/>
             </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
