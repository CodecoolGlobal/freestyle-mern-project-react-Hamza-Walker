import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { AppContext } from "../main";
import { useNavigate } from "react-router-dom";
import "../assets/css/login-page.css";

export default function LoginPage() {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  if (user) {
    navigate("/notes");
    return null;
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
