import React from 'react'
import { FaBorderAll, FaShoppingCart, FaListAlt, FaUserFriends, FaReadme } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Siderbar = () => {
    return (
        <div className="container-fluid slider">
            <div className='row bg-light' style={{ "height": "25rem", "width": "10rem" }}>
                <div className="col">
                    <Link to=''>
                        <div className='row  pt-4 ps-3'>
                            <FaBorderAll />
                            <button className='side-btn ps-2'>Dashboard</button>
                        </div>
                    </Link>


                    <Link to="/addproduct">
                        <div className='row py-2 ps-3'>
                            <FaListAlt />
                            <button className='side-btn ps-2'>Inventory</button>
                        </div>
                    </Link>

                    <Link to=''>
                        <div className='row py-2 ps-3'>
                            <FaShoppingCart />
                            <button className='side-btn ps-2'>Orders</button>
                        </div>
                    </Link>

                    <Link to=''>
                        <div className='row py-2 ps-3'>
                            <FaUserFriends />
                            <button className='side-btn ps-2'>Customers</button>
                        </div>
                    </Link>


                    <Link to=''>
                        <div className='row py-2 ps-3'>
                            <FaReadme />
                            <button className='side-btn ps-2'>Sell-Report</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Siderbar