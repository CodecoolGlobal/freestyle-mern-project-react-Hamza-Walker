import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from "../App"
import '../assets/css/fetch-user-notes.css'

export default function FetchUserNotes() {

  const [notes, setNotes] = useState([]);
  // const [selectedNote, setSelectedNote] = useState(null);
  const { user, setCurrentUser, setText, selectedNote, setSelectedNote } = useContext(AppContext);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await axios.get(`http://localhost:3000/api/note`, {
          params: { owner: user.email }
        });
        setNotes(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNotes();
  }, [user]);

  const handleSaveNote = (noteId) => {
    // implement Save note logic here
  }

  const handleDeleteNote = (noteId) => {
    // implement delete note logic here
  }

  const handleNoteClick = (note) => {
    setSelectedNote(note);
    setCurrentUser(user.email);
    setText(note.content);
  }

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id} className="fetch-user-note" onClick={() => handleNoteClick(note)}>
          <div>
            <h2>{note.title}</h2>
            {/* <p>{note.content}</p> */}
          </div>
          <div>
            <button onClick={(e) => {
              e.stopPropagation();
              handleSaveNote(note._id);
            }}>Save</button>
            <button onClick={(e) => {
              e.stopPropagation();
              handleDeleteNote(note._id);
            }}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
