import React from 'react';

class NoteItem extends React.Component {

  localClickHandler = () => {
    this.props.clickHandler(this.props.note)
  }

  blurb = (body, length, ending) => {
    if (length == null) {
      length = 26
    }
    if (ending == null) {
      ending = '...'
    }
    if (body.length > length) {
      return body.substring(0, length - ending.length) + ending
    } else {
      return body
    }
  }

  render() {
    console.log(this.props)
    return (
      <li onClick={this.localClickHandler} >
        <h2>{this.props.note.title}</h2>
        <p>{this.blurb(this.props.note.body, 45, "...click to read")}</p>
      </li>
    )
  }
}



export default NoteItem;
