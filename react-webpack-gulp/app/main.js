var React = require("react");
var ReactDOM = require('react-dom');

var SearchBox = require('./SearchBox');
var ItemList = require('./ItemList');

var jsonData = require('../data');


var ProductBox =  React.createClass({

    getInitialState: function () {

        return {
            filterText: ''
        };
        
    },

    userInput: function( filterText ) {

        this.setState({
            filterText: filterText
        });

    },

    render: function () {

        return (
            <div>
                <SearchBox 
                    filterText={this.state.filterText} 
                    userInput={this.userInput} 
                />
                <ItemList 
                    items={this.props.initData} 
                    filterText={this.state.filterText} 
                />
            </div>
        )
        
    }

});


ReactDOM.render(
    <ProductBox initData={jsonData} />,
    document.getElementById("app")
)