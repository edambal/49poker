import React from 'react';
import {Button , Card} from 'react-bootstrap';
import Navbar from '../components/Navbar';


const Profile = (props) =>{
return (
    // <div className="bg-light">
    // {/* <Navbar /> */}
    //   <div className="container">
    //     <div className="row d-flex justify-content-center">
    //       <div className="col-md-10 mt-5 pt-5">
    //           <div className="row z-depth-3">
    //             <div className="col-sm-4 bg-info rounded-left">
    //               <div className="card-block text-center text-white">
    //                 <i className="fas fa-user-tie fa-7x mt-5"></i>
    //                 <h2 className="font-weight-bold mt-4">Nickson</h2>
    //                 <p>Web Development</p>
    //                 <i className="far fa-edit fa-2x mb-4"></i>
    //               </div>
    //               <div className="col-sm-8 bg-white rounded-right">
    //                 <h3 className="mt-3 text-center"> Information</h3>
    //                 <hr className="badge-primary mt-0 w-25" />
    //               </div>
    //             </div>
    //           </div>
    //       </div>
    //     </div>
    //   </div>   
    // </div>

    <>
    <Card bg="primary" text="white" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Primary Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  
    <Card bg="secondary" text="white" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Secondary Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  
    <Card bg="success" text="white" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Success Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  
    <Card bg="danger" text="white" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Danger Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  
    <Card bg="warning" text="white" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Warning Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  
    <Card bg="info" text="white" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Info Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  
    <Card bg="dark" text="white" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Dark Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  
    <Card bg="light" style={{ width: '18rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Light Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <br />
  </>

)

}

export default Profile;
