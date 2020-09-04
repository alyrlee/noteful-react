import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import notefulContext from '../notefulContext'
import config from '../config'
import './Note.css'
import PropTypes from 'prop-types';

export default class Note extends Component {
  static defaultProps ={
    onDeleteNote: () => {},
  }
  static contextType = notefulContext;

  handleClickDelete = e => {
    e.preventDefault()
    const noteId = this.props.id
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
      })
      .then(() => {
        this.context.deleteNote(noteId)
        this.props.onDeleteNote(noteId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, folderId } = this.props;
    return (
      <div className='Note'>
        <h2 className='Note__name'>
          <Link to={`/note/${folderId}`}>
            {name}
          </Link>
        </h2>
        <button
          className='Note__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          <FontAwesomeIcon icon='trash-alt' />
          {' '}
          remove
        </button>
        <div className='Note__dates'>
          <div className='Note__dates-modified'>
            {/* Modified */}
            {' '}
            <span className='Date'>
              {/* {format(date_modified, 'Do MMM YYYY')} */}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

Note.propTypes = {
	content: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
	}
