import React,{ useContext,useState } from 'react'
import AppContext from '../AppContext';
import '../../css/MarkdownPage.css'


export default function EditorComponent() {
 const { text, setText } = useContext(AppContext);
  return (
    <div className='container'>
    <form className='note-write-form'>
      <textarea
        className='textarea-write'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />  
    </form>
  </div>
      )
}

