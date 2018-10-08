import React from 'react';

class CommentBox extends React.Component{
    state = {
        comment: ''
    };

    handleChange = (event) => {
        this.setState({ comment: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ comment: '' });
    };

    render() {
      return(
        <form action="">
          <h4>Add a comment</h4>
          <textarea value={this.state.comment} onSubmit={this.handleSubmit} onChange={this.handleChange} name="" id="" cols="30" rows="10"/>
          <div>
            <button>
              Submit Comment
            </button>
          </div>
        </form>
      )
    }
}

export default CommentBox;