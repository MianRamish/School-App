import Leftnavbar from './Components/leftnavbar';
import Navbar from './Components/navbar';
import './App.css';
import Graph from './Components/graph';
import Piegraph from './Components/piegraph';
import TotalDetail from './Components/TotalDetail';


function App() {
  
  return (
    <>
    <Navbar />
    <Leftnavbar />
    <div className='content-container'>
      <div className='graphs'>
      <Piegraph/> 
     <Graph/>
      </div>
      <div className='total-detail'>
        <TotalDetail/>
      </div>
    </div>
     
    </>
  );
}

export default App;
