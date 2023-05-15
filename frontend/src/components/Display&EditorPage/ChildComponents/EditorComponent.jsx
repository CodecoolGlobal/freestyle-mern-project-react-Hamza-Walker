import React, { useContext } from "react";
import { AppContext } from "../../../main";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default function EditorComponent() {

  const { setText, selectedNote, setNotes, setSelectedNote, inputNote } = useContext(
    AppContext
  );

  const handleTitleChange = (e) => {
    setSelectedNote((prevState) => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleNoteChange = (e) => {
    setText(e.target.value);
    setSelectedNote(e.target.value);
  };

  return (
    <div className="container">
      <Form className="note-write-form">
        <FormGroup>
          <Label for="noteTitle">Note Title</Label>
          <Input
            type="text"
            id="noteTitle"
            defaultValue={selectedNote.title}
            onChange={handleTitleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="noteInput">Note Content</Label>
          <Input
            type="textarea"
            id="noteInput"
            defaultValue={selectedNote.content}
            onChange={handleNoteChange}
          />
        </FormGroup>
      </Form>
    </div>
  );
}
