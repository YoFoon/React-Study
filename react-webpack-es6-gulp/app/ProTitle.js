import React from 'react';

export default class ProTitle extends React.Component{

    render() {

        return (
            <tr>
                <th colSpan="2">{this.props.category}</th>
            </tr>
        )

    }

}