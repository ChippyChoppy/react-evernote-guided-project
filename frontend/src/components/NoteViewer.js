import React, { Fragment } from 'react';

class NoteViewer extends React.Component {

  localEditHandler = () => {
    this.props.editClickHandler()
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <h2>{this.props.selectedNote.title}</h2>
        <p>{this.props.selectedNote.body}</p>
        <button onClick={this.localEditHandler} >Edit</button>
      </Fragment>
    )
  }
}

// const NoteViewer = (props) => {
//   const localClickHandler = (event) => {
//     props.editClickHandler(event)
//   }

//   return(
//   <Fragment>
//     <h2>{props.selectedNote.title}</h2>
//     <p>{props.selectedNote.body}</p>
//     <button onClick={localClickHandler} >Edit</button>
//   </Fragment>
//   )
// }

export default NoteViewer;
