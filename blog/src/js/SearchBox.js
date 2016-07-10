import React from 'react';

export default class SearchBox extends React.Component{

    constructor(props) {
        super(props);
    }

    handleChange() {

        this.props.userInput (
            this.refs.filterTextInput.value
        );

    }

    render() {

        return (

            <input 
                type="text" 
                placeholder="Search..." 
                value={this.props.filterText} 
                ref="filterTextInput" 
                onChange={this.handleChange.bind(this)} 
            />
        )

    }

}