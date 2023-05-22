// import React, { useContext } from "react"
// import { AppContext } from "../../../main"
// import { marked } from "marked"

// export default function NotesDisplayComponent() {
// 	const { text } = useContext(AppContext)
// 	return <div className="dangerous-dev" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
// }


import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../main";
import { Button } from "reactstrap";
import ReactMarkdown from "react-markdown";
import Speech from "react-speech";

export default function NotesDisplayComponent() {
  const { selectedNote } = useContext(AppContext);
  const [speechSynthesisSupported, setSpeechSynthesisSupported] = useState(false);

  useEffect(() => {
    const synthesisSupported = "speechSynthesis" in window;
    setSpeechSynthesisSupported(synthesisSupported);
  }, []);

  const handleReadAloud = () => {
    const utterance = new SpeechSynthesisUtterance(selectedNote?.content);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <ReactMarkdown>{selectedNote?.content}</ReactMarkdown>
      {speechSynthesisSupported && (
        <Button onClick={handleReadAloud}>Read Aloud</Button>
      )}
    </div>
  );
}