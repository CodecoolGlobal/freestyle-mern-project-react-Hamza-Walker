import {useContext} from 'react'
import '../../css/MarkdownPage.css';
import EditorComponent from './pagecomponents/EditorComponent'
import NotesDisplayComponent from './pagecomponents/EditorComponent'
import AppContext from '../MarkDownPage/AppContext';

export default function MarkdownPage(): JSX.Element {
  const { setText } = useContext(AppContext);


  return (
    <>
    <NotesDisplayComponent/>
    <EditorComponent/>
    <h1 className='page-header'>MarkdownPage</h1>
    <div className='flex-row'>
      
      <div className='container'>
        <form className='note-write-form'>
          <textarea
            className='textarea-write'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />  
        </form>
      </div>
      </div>
      </>
  );
}
