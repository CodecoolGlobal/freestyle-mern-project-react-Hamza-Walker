import React,{useContext } from 'react'
import { AppContext } from '../main'
const NotesListPage = () => {
  const { user } = useContext(AppContext)
  return (
    <div>NotesListPage
      	  <pre>{JSON.stringify(user, null, 2)}</pre>

    </div>
    
  )
}

export default NotesListPage

