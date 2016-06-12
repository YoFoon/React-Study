var React = require('react');

var ProTitle = require('./ProTitle');

var ProRow = require('./ProRow'); 

var ItemList = React.createClass({
    
    getInitialState: function() {

        return {data: this.props.items};

    },


    render: function() {   

        function cmp(a,b){
            return a.category > b.category;
        }
        this.state.data.sort(cmp);

        var type = null; 
        var arr = [];
        for ( var item of this.state.data ) {
            
            if( item.name.indexOf( this.props.filterText ) === -1 ) {
                continue;
            }

            if( type != item.category ) {

                type = item.category;

                arr.push( <ProTitle 
                            category={item.category} 
                            key={item.category} 
                          /> );

            }
            
            arr.push( <ProRow 
                        key={item.name} name={item.name} 
                        price={item.price} 
                      /> );
            
        }

        return (
            <div>
                <table>
                    <colgroup>
                            <col width="100"></col>
                            <col width="100"></col>
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

})

module.exports = ItemList;