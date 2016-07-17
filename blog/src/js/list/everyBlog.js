import React from 'react';
import { Link } from 'react-router';

export default class EveryBlog extends React.Component {

    constructor (props) {
        super(props);
    }
    
    render() {
        return(
            <div className="eachBlog">
                <h2 className="title"><Link to="/depail/YoFoon">JS 中禁用输入法</Link></h2>
                <article>
                    123456
                </article>
                <div className="meta">
                    <span className="time">2016-07-14</span>
                    <span className="tag">on<a>Blog</a></span>
                    <span className="read">4 Read</span>
                </div>
            </div>  
        );
    }

}