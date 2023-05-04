import MarkdownPage from './components/MarkdownPage';
import { AppProvider } from './components/AppContext';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
const clientId = "161332176689-u4kmfe25ddfu9na2ick4f9b5d2990cir.apps.googleusercontent.com"

export default function App() {
  
  return (
   
      <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={response => console.log(jwt_decode(response.credential))}
                text="continue_with"
                cancel_on_tap_outside={true}
            />
      <AppProvider>
        <MarkdownPage />
      </AppProvider>
    </GoogleOAuthProvider>
  );
}