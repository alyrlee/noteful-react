import React, {Component} from 'react';
import {Route,Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NoteListNav from '../NoteListNav/NoteListNav';
import NotePageNav from '../NotePageNav/NotePageNav';
import NoteListMain from '../NoteListMain/NoteListMain';
import NotePageMain from '../NotePageMain/NotePageMain';
import AddNote from '../AddNote/AddNote';
import AddFolder from '../AddFolder/AddFolder';
import notefulContext from '../notefulContext';
import config from '../config';
import ErrorHandler from '../ErrorHandler';
import './App.css';


class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`)
    ])
    .then(([notesRes, foldersRes]) => {
      if (!notesRes.ok) {
        return notesRes.json().then(e => Promise.reject(e));
      }
      if (!foldersRes.ok) {
        return foldersRes.json().then(e => Promise.reject(e));
      }
      return Promise.all([notesRes.json(), foldersRes.json()]);
    })
    .then(([notes, folders]) => {
      this.setState({notes, folders});
    })
    .catch(error => {
      console.error({error});
    });
  }

  handleDeleteNote = id => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  handleAddNote = (addedNote) => {
    this.setState({
      notes: [
        ...this.state.notes,
        addedNote
      ]
    });
  }

  handleAddFolder = (folder) => {
    this.setState({
      folders: [
        ...this.state.folders,
        folder
      ]
    });
  }

  updateNewNote = ( newNote ) => {
    this.setState({
      notes: [
        ...this.state.notes,
        newNote
      ]
    });
  }

  updateNewFolder = ( newFolder ) => {
    this.setState({
      folders: [
        ...this.state.folders,
        newFolder
      ]
    });
  }

  renderNavRoutes() {
    return (
        <>
          {['/', '/folders/:folder_id'].map(path => (
            <Route
              exact
              key={path}
              path={path}
              component={NoteListNav}
            />
          ))}

          <Route path="/notes/:id" component={NotePageNav}/>
          <Route path="/add-folder" component={NotePageNav}/>
          <Route path="/add-note" component={NotePageNav}/>
        </>
    );
  }

  renderMainRoutes() {
    return (
        <>
          {['/', '/folders/:folder_id'].map(path => (
            <Route
              exact 
              key={path}
              path={path}
              component={NoteListMain}/>
          ))}

          <Route path="/notes/:id" component={NotePageMain}/>
          <Route path="/add-folder" component={AddFolder}/>
          <Route path="/add-note" component={AddNote}/>
        </>
    );
  }

  render() {
    const value = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.handleDeleteNote,
      addFolder: this.handleAddFolder,
      addNote: this.handleAddNote
    };
    
    return (
      <ErrorHandler>

        <notefulContext.Provider value={value}>
          
          <div className="App">
          
            <nav className="App__nav">
              {this.renderNavRoutes()}
            </nav>

            <header className="App__header">
              <h1>
                <Link to="/">
                  Noteful
                </Link>
                {' '}
                <FontAwesomeIcon icon="check-double"/>
              </h1>
            </header>

            <main className="App__main">
              {this.renderMainRoutes()}
          </main>
        
          </div>
        </notefulContext.Provider>

      </ErrorHandler>
    );
  }
}

export default App;