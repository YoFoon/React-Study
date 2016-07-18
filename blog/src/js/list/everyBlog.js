import React from 'react';
import { Link } from 'react-router';

export default class EveryBlog extends React.Component {

    constructor (props) {
        super(props);
    }
    
    render() {
        
        let item = this.props.item;

        return(
            <div className="eachBlog">
                <h2 className="title"><Link to={"/depail/"+item._id}>{item.title}</Link></h2>
                <article dangerouslySetInnerHTML={{__html: item.post}}></article>
                <div className="meta">
                    <span className="time">{item.time.day}</span>
                    <span className="tag">on<a>{item.tags}</a></span>
                    <span className="read">{item.read} Read</span>
                </div>
            </div>  
        );
    }

}