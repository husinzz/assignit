import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Assignment = props => {
  <tr>
    <td>{props.Assignment.assignmentName}</td>
    <td>{props.Assignment.assignmentLink}</td>
    <td>{props.Assignment.assignmentDesc}</td>
    <td>
      <Link to={"/edit/" + props.assignment._id}> Edit </Link> | <a href="#" onClick={
        () => { props.deleteAssignment(props.assignment._id) }
      }> Delete </a>
    </td>
  </tr>
}


export default class AssignmentList extends Component {
  constructor(props) {
    super(props);
    this.deleteAssignment = this.deleteAssignment.bind(this);
    this.state = {assignment : []}
  }

  componentDidMount() {
    axios
      .delete("http://localhost:5000/")
      .then( 
        res => this.setState({assignment : res.data})
      )
      .catch(
        err => console.log(err)
      )
  }


  deleteAssignment(id) {
    axios
      .delete("http://localhost:5000/" + id)
      .then( 
        res => console.log(res.data)
      )
    this.setState({
      assignment : this.state.assignment.filter((el) => el._id !== id)
    });
  }


  assignmentList() {
    return this.state.assignment.map(curresntassignment => {
      return <Assignment assignment={curresntassignment} deleteAssignment={this.deleteAssignment} key={curresntassignment._id}/>
    })
  }

  render() {
    return(
      <div>
        <h3>Assignment List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Link</th>
              <th>Desc</th>
            </tr>
          </thead>
          <tbody>{this.assignmentList()}</tbody>
        </table>
      </div>
    )
  }





}