import React from 'react';
import { PieChart, Pie, Legend, Tooltip} from 'recharts';
import './graph.css';



const Piegraph = () => {

// Sample data
const data = [
{name: 'Students', students: 400},
{name: 'Staff', students: 700},
{name: 'Teacher', students: 200},
{name: 'Other', students: 1000}
];
const state =[
  {name: 'TotalStudents', count: 513},
  {name: 'TotalStaff', count:30},
  {name: 'TotalTeacher', count:60},
  {name: 'Others', count: 10}
]


return (
		<div className='piegraph'>
      <PieChart width={200} height={200} className='piegraph1'>
		<Pie data={data} dataKey="students" outerRadius={80} fill="gray"/>
    <Tooltip/>
		</PieChart>
    <PieChart width={200} height={200} className='piegraph2'>
		<Pie data={state} dataKey="count" outerRadius={80} fill="red"/>
    <Tooltip/>
		</PieChart>
    </div>
);
}

export default Piegraph;
