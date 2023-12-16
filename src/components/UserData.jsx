import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { GrOverview } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


class UserData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      show: false,
      userData: [
        {
          first_name: "Abdul Baroon",
          last_name: "Khan",
          dob: "10/08/2000",
          city:"Bareilly",
          phone:"9336384535"
        },
        {
          first_name: "salan",
          last_name: "Khan",
          dob: "10/09/2005",
          city:"Bareilly",
          phone:"8754216589"
        },
        {
          first_name: "dinesh",
          last_name: "kumar",
          dob: "13/12/2003",
          city:"Bareilly",
          phone:"8754216589"
        }
      ]
    };
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick(i){
    this.setState({id:i})
    console.log(this.state.id)
  }
  handleEdit = () => {

    this.setState({ show: false });
  };
  handleDelete = (i) => {
    this.state.userData.splice(i,1)
  this.setState({ userData:this.state.userData});
  // console.log(this.state.userData)
  };
  // handleClose = () => {
  //   this.setState({ show: false });
  // };

  // handleShow = () => {
  //   this.setState({ show: true });
  // };

render() {
    const { userData } = this.state;
 return (
      <div>
         <div className="container border md:w-1/3 w-5/6 m-10 mx-auto text-3xl shadow p-5 shadow-xl">
        <h1 className="fname">First Name: {userData[this.state.id].first_name}</h1>
        <h1 className="lname">Last Name: {userData[this.state.id].last_name}</h1>
        <h1 className="dob">Date Of Birth: {userData[this.state.id].dob}</h1>
        <h1 className="dob">City,HomeTown:- {userData[this.state.id].city}</h1>
        <h1 className="dob">Mobile No:- {userData[this.state.id].phone}</h1>
      </div>
        <table className="table-auto w-[98%] md:text-xl text-l   text-center text-gray-500 border shadow mx-auto ">
          <thead className="md:text-xl text-l  bg-gray-100 text-gray-900 uppercase dark:text-gray-400 shadow-xl">
            <tr>
              <th>S_No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date Of Birth</th>
              <th>Action</th>
              
            </tr>
          </thead>
          <tbody className="child ">
            {userData.map((data, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>{data.dob}</td>
                <td className="flex justify-evenly content-center cursor-pointer "  ><GrOverview onClick={() => this.handleclick(i)} /> <FaEdit onClick={() => this.handleEdit(i)} /> <MdDelete onClick={() => this.handleDelete(i)} /></td>
              </tr>
            ))}
            </tbody>
          </table>
          <button className='w-[98%] md:text-xl text-l   text-center text-gray-500 border shadow mx-3' variant="primary" onClick={this.handleShow}>
          +Add More
        </button>
        
      </div>
    );
  }
}

export default UserData;
