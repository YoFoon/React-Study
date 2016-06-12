var React = require('react');

var ProTitle = React.createClass({
    
    render: function() {

        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        )

    }

});

module.exports = ProTitle;