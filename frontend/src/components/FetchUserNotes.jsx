import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from "../App"

export default function FetchUserNotes() {
  const [notes, setNotes] = useState([]);
  const { user } = useContext(AppContext);

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

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id}>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}
