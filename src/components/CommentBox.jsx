import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // call the action creator
    this.props.saveComment(this.state.comment);
    // clear the state
    this.setState({
      comment: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <div>
            <button>Submit comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fetch comments</button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
