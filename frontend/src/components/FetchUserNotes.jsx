import { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App"

export default function FetchUserNotes() {
  const [notes, setNotes] = useState([]);
  const { user } = useContext(AppContext);

  useEffect(() => {
    async function fetchNotes() {
      const response = await fetch(`/api/notes?owner=${user.email}`);
      const data = await response.json();
      setNotes(data);
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

