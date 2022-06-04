

import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ComoDoar from './pages/ComoDoar'
import UnidadeDoacao from './pages/UnidadeDoacao.js';
 

function App() {
  return (
    <div className="App">
        <BrowserRouter>
             <Routes>
                <Route path='/comodoar'  element={<ComoDoar/>}/>
                <Route path='/unidadeDoacao'  element={<UnidadeDoacao/>}/>
             </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
