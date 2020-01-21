import React, { Component } from "react";
import { connect } from "react-redux";

export class CommentList extends Component {
  renderComments() {
    const { comments } = this.props;
    return comments.map((comment, index) => {
      return <li key={index}>{comment}</li>;
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);
