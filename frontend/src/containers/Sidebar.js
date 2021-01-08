import React, { Component } from 'react';
import NoteList from '../components/NoteList';

class Sidebar extends Component {
  state = {
    title: "Your title here",
    body: "body body body body",
    user: ""
  }

  localNewNoteHandler = () => {
    let noteObject = this.state
    console.log("in createhandler", noteObject)
    this.props.newNoteHandler(noteObject)
  }

  render() {
    console.log("Sidebar state", this.state)
    console.log("Sidebar props", this.props.notesArray[0])
    return (
      <div className='master-detail-element sidebar'>
        <NoteList clickHandler={this.props.clickHandler} notesArray={this.props.notesArray}/>
        <button onClick={this.localNewNoteHandler} >New</button>
      </div>
    );
  }
}

export default Sidebar;
