import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

class Photos extends Component{
	state = { comments:[] };
	async componentDidMount()
	{

		let result= await axios.get("https://jsonplaceholder.typicode.com/comments");
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
export default Photos;