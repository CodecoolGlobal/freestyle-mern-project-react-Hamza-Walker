import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from "../App"
import '../assets/css/fetch-user-notes.css'

export default function FetchUserNotes() {

  const [notes, setNotes] = useState([]);
  // const [selectedNote, setSelectedNote] = useState(null);
  const { user, setCurrentUser, setText, selectedNote, setSelectedNote, text } = useContext(AppContext);

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
  
      // Update the notes state with the updated note object
      setNotes((prevState) =>
        prevState.map((note) => {
          if (note._id === noteId) {
            return response.data;
          } else {
            return note;
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
  
  

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
