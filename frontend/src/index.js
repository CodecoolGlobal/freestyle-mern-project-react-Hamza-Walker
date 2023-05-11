import React,{createContext, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import NotesListPage from "./components/NotesListPage";
import EditorPage from "./components/EditorPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
export const AppContext = createContext({})
const clientId = process.env.REACT_APP_CLIENT_ID;

const router = createBrowserRouter([
    {
        path: "/",
        element : <LoginPage />
    } , 
    { 
        path: "/notes",
        element : <NotesListPage/>
    } , 
    {       
        path: "/notes/:id",     
        element : <EditorPage />
    }

])

const Root = () => {
    const [user, setUser] = useState(null)
    const [notes, setNotes] = useState([])
    const [currrnetUser, setCurrentUser] = useState(null)
    const [selectedNote, setSelectedNote] = useState(null)
    
    return (
        <React.StrictMode>
        <AppContext.Provider value={{user, setUser, notes, setNotes, currrnetUser, setCurrentUser, selectedNote, setSelectedNote}}>
        <RouterProvider router={router}/>
        <GoogleOAuthProvider clientId={clientId}></GoogleOAuthProvider>
        </AppContext.Provider>
        </React.StrictMode>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
