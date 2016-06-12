var React = require('React');

var AppHeader = React.createClass({

	getInitialState: function() {

		return {
			text: ''
		}

	},

	handlerKeyUp: function(event) {

		if (event.keyCode === 13){

			var value = event.target.value;

			if (!value) return false;

			var newTodoItem = {
				text: value,
				isDone: false
			}

			event.target.value = "";

			this.setState({text: ""});

			this.props.addItem(newTodoItem);
		}
	},

	handleChange: function(event) {

		this.setState({text: event.target.value});
	},

	handlerClick: function(evnet) {
		var newTodoItem = {

			text: this.state.text,
			isDone: false

		}
		this.props.addItem(newTodoItem);
		
		this.setState({text: ""});
	},

	render : function() {
		return (
			<section className="appHeader from-group">
				<input type="test" className="form-control" onKeyUp={this.handlerKeyUp} onChange={this.handleChange} placeholder="add one todo" value={this.state.text}/>
				<button className="btn btn-primary" onClick={this.handlerClick}>add one</button>
			</section>
		)
	}
});

module.exports = AppHeader;