import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class ProductBox extends React.Component{

    constructor(props) {

        super(props);

    }

    render() {

        return <div>Hello World!</div>

    }

}

ReactDOM.render(
    <ProductBox />,
    document.getElementById("app")
)