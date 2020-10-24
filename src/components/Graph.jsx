import React, { Component } from 'react';
// import axios from 'axios';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';



class Graph extends Component{
    
    render() { 

      let data = []

        if (this.props.data[0] !== undefined){ // i dont want undefined errors

        data = [
            {subject: `${(this.props.data[0])[0]}`, A: `${(this.props.data[0])[1]}`}, // arranging the data reacived from props to be presented in the graph
            {subject: `${(this.props.data[1])[0]}`, A: `${(this.props.data[1])[1]}`},
            {subject: `${(this.props.data[2])[0]}`, A: `${(this.props.data[2])[1]}`},
            {subject: `${(this.props.data[3])[0]}`, A: `${(this.props.data[3])[1]}`},
            {subject: `${(this.props.data[4])[0]}`, A: `${(this.props.data[4])[1]}`}
          ];
        
      }    

    return (  
        <div>
            <RadarChart cx={500} cy={500} outerRadius={200} width={3000} height={900} data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="Corona Cases" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </div>
    )
    }//end render
}

export default Graph;
