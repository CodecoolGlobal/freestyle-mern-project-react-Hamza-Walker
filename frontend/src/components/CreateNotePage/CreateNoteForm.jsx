import React, { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../main";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";

const CreateNoteForm = () => {
  const [popup, setPopup] = useState(false)
  const { user } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [owner, setOwner] = useState(user.email);
  const [permitted, setPermitted] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newNote = { title, content, owner, permitted };
    try {
      const response = await axios.post("http://localhost:3000/api/note", newNote);
      console.log(response.data);
      setPopup(true)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Note Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="content">Content</Label>
        <Input
          type="textarea"
          name="content"
          id="content"
          placeholder="Note Content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="owner">Owner</Label>
        <Input
          type="text"
          name="owner"
          id="owner"
          value={owner}
          disabled={true}
        />
      </FormGroup>
      <FormGroup>
        <Label for="permitted">Permitted</Label>
        <Input
          type="text"
          name="permitted"
          id="permitted"
          placeholder="Note Permitted"
          value={permitted}
          onChange={(event) => setPermitted(event.target.value)}
        />
      </FormGroup>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </Form>
    {popup && (
      <Alert color="success" isOpen={popup} toggle={() => setPopup(false)}>
        The Note has been saved!
      </Alert>
    )}
    </div>
    
  );
};

export default CreateNoteForm;
