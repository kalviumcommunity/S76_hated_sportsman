import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import landingPage from "../src/components/Landing.jsx";
import App from './App.jsx'
import PlayerDetails from "../src/components/Entity.jsx";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/playerDetails' element={<PlayerDetails/>}></Route>
    </Routes>
    <App />
    </BrowserRouter>
    
  </StrictMode>,
)
