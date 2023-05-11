import React,{useContext, useEffect, useState} from 'react'
import { AppContext } from '../main'
import axios from 'axios'


const NotesListPage = () => {
  const { user, notes, setNotes} = useContext(AppContext)
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchUserObject = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/note/`, {
        params: {owner: user.email}
      });
      setNotes(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  fetchUserObject();
}, [user.email]);
const handleEvent = (event) => {
  console.log(event.target)
}
return (
  <>
    {loading ? (
      <div>Loading...</div>
    ) : (
      <div className='notes-list-container'>
        <h1>NotesListPage</h1>
        <ul onClick={handleEvent}>
          {notes.map(note => (
            <li key={note._id}>{note.title}</li>
          ))}
        </ul>
      </div>
    )}
  </>
);
  
}

export default NotesListPage

