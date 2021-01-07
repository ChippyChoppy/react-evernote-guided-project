import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
    title: this.props.defaultTitleValue,
    body: this.props.defaultBodyValue
  }

  // localChangeHandler = (e) => {
  //   this.setState({
  //     title: e.target.value,
  //     body: e.target.value
  //   })
  // }

  titleChangeHandler = (e) => {
    this.setState({title: e.target.value})
  }

  bodyChangeHandler = (e) => {
    this.setState({body: e.target.value})
  }

  saveEditHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.props.noteId, this.state)
    this.props.cancelClicked()
  }

  localClickHandler = (e) => {
    this.props.cancelClicked()
  }

  render() {
    return (
      <form className="note-editor" onSubmit={this.saveEditHandler}>
        <input type="text" name="title" value={this.state.title} onChange={this.titleChangeHandler} />
        <textarea name="body" value={this.state.body} onChange={this.bodyChangeHandler} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.localClickHandler} >Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
