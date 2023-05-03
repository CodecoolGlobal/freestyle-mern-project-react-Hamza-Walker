import { useState } from 'react';
import {marked} from 'marked';
import './MarkdownPage.css';

export default function MarkdownPage(): JSX.Element {

  const [text, setText] = useState('# A demo of `react-markdown`\n\n`react-markdown` is a markdown component for React.\n\n👉 Changes are re-rendered as you type.\n\n👈 Try writing some markdown on the left.\n\n## Overview\n\nA component by [Espen Hovlandsdal](https://espen.codes/)');

  return (
    <>
    <div className='container'>
      <h1 className='page-header'>MarkdownPage</h1>
      <form className='note-write-form'>
        <textarea
          className='textarea-write'
          style={{ height: 'calc(50vh - 50px)' }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='button-container'>
          <button type="submit" className="submit-post-button">Post this </button>
          <button type="submit" className="submit-edit-button">Edit this </button>
          <button type="submit" className="submit-delete-button">Delete this </button>
        </div>
      </form>
      </div>
      <div className='display-markdown'>
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
      </div>
      </>
    
  );
}
