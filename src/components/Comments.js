import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Spinner, ListGroup } from 'react-bootstrap';

class Comments extends Component{
	state = { comments:[] };
	async componentDidMount()
	{

		let result= await axios.get("https://my-json-server.typicode.com/rithvik8gh/restapi/comments");
		this.setState({comments:result.data});
	}
	render()
	{
		return(
			<div className="container">
			  {this.state.comments.length}>0?(
				<div>{this.state.comments.map((comments)=>

					<ListGroup>
  						<ListGroup.Item key={comments.postId}>{comments.name}</ListGroup.Item>
  					</ListGroup>
					)}</div>
					):(
			  <Spinner animation="border" role="status">
  				<span className="sr-only">Loading...</span>
			  </Spinner>
			  )}
			</div>
			);
	}
}
export default Comments;