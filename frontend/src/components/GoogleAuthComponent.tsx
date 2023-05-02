import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function GoogleAuthComponent() {
  const client_ID ='161332176689-u4kmfe25ddfu9na2ick4f9b5d2990cir.apps.googleusercontent.com'
  const client_Secret = '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'
  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
  });
  return (
    <>
    <GoogleOAuthProvider clientId="<your_client_id>"
    <MyCustomButton onClick={() => login()}>
      Sign in with Google 🚀{' '}
    
    </MyCustomButton>;
    </GoogleOAuthProvider>
    </> 
  )
}
