import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { AppContext } from "../../main";
import { useNavigate } from "react-router-dom";
import "../../assets/css/LoginPage.css";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";

export default function LoginPage() {
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = await response.json();
        setUser({user});
        navigate("/notes");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className="login-page flex-column justify-center align-center height-100 gap-3">
      <h2>Welcome to Crusty Notes</h2>
      <p>
        Imagine a flashy welcome page.
        <br />
        Images, animations, you name it ...
      </p>
      <p>Anyway, click the button below to sign in</p>

      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label>Username: </Label>
          <Input type="text" name="username" placeholder="Username" />
        </FormGroup>
        <FormGroup>
          <Label>Password: </Label>
          <Input type="password" name="password" placeholder="Password" />
        </FormGroup>
        <Button type="submit">Log in</Button>
      </Form>
      <Button onClick={() => navigate("/register") }>Register here</Button>

      <GoogleLogin
        onSuccess={(response) => {
          const userData = jwt_decode(response.credential);
          const { name, picture, email } = userData;
          setUser({
            email: email,
            name: name,
            iconURL: picture,
          });
          navigate("/notes");
        }}
        text="continue_with"
        locale="en-En"
        useOneTap
      />
    </div>
  );
}
