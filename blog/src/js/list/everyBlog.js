import React from 'react';

export default class EveryBlog extends React.Component {

    constructor (props) {
        super(props);
    }
    
    render() {
        return(
            <div className="eachBlog">
                <h2 className="title"><a>JS 中禁用输入法</a></h2>
                <article>
                    123456
                </article>
                <div className="meta">
                    <span className="time"></span>
                    <span className="tag">on<a></a></span>
                    <span className="read"></span>
                </div>
            </div>  
        );
    }

}