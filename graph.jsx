import React from 'react';
import { Bar,BarChart,LineChart,Line, XAxis,YAxis,Tooltip,CartesianGrid,Legend,PieChart, Pie } from 'recharts';
import "./graph.css";

//to make or implement a grpah need to install recharts npm install recharts
//if not installing then try npm install recharts --force
const state = [
    {
        month: "Jan",
        TotalStudents: 600,
        present: 500,
    },
    {
        month: "Feb",
        TotalStudents: 600,
        present: 508,
    },
    {
        month: "Mar",
        TotalStudents: 600,
        present: 300,
    },
    {
        month: "Aprl",
        TotalStudents: 650,
        present: 90,
    },
    {
        month: "May",
        TotalStudents: 650,
        present: 40,
    },
]


function Graph()  {
    
 
    return (
      <div className='Graph' style={{display:"flex", alignItems: "center"}}>
      
      <LineChart width={280} height={200} data={state} className="linegraph">
          <CartesianGrid></CartesianGrid>
          <XAxis dataKey="month"></XAxis>
          <YAxis></YAxis>
          <Legend></Legend>
          <Tooltip></Tooltip>
          <Line type="monotone" dataKey="TotalStudents" stroke='green'></Line>
          <Line type="montype" dataKey="present" stroke='red'></Line>
          <Line type="monotype" dataKey="days" stroke="#1f5156"></Line>
          <Line type="monotype" dataKey="date" stroke="#1f5156"></Line>
      </LineChart>
        <BarChart width={280} height={200} data={state} className="bargraph">
            <CartesianGrid></CartesianGrid>
            <Legend></Legend>
            <XAxis dataKey="month"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Bar  dataKey="TotalStudents" stroke='blue'></Bar>
            <Bar  dataKey="present" stroke='green'></Bar>
        </BarChart>
      
      </div>
    );
  }

  export default Graph;