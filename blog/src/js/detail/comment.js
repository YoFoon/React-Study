import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class Article extends Component {

    constructor( props ) {
        super(props);
    }

    componentDidMount() {
        if(document.getElementById("duoshuo")){
            return false;
        } 
        let that = this;
        window.duoshuoQuery = {short_name:"yofoon"};
        (function() {
            var ds = document.createElement('script');
            ds.type = 'text/javascript';ds.async = true;
            ds.id="duoshuo";
            ds.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//static.duoshuo.com/embed.js';
            ds.charset = 'UTF-8';
            document.getElementsByTagName('body')[0].appendChild(ds);
            
        })();
    }

    render() {
        var item = this.props.item;
        return (
            <Row>
                <Col span={22} offset={1} className="pt2 pb2">
                    <div className="ds-thread" data-thread-key="YoFoon" data-title={item.title} data-url={"http://localhost:3000/view/blog/#/depail/"+item._id}></div>
                </Col>
            </Row>
        );

    }

}