import React from 'react';

import ProTitle from './ProTitle';
import ProRow from './ProRow';

export default class ItemList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            data: this.props.items
        }
    }

    render() {

        this.state.data.sort((a,b)=>a.category>b.category);

        let type = null;
        let arr = [];

        for( let item of this.state.data ) {

            if( item.name.indexOf( this.props.filterText ) === -1 ) {
                continue;
            }

            if( type != item.category ) {

                type = item.category;

                arr.push(

                    <ProTitle
                        category={item.category} 
                        key={item.category} 
                    />

                )

            }

            arr.push( 

                <ProRow 
                    key={item.name} 
                    name={item.name} 
                    price={item.price} 
                />

             )

        }


        return (

            <div>
                <table>
                    <colgroup>
                        <col width="100"></col>
                        <col widht="100"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr}
                    </tbody>
                </table>
            </div>

        )
    }

} 