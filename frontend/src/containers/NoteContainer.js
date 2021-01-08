import React, { Component, Fragment } from 'react';
import Search from '../components/Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {

  state = {
    arrayONotes: [],
    selectedNote: {},
    beenClicked: false,
    editBeenClicked: false,
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
    this.setState({ selectedNote: noteObject, beenClicked: true, editBeenClicked: false })
  }
  // allows sidebar click to change state of editbeenclicked and pass into content so conditional render works correctly
  editClickHandler = () => {
    this.setState({ editBeenClicked: !this.state.editBeenClicked })
  }
  // moved into container because editBeenClicked had to be moved up
  cancelClickHandler = () => {
    this.setState({ editBeenClicked: false })
  }

  searchChangeHandler = (e) => {
    this.setState({searchValue: e.target.value})
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
        <Search searchValue={this.state.searchValue} searchChangeHandler={this.searchChangeHandler} />
        <div className='container'>
          <Sidebar notesArray={this.searchNotes()} clickHandler={this.clickHandler} />
          <Content editBeenClicked={this.state.editBeenClicked} editClickHandler={this.editClickHandler} cancelClicked={this.cancelClickHandler} beenClicked={this.state.beenClicked} selectedNote={this.state.selectedNote} editSubmitHandler={this.editNoteSubmitHandler} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
