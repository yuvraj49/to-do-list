import React, { Component } from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import './styles.css';


class ToDoList extends Component {


	render(){	
		let result = this.props.item;
		return(<div className="collapsed">
				<h4> Your Created To Do List </h4> 
			 	<Collapsible popout>
			 			{result.map((items,index) =>  (
			 				<CollapsibleItem header = { items.heading} key={index}>	
  					  			{items.details} 
  					  		</CollapsibleItem> 
			 				))}
				</Collapsible>
			</div>);
	}
}

export default ToDoList;