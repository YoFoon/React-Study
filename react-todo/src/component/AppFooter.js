var React = require("React");

var AppFooter = React.createClass({

	handleClick: function() {

		this.props.clearDone();

	},

	handleAllState : function(event) {
		
		this.props.changeAllState(null, event.target.value, true);
	
	},
	render : function() {
		return (
			
			<section className="appFooter">
				
				<div>
					
					<input type="checkbox" checked={this.props.isAllChecked} onChange={this.handleAllState}/>
					
					<span>{this.props.doneLength}</span>已经完成 / <span>{this.props.todoLength}</span>总数
				
				</div>
				
				<button className="btn btn-default btn-tiny pull-right" onClick={this.handleClick}>clean done</button>
			
			</section>
		)
	}

});

module.exports = AppFooter;