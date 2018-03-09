import React, { Component } from 'react';
import {Row, Input, Toast} from 'react-materialize';
import './styles.css';



class CreateToDo extends Component {


	constructor(props){
		super(props);
		this.state = {
			heading: '',
			details: '',
			date: ''
		}
		this.handleChangeForHeading = this.handleChangeForHeading.bind(this);
		this.handleChangeForDesc = this.handleChangeForDesc.bind(this);
	//	this.handleChangeForDate = this.handleChangeForDate(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChangeForHeading(e){
				this.setState({ heading: e.target.value });

	}
	handleChangeForDesc(e){
		this.setState({ details: e.target.value });
	}

	// handleChangeForDate(e,value){
	// 	this.setState({date: e});
	// 	console.log(value
	// }

	handleSubmit(e){
		e.preventDefault();
		if(!this.state.details.length && !this.state.details.length && !this.state.date.length){
			return
		}

		const temp = {
			heading: this.state.heading,
			details: this.state.details,
			date: this.state.date
		}

		this.props.onReturn(temp);


	}

	render(){

		return(
			<div>
				<h3> Create a ToDo List</h3>
				<Row className='collapsed'>
				  
				  	<div class="row">
    					<form class="col s12" onSubmit={this.handleSubmit}>
      						<div class="row">
        						<div class="input-field col s12">
          							<input Placeholder='Enter the Heading for ToDo' onChange={this.handleChangeForHeading} />
          							<input Placeholder='Enter the Description for List' onChange={this.handleChangeForDesc} />
          							<Input name='on' type='date' onChange={(e,value) =>
          								{
          									console.log(e,value);
          								}}

          							 placeHolder='enter the date' />
          							<Toast toast="Task Created">Create ToDo</Toast>
          							
        						</div>
      						</div>
    					</form>
  					</div>	
				</Row>
			</div>

			);
	}
}

export default CreateToDo;