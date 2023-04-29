import Dashboard from './components/Dashboard';
import './App.css';
import Cards from './components/Cards';
import Projects from './components/Projects';
import Chart from './components/Chart';
import Doughnut from './components/Doughnut';

function App() {
  //const val = [10, 20, 30, 40, 50, 60]
  return (
    <div className="App" style={{ backgroundColor: "rgb(238, 236, 236)" }}>
      <Dashboard />
      <DashBoardCards />
      <Projects />


    </div>
  );
}

export default App;

function DashBoardCards() {
  return (
    <section>
      <div className="container">
        <Cards />
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', flexWrap: "wrap" }}>
        <div className='chart-box'>
          <Chart />
        </div>
        <div className="doughnut-box">
          <Doughnut />
        </div>
      </div>

    </section >
  )
}

