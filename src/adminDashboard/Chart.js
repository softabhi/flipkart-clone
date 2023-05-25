import React from 'react'
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,
  Tooltip
} from 'recharts'


const pdata = [
  {
    name: "abhi",
    age: 120,
    num: 212
  },
  {
    name: "abhi",
    age: 19,
    num: 213
  },
  {
    name: "abhi",
    age: 5,
    num: 132
  },
  {
    name: "abhi",
    age: 20,
    num: 232
  },
]

const Chart = () => {
  return (
    <>
    <div className='' style={{width:"50rem",position:"absolute", left:"10rem",top:"15rem"}}>
      <h3 style={{textAlign:"center"}}>Report Card</h3>
      <ResponsiveContainer width="80%" aspect={2}>
        <LineChart data={pdata}>
          <CartesianGrid />
          <XAxis dataKey={"name"} interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="age" stroke='red' activeDot={{ r: 12 }} />
          <Line dataKey="num" stroke='green' activeDot={{ r: 12 }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </>

  )
}

export default Chart