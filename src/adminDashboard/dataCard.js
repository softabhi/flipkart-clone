import React from 'react'
import { FcBriefcase, FcBusinessman, FcComboChart, FcList, } from 'react-icons/fc'
const DataCard = () => {
    return (
        <>
            <div className="container-fluid card-data" style={{ "position": "absolute", "left": "rem", "top": "5rem",maxWidth:"80rem" }}>
                <div className="row m-2" style={{width: ""}}>

                    <div className="col-sm-1 col-lg-3 mb-2 me-lg-2 bg-light border border-dark" style={{maxWidth:"15rem"}}>
                        <div className="row p-3">
                            <div className="col ps-3 " style={{ "position": "relative", "left": "", "top": "6px" }}>
                                <FcBriefcase className='icon' style={{}} />
                            </div>
                            <div className="col">
                                <span>Orders</span>
                                <h3>456</h3>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-1 col-lg-3 mb-2 me-lg-2 bg-light border border-dark" style={{maxWidth:"15rem"}}>
                        <div className="row p-3">
                            <div className="col ps-3 " style={{ "position": "relative", "left": "", "top": "6px" }}>
                                <FcBriefcase className='icon' style={{}} />
                            </div>
                            <div className="col">
                                <span>Orders</span>
                                <h3>456</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-1 col-lg-3 mb-2 me-lg-2 bg-light border border-dark" style={{maxWidth:"15rem"}}>
                        <div className="row p-3">
                            <div className="col ps-3 " style={{ "position": "relative", "left": "rem", "top": "6px" }}>
                                <FcBriefcase className='icon' style={{}} />
                            </div>
                            <div className="col">
                                <span>Orders</span>
                                <h3>456</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-1 col-lg-3 mb-2 me-lg-2 bg-light border border-dark" style={{maxWidth:"15rem"}}>
                        <div className="row p-3">
                            <div className="col ps-3 " style={{ "position": "relative", "left": "rem", "top": "6px" }}>
                                <FcBriefcase className='icon' style={{}} />
                            </div>
                            <div className="col" style={{width:"",marginRight:"0px"}}>
                                <span>Orders</span>
                                <h3>456</h3>
                            </div>
                            {/* <div className="col"></div> */}
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default DataCard