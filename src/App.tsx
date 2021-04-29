import React from 'react';
import './App.css';
import BarPlot from './pages/bar'
import BarPlotRes from './pages/responsive/bar_responsive';
import ScatterPlotRes from './pages/responsive/scatter_responsive';
import ScatterPlot from './pages/scatter';

function App() {
  return (
    <div className="App">
       <div id="scatter">
<ScatterPlot/>
        </div>
        <br></br>
        <div id="scatterplot" style={{marginTop:"50px"}}>
<ScatterPlotRes width="205"/>
        </div>
        <div id="iphone">
          <ScatterPlotRes width="176"/>
        </div>
        <div id="ipad">
          <ScatterPlotRes width="500"/>
        </div>
        <div id="space"></div>
        <div id="bar">
<BarPlot/>
        </div>
        <br></br>
        <div id="barplot">
<BarPlotRes/>
        </div>
    </div>
  );
}

export default App;
