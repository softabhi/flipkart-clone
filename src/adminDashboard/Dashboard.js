import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Siderbar from './Siderbar'
import './dashboardStyle.css'
import DataCard from './dataCard'
import Chart from './Chart'
import TableData from './TableData'
import AddProduct from './AddProduct'


const Dashboard = () => {
    return (
        
        <>
        <Siderbar/>
        <DataCard/>
        <Chart/>
        <TableData/>
        {/* <AddProduct/> */}

        <Routes>
            <Route path="/addproduct" element={<AddProduct/>}/>
        </Routes>
        </>
    )
}

export default Dashboard