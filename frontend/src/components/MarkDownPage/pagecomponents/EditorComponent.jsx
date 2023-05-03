import React,{ useState } from 'react'
import AppContext from '../../AppContext';

export default function EditorComponent() {
 const { text }= useContext(AppContext);
  return (
      <div className='dangerous-dev' dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
      )
}

