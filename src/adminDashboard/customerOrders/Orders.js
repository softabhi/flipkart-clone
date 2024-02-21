import './orders.css'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../helpers/backedurl'


const Orders = () => {

  const [ordersItem, setOrdersItem] = useState("")

  useEffect(() => {
    axios.get(`${BASE_URL}/api/v2/orderProducts`)
      .then((data) => {
        setOrdersItem(data.data)
      })
  }, [])

  console.log(ordersItem)

  return (
    
    <>
 <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {ordersItem && ordersItem.map((order) => (
            order.orderItems.map((item, index) => (
              <tr key={item._id}>
                {index === 0 && (
                  <td rowSpan={order.orderItems.length}>{order._id}</td>
                )}
                <td>{item.productName}</td>
                <td>{item.productQty}</td>
                <td>${item.productPrice}</td>
                <td>
                  <img src={`${BASE_URL}/${item.productImg}`} alt=""  style={{ maxWidth: '50px' }} />
                </td>
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
    </>


  );

}

export default Orders



