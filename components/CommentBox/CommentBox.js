import React, { Component, PropTypes } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props); // makes this a React component

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.props.postId, this.props.commentForm.text)
  }

  render() {
    return (
      <form className="well clearfix"
        onSubmit={this.handleSubmit}>
        <textarea
          value={this.props.commentForm.text}
          onChange={(e) => this.props.onFormChange(e.target.value)}
          className="form-control"></textarea><br/>
        <span>
          {300 - this.props.commentForm.text.length} remaining characters.
        </span>
        <input
          type="submit"
          value="Comment"
          disabled={this.props.commentForm.text.length === 0 || this.props.commentForm.text.length > 300}
          className="btn btn-primary pull-right" />
      </form>
    );
  }
}

CommentBox.propTypes = {
  postId: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired
};

export default CommentBox;
