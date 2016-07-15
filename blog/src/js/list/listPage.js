import React from 'react';
import { Row, Col } from 'antd';

import EveryBlog from './everyBlog';

export default class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            flag:false
        }
    }

    componentDidMount() {
        this.state.flag = true;
        this.setState({
            flag: true 
        });
    }

    render() {
        var arrArti = []; 

        if( this.state.flag ){
            for( let i = 0; i< 10; i++ ){
                arrArti.push(<EveryBlog key={i} />);
            }
        }
        return (
            <Row className="abso-layout">
                <Col span={22} offset={1} className="pt2 pb2">{arrArti}</Col>
            </Row>
        );
    }
}