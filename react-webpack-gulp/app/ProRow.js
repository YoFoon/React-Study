var React = require('react');

var ProRow = React.createClass({
    
    render: function() {

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )

    }

});

module.exports = ProRow;