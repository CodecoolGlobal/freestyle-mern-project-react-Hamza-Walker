import React, { useState } from "react";
import axios from "axios";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const NewNoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [owner, setOwner] = useState("");
  const [permitted, setPermitted] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newNote = { title, content, owner, permitted };
    try {
      const response = await axios.post("http://localhost:3000/api/notes", newNote);
      console.log(response.data);
    
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
          placeholder="Note Owner"
          value={owner}
          onChange={(event) => setOwner(event.target.value)}
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
  );
};

export default NewNoteForm;
