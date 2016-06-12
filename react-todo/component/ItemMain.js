var React = require("React");

var Items = require("./Items");

var ItemMain = React.createClass({

	render: function() {
		var _this = this;

		return (

			<section>
				<ul className="itemList">
					{_this.porps.itemList.map(function(todo,index) {

						return (
							
							<Items {...todo} key={index} index={index} {..._this.props} />
						
						)

					})}
				</ul>
			</section>

		);
	}

})

module.exports = ItemMain;