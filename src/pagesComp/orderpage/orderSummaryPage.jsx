// import 'bootstrap/dist/css/bootstrap.min.css';
import './ordersummary.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { globleInfo } from '../../App';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { BASE_URL } from '../../helpers/backedurl';

const Ordersummarypage = () => {

  const { logedUser, cartItems } = useContext(globleInfo)

  console.log(cartItems)


  const orderPlaceFunction = () => {

    if (!cartItems.length) {
      // let userId = logedUser._id;

      // const requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ userId, cartItems })
      // };
      // fetch(`${BASE_URL}/api/v2/orderadd`, requestOptions)
      //   .then((response) => {
      //     // console.log(response,11)
      //     return response.json();
      //   })
      //   .then(data => {
      //     // setProducts(data)
      //     // setFilterProduct(data);
      //     // setSearchItem(data)
      //     console.log(data.massage, 10)
          Swal.fire({
            title: "Cart Is Empty",
            icon: "error"
          });
          // alert(data.massage)

        // })

    } else {


      let userId = logedUser._id;

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, cartItems })
      };
      // fetch(`${BASE_URL}/api/v2/orderadd`, requestOptions)
      fetch(`http://localhost:5001/api/v2/orderadd`, requestOptions)
        .then((response) => {
          // console.log(response,11)
          return response.json();
        })
        .then(data => {
          // setProducts(data)
          // setFilterProduct(data);
          // setSearchItem(data)
          console.log(data.massage, 10)
          Swal.fire({
            title: data.massage,
            text: "You clicked the button!",
            icon: "success"
          });
          // alert(data.massage)

        })


      // alert("please loging first for item add")
      // navigation("/loginRegise")
      // navigation("/loginRegise")
      // Navigate("/loginRegise")
    }


  }






  return (
    <>
      <div className="main_div">
        <div className="main_container">
          <h4>ADD NEW DELIVERY ADDRESS</h4>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="number" placeholder="number" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Address
            </Button>
          </Form>





        </div>

        <div className="add_sec">

          <h4>SELECT DELIVERY ADDRESS</h4>

          <div className="address">
            <div className='name_sec'>
              <h4>ABHISHEK KUMAR</h4>
              <input type="checkbox" />
              <EditIcon />
              <DeleteForeverIcon />
            </div>

            <h5>9784545648</h5>
            <p>HAJIPUR GOLA ,RAFIGANJ ,AURANGABAD BIHAR AURANGABAD BIHAR</p>
            <h5>824125</h5>
          </div>


          <div className="address">
            <div className='name_sec'>
              <h4>ABHISHEK KUMAR</h4>
              <input type="checkbox" />
              <EditIcon />
              <DeleteForeverIcon />
            </div>

            <h5>9784545648</h5>
            <p>HAJIPUR GOLA ,RAFIGANJ ,AURANGABAD BIHAR AURANGABAD BIHAR</p>
            <h5>824125</h5>
          </div>

          <div className='order_btn'>
            <button className='btn btn-success' onClick={() => orderPlaceFunction()}>PLACE ORDER</button>
          </div>


        </div>


      </div>
    </>
  );
}

export default Ordersummarypage;