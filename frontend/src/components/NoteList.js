import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  const renderNotes = () => {
    return props.notesArray.map(note => {return <NoteItem key={note.id} note={note} clickHandler={props.clickHandler} />})
  }

  return (    
    <ul>
    {/* {console.log(props.notesArray)} */}
    {renderNotes()}
    </ul>
  );
}

export default NoteList;
