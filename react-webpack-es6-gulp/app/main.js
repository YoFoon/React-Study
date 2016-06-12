import React from 'react';
import ReactDOM from 'react-dom';

import ItemList from './ItemList';
import SearchBox from './SearchBox';

import jsonData from '../data';

class ProductBox extends React.Component{

    constructor(props) {

        super(props);

        this.state = {
            filterText: ""
        }

    }

    userInput(filterText) {
        
        this.state.filterText = filterText;

        this.setState({
            filterText: filterText 
        });

    }


    render() {

        return (
            <div>

                <SearchBox 
                    filterText={this.state.filterText} 
                    userInput={this.userInput.bind(this)} 
                />
                <ItemList 
                    items={this.props.data} 
                    filterText={this.state.filterText} 
                />
            </div>
        )

    }

}

ReactDOM.render(
    <ProductBox data={jsonData} />,
    document.getElementById("app")
)
