import React, { Component, Fragment } from 'react';
import Search from '../components/Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    arrayONotes: [],
    selectedNote: {},
    beenClicked: false,
    searchValue: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
      .then(r => r.json())
      .then(allNotes => {
        this.setState({arrayONotes: allNotes})
      })
  }
  // Sidebar clickHandler to setState to show selected note in Content
  clickHandler = (noteObject) => {
    this.setState({ selectedNote: noteObject, beenClicked: true })
  }

  editNoteSubmitHandler = (noteId, noteObject) => {
    console.log("inside of edit", noteObject)

    fetch(`http://localhost:3000/api/v1/notes/${noteId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(noteObject)
    })
      .then(response => response.json())
      .then(updatedNoteObject => {
        let updatedArray = [...this.state.arrayONotes]
        const index = updatedArray.findIndex(noteElement => noteElement.id === noteId)
        updatedArray[index] = updatedNoteObject
        this.setState({ arrayONotes: updatedArray, selectedNote: updatedNoteObject })
      })
  }

  searchNotes =() => {
    let filteredNotesArray = [...this.state.arrayONotes]
    if (this.state.searchValue !== "") {
      filteredNotesArray = filteredNotesArray.filter(note => note.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
      return filteredNotesArray
    } else {
      return filteredNotesArray
    }
  }
  
  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notesArray={this.searchNotes()} clickHandler={this.clickHandler} />
          <Content beenClicked={this.state.beenClicked} selectedNote={this.state.selectedNote} editSubmitHandler={this.editNoteSubmitHandler} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
