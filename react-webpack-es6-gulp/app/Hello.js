import React from 'react';
import ReactDOM from 'react-dom';

import jsonData from '../data';

class ProductBox extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            data:"bb",
            _index: 1
        }

    }

    handclick(e) {

        this.state._index ++ ;
        this.state.data = this.state._index;
        let aaa = this.state._index;
        this.setState({data:aaa})
    }

    render() {
        console.log(this.state.data);

        return <div onClick={this.handclick.bind(this)}>{this.state.data}</div>

    }

}

ReactDOM.render(
    <ProductBox data={jsonData} />,
    document.getElementById("app")
)


// var React = require("react");
// var ReactDOM = require('react-dom');


// var jsonData = require('../data');


// var ProductBox =  React.createClass({

//     render: function () {

//         return (
//             <div>Hello world!</div>
//         )
        
//     }

// });


// ReactDOM.render(
//     <ProductBox initData={jsonData} />,
//     document.getElementById("app")
// )