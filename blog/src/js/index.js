import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'antd';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        let arrLi = [];
        let arrName = ["Home","Blog","Work","Life","Book"];
        for( let i = 0, arrLen = arrName.length; i < arrLen; i++ ){
            arrLi.push(<Col xs={{span: 16}} sm={{span: 16}} md={{span: 4}} className="nav-li" key={arrName[i]}><a>{arrName[i]}</a></Col>)
        }

        return (
            <Row className="fullPage">
                <Col xs={{span: 22, offset:1}} sm={{span: 22, offset:1}} md={{span: 8, offset:8}} className="proFile">
                    <a href="#" className="photo">
                        <img src="/dist/images/blog-head.jpg" />
                    </a>
                    <h3>YoFoon</h3>
                    <hr className="divide-line short-line" />
                    <p>努力向上吧，少年。</p>
                    <hr className="divide-line short-line" />
                    <Row type="flex" justify="center" align="middle" className="navigation mt1">
                       {arrLi}
                    </Row>
                    <Row type="flex" justify="center" align="middle" className="my-links mt1">
                        <Col md={{span: 4}} key="github" className="lnik-li"><a className="github-icon"></a></Col>
                        <Col md={{span: 4}} key="weibo" className="lnik-li"><a className="weibo-icon"></a></Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));