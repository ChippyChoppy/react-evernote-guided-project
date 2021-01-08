import React, { Component } from 'react';
import NoteEditor from '../components/NoteEditor';
import NoteViewer from '../components/NoteViewer';
import Instructions from '../components/Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  state = {
    saveBeenClicked: false,
  }

  
  // editClickHandler = () => {
  //   this.setState({ editBeenClicked: !this.state.editBeenClicked })
  // }

  // cancelClickHandler = () => {
  //   this.setState({ editBeenClicked: false })
  // }

  renderContent = () => {
    const noteObject = this.props.selectedNote

    if (this.props.editBeenClicked) {
      return <NoteEditor selectedNote={noteObject} defaultTitleValue={noteObject.title} defaultBodyValue={noteObject.body} noteId={noteObject.id} submitHandler={this.props.editSubmitHandler} cancelClicked={this.props.cancelClicked} />;
    } 
    if (this.props.beenClicked === true ) {
      return <NoteViewer editClickHandler={this.props.editClickHandler} selectedNote={noteObject} />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
