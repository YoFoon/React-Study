import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';
import SideNav from './common/sideNav';
import ListPage from './list/listPage';


class BlogList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Row className="fullPage">
                <Col xs={{span:1}} sm={{span:1}} md={{span:4}} className="H100" className="hidden-sm hidden-xs"><SideNav /></Col>
                <Col xs={{span: 22}} sm={{span: 22}} md={{span: 20}} className="H100"><ListPage /></Col>
            </Row>
        )
    }

}

ReactDOM.render(<BlogList />, document.getElementById('app'));