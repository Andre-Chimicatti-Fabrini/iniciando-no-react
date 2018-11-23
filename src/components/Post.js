import React from 'react';

import Comment from './Comment';

export default class Post extends React.Component {
    cpnstructor(props){
        super(props);

        this.state = {
            comments: [
                { text: 'Bom post!' }
            ]
        }

    }


    render () {
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <form>
                    <input />
                    <button type="submit">Comentar</button>
                </form>
                { this.state.comments.map((comment, index)=> {
                  return <Comment key={index} text={comment.text} />
                }) }
            </div>
        );
    }
} 