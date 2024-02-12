import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Siderbar from './Siderbar'
import './dashboardStyle.css'
import DataCard from './dataCard'
import Chart from './Chart'
import TableData from './TableData'
import SellerProfile from '../pagesComp/SellerProfile';
// import AddProduct from './AddProduct'


const Dashboard = ({setLogoutSeller}) => {
    return (
        
        <>
        <div className="container  dsb_style" >
           <div className="row">
             <div className="col">
                <h2>Wel Come..... Merchant</h2>
             </div>
             <div className="col seller_pic">
                <div className='_pic'>
                <SellerProfile  setLogoutSeller={setLogoutSeller}/>
                </div>
             </div>
            
           </div>
        </div>

        <Siderbar/>
        <DataCard/>
        <Chart/>
        <TableData/>
        {/* <AddProduct/> */}

        {/* <Routes>
            <Route path="/addproduct" element={<AddProduct/>}/>
        </Routes> */}
        </>
    )
}

export default Dashboard