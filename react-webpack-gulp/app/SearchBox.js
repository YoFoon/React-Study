var React = require('react');

var SearchBox = React.createClass({

    handleChange: function () {
        
        this.props.userInput(
            this.refs.filterTextInput.value
        );

    },

    render: function () {

        return (
            <input 
                type="text" 
                palceholder="Search..." 
                value={this.props.filterText} 
                ref="filterTextInput" 
                onChange={this.handleChange}  
            />

        )

    }

});

module.exports = SearchBox;