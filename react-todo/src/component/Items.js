var React = require('React');

var Items = React.createClass({

	handleChange: function() {
		var isDone = !this.props.isDone;

		this.props.changeTodoState(this.props.index, isDone,false);
	},

	handleDeleteTodo : function() {

		this.props.deleteTodo(this.props.index);

	},
	render : function() {

		var doneStyle = this.props.isDone ? {textDecoration: 'line-through'} : {textDecoration : 'none'};
		
		return (
			
			<li key={this.props.key} onMouseOver={this.handlerMouseOver} onMouseOut={this.handlerMouseOut}>
				
				<input type="checkbox" checked={this.props.isDone} onChange={this.handleChange} />
				
				<span style={doneStyle}>{this.props.text}</span>
				
				<button className="btn btn-default delete-item" onClick={this.handleDeleteTodo}>delete</button>
			
			</li>
		)
	}

});

module.exports = Items;