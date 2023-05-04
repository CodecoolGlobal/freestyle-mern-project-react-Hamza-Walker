// import React, { useContext, useState } from 'react';
// import AppContext from '../AppContext';
// import '../../css/MarkdownPage.css';
// // import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// // import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// // import { solarizeddark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import AceEditor from 'react-ace';
// import 'ace-builds/src-noconflict/mode-javascript';
// import 'ace-builds/src-noconflict/theme-dracula';


// export default function EditorComponent() {
//   const { text, setText } = useContext(AppContext);
// // 
//   return (
//     <div className='container'>
//       <form className='note-write-form'>
//         {/* <textarea
//           className='textarea-write'
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         /> */}
//           <AceEditor
//         mode='javascript'
//         theme='dracula'
//         value={text}
//         onChange={(newValue) => setText (newValue)}
//         name='ace-editor'
//         editorProps={{ $blockScrolling: true }}
//         style={{ width: '100%', height: '300px' }}
//       />
//       </form>
//       {/* <SyntaxHighlighter language='javascript' style={atomDark}>
//         {text}
//       </SyntaxHighlighter> */}
//     </div>
//   );
// }
