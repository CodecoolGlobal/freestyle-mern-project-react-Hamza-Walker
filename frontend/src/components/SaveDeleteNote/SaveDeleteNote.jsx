import React, {useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../../main';
import { Button } from 'reactstrap';
import '../../assets/css/save-delete-notes.css';

export default function SaveDeleteNote() {
  const { setText, selectedNote, setSelectedNote, text, notes, setNotes } = useContext(AppContext);

  const handleSaveNote = async (noteId) => {
    try {
      if (!selectedNote) {
        return;
      }

      // Create the updated note object with the new title and content
      const updatedNote = {
        ...selectedNote,
        title: selectedNote.title,
        content: text,
      };

      // Send the PUT request to update the note
      const response = await axios.put(
        `http://localhost:3000/api/note/${noteId}`,
        updatedNote
      );

      // Update the selected note with the updated note object
      setSelectedNote(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      await axios.delete(`http://localhost:3000/api/note/${noteId}`);
      setNotes(notes.filter((note) => note._id !== noteId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setText(note.content);
  };

  return (
    <div className="notes-title">
      {notes.map((note) => (
        <div key={note._id} className="fetch-user-note" onClick={() => handleNoteClick(note)}>
          <div>
            <h2 className='raise-title'>{note.title}</h2>
            {/* <p>{note.content}</p> */}
          </div>
          <div>
            <Button color="dark" onClick={(e) => {
              e.stopPropagation();
              handleSaveNote(note._id);
            }}>
              Save
            </Button>
            <Button color="danger" onClick={(e) => {
              e.stopPropagation();
              handleDeleteNote(note._id);
            }}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
