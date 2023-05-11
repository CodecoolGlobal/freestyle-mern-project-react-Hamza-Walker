import React,{useContext, useEffect, useState} from 'react'
import { AppContext } from '../../main'
import axios from 'axios'
import { Table } from 'reactstrap';
import './DisplayUSerNotesTable.css'; // import the CSS file for the table style

//TODO: create a table with user notes, id, title, content, date created, date updated, owner email
//TODO: create a button to create a new note
//TODO: create a button to delete a note
//TODO: create a button to edit a note
//TODO: create a button to save a note


const DisplayUSerNotesTable = () => {
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

  const handleEvent = (event,note) => {
    console.log(event.target,note)
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='notes-list-container'>
          <h1>DisplayUSerNotesTable</h1>
          <Table hover className='notes-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Content</th>
                <th>Date Created</th>
                <th>Date Updated</th>
                <th>Owner Email</th>
              </tr>
            </thead>
            <tbody onClick={handleEvent}>
              {notes.map(note => (
                <tr key={note._id} onClick={event => handleEvent(event, note)}>
                  <td>{note._id}</td>
                  <td>{note.title}</td>
                  <td>{note.content}</td>
                  <td>{new Date(note.createdAt).toLocaleString()}</td>
                  <td>{new Date(note.updatedAt).toLocaleString()}</td>
                  <td>{note.owner}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default DisplayUSerNotesTable
