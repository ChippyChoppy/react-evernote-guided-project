import React, { Component } from 'react';
import NoteList from '../components/NoteList';

class Sidebar extends Component {
  state = {
    title: "default",
    body: "placeholder"
  }

  render() {
    // console.log(this.props)
    return (
      <div className='master-detail-element sidebar'>
        <NoteList clickHandler= {this.props.clickHandler} notesArray={this.props.notesArray}/>
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
