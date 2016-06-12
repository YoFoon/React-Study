import React from 'react';

export default class ProRow extends React.Component{

    render() {

        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>

        )

    }

}