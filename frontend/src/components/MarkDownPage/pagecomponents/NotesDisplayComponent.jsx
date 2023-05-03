import React,{useContext} from 'react'
import AppContext from '../AppContext';
import {marked} from 'marked';
import '../../../css/MarkdownPage.css'

export default function NotesDisplayComponent() {
  const { text }= useContext(AppContext);
  return (
      <div className='dangerous-dev' dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
      )

}
