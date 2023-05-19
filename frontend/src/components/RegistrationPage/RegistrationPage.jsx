import { useContext, useState } from "react";
import { AppContext } from "../../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";

export default function RegistrationPage() {
    const navigate = useNavigate();

    const [popup, setPopup] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleRegistration = async (event) => {
        event.preventDefault();
        const newUser = { username, password, email };
        try {
          const response = await axios.post("http://localhost:3000/api/user", newUser);
          console.log(response.data);
          setPopup(true)
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div className="registration-page flex-column justify-center align-center height-100 gap-3">
            <h2>Register for your Account</h2>
            <Form onSubmit={handleRegistration}>
                <FormGroup>
                    <Label for="Username">Username</Label>
                    <Input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input
                        type="text" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <Button type="submit">Register</Button>
                <Button onClick={() => navigate("/")} >Log in</Button>
            </Form>
            {popup && (
            <Alert color="success" isOpen={popup} toggle={() => setPopup(false)}>
                Thank you for your registration!
            </Alert>
            )}
        </div>
    )
}