var React = require('React'),
	ReactDOM = require('react-dom');

//加载样式
require('../less/app.less');

var AppFooter = require('./AppFooter');
var AppHeader = require('./AppHeader');
var ItemMain = require('./ItemMain');

var App = React.createClass({

	getInitialState: function() {
		return {

			todoItem: [],

			isAllChecked: false

		}
	},


	addItem: function(item) {

		var todoList = this.state.todoItem.push(item);

		this.setState({isAllChecked: false});

		this.forceUpdate();

	},


	changeTodoState: function(index, isDone, isAllChange) {

		if ( isAllChange ) {

			this.setState({

				todoItem: this.state.todoItem.map (function (todo) {

					todo.isDone = isDone;

					return todo;

				}),

				isAllChecked: isDone

			})

		} else {

			this.state.todoItem[index].isDone = isDone;

			this. allChecked();

			this.forceUpdate();

		}

	},

	deleteTodo: function() {

		var newTodo = this.state.todoItem.splice(index,1);

		this.setState({todoList: newTodo});

	},

	clearDons: function() {

		var doneList = this.state.todoItem.filter(function(item) {

			return item.isDone === false;

		})

		this.setState({todoItem: doneList, isAllChecked: false});

	},

	allChecked: function() {

		var allCheck = this.state.todoItem.every(function(item) {

			return item.isDone === true;

		});

		if ( allCheck ) {

			this.setState({isAllChecked: true});

		}

	},

	render: function() {

		var props = {

			todoLength: this.state.todoItem.length || 0,

			doneLength: this.state.todoItem.filter( function (item) {

				return item.isDone === true;

			} ).length || 0
		};

		return (

			<div class="panel">

				<header className="mainHeader">

					<h2>Webpack + React TODO</h2>

				</header>

				<AppHeader addItem={this.addItem} />

				<ItemMain itemList={this.state.todoItem} changeTodoState={this.changeTodoState} deleteTodo={this.deleteTodo} />

				<AppFooter {...props} isAllChecked={this.state.isAllChecked} clearDons={this.clearDons} changeAllState={this.changeTodoState} />				

			</div>
		)

	}


});

ReactDOM.render(
	<App />,
	document.getElementById('app')
)