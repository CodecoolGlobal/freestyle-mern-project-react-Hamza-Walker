import '../css/MarkdownPage.css';
import EditorComponent from './pagecomponents/EditorComponent'
import NotesDisplayComponent from  './pagecomponents/NotesDisplayComponent';


export default function MarkdownPage(): JSX.Element {

  return (
    <>
     <div className='button-container'>
          <button type="submit" className="submit-post-button">Post</button>
          <button type="submit" className="submit-edit-button">Edit</button>
          <button type="submit" className="submit-delete-button">Delete</button>
        </div>
    <h1 className='page-header'>MarkdownPage</h1>
    <div className='flex-row'>
    <NotesDisplayComponent/>
    <EditorComponent/>
    </div>
      </>
  );
}
