import '../../css/MarkdownPage.css';
import EditorComponent from './pagecomponents/EditorComponent'
import NotesDisplayComponent from './pagecomponents/EditorComponent'

export default function MarkdownPage(): JSX.Element {

  return (
    <>
    <h1 className='page-header'>MarkdownPage</h1>
    <div className='flex-row'>
    <NotesDisplayComponent/>
    <EditorComponent/>
  
    </div>
      </>
  );
}
