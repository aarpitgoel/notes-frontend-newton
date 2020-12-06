import React, { Component } from 'react'
import './Notes.css'
import Header from '../Header/Header'

class Notes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      note: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleAddNote = this.handleAddNote.bind(this)
  }

  handleOnChange (e) {
    // console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleAddNote () {
    console.log(this.state.note)
    if (!this.state.note) {
      window.alert('Please enter a note')
      return
    }
    const createNotePayload = {
      note: this.state.note
    }
    this.props.createNote(createNotePayload)
    this.setState({ note: '' })
    this.props.history.push('/viewnotes')
  }

  render () {
    console.log(this.state.note)
    return (
      <div id='notes'>
        <Header history={this.props.history} />
        <div className='notes-form'>
          <textarea name='note' value={this.state.note} onChange={this.handleOnChange} />
          <button onClick={this.handleAddNote}>Add note</button>
        </div>
      </div>
    )
  }
}

export default Notes
