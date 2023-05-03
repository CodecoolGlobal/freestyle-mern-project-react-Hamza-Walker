import '../css/MarkdownPage.css';
import EditorComponent from './pagecomponents/EditorComponent'
import NotesDisplayComponent from  './pagecomponents/NotesDisplayComponent';


export default function MarkdownPage(): JSX.Element {

  //TODO: Import the users information after the login from the context API
  //TODO: use axios to POST, DELETE, PATCH
 const handlePost = (event) => {
console.log(event)
 }

 const handlePatch = (event) => {
console.log(event)
 }
 const handleDelete = (event) => {
  console.log(event)
 }






  return (
    <>
     <div className='button-container'>
          <button type="submit" className="submit-post-button" onClick={ (e) => handlePost(e)}>Post</button>
          <button type="submit" className="submit-edit-button" onClick={(e) => handlePatch(e)}>Edit</button>
          <button type="submit" className="submit-delete-button" onClick={(e) => handleDelete(e)}>Delete</button>
        </div>
    <h1 className='page-header'>MarkdownPage</h1>
    <div className='flex-row'>
    <NotesDisplayComponent/>
    <EditorComponent/>
    </div>
      </>
  );
}
