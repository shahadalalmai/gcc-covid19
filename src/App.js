import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Graph from './components/Graph';

class  App extends Component {

state = {
  csvData: []
}

componentWillMount(){
  axios.get(`https://raw.githubusercontent.com/shahadalalmai/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/05-08-2020.csv`)
  .then((response) =>{
    let csvData = response.data
    let headerData = csvData.split('\n').slice(0).map(line => (line.split(',')))[0].slice(3,-4) // filter the type of data i need
    let saudiData = csvData.split('\n').slice(0).map(line => (line.split(',')))[3191].slice(3,-4)
    let kuwaitData = csvData.split('\n').slice(0).map(line => (line.split(',')))[3138].slice(3,-4)
    let bahrainData = csvData.split('\n').slice(0).map(line => (line.split(',')))[3059].slice(3,-4)
    let omanData = csvData.split('\n').slice(0).map(line => (line.split(',')))[3173].slice(3,-4)
    let uaeData = csvData.split('\n').slice(0).map(line => (line.split(',')))[3220].slice(3,-4)
  
    let gulfData = [] // gathering all gulf countries data in one array after filteration

    let header = []
    header.push(headerData[0]) // I only want the Country Reagon & Confirmed cases
    header.push(headerData[4])

    let sd = [] // saudi data
    sd.push(saudiData[0])
    sd.push(parseInt(saudiData[4]))
    gulfData.push(sd)

    let kd = [] // kuwait data
    kd.push(kuwaitData[0])
    kd.push(parseInt(kuwaitData[4]))
    gulfData.push(kd)

    let bd = [] // bahrain data
    bd.push(bahrainData[0])
    bd.push(parseInt(bahrainData[4]))
    gulfData.push(bd)

    let od = [] // oman data
    od.push(omanData[0])
    od.push(parseInt(omanData[4]))
    gulfData.push(od)

    let ud = [] // uae data
    ud.push(uaeData[0])
    ud.push(parseInt(uaeData[4]))
    gulfData.push(ud)

    let copyState = {...this.state}
    copyState.csvData = gulfData

    this.setState(copyState) // so that i can send it to the Graph component

  })
  .catch(function(error) {
    console.log("Got error",error)
  })
  

} 

  
render(){

  return (
    <div className="App">
        <h1>COVID-19 Confirmed Cases in the Gulf Countries</h1>
        <Graph data={this.state.csvData} />
    </div>
  );
  }

}


export default App;
