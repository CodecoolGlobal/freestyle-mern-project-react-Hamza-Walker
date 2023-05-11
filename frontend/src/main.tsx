import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import MarkDownPage from "./components/MarkDownPage";
import LoginPage from "./components/LoginPage";
import NotesListPage from "./components/NotesListPage";
import EditorPage from "./components/EditorPage";

export const AppContext = createContext({});
const clientId = '161332176689-u4kmfe25ddfu9na2ick4f9b5d2990cir.apps.googleusercontent.com'
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/notes",
    element: <NotesListPage />,
  },
  {
    path: "/notes/:id",
    element: <EditorPage />,
  },
]);

export default function App() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [currrnetUser, setCurrentUser] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [text, setText] = useState(
    		"# A demo of `react-markdown`\n\n`react-markdown` is a markdown component for React.\n\n👉 Changes are re-rendered as you type.\n\n👈 Try writing some markdown on the left.\n\n## Overview\n\nA component by [Espen Hovlandsdal](https://espen.codes/)"
    	)
        return (
            <React.StrictMode>
              <GoogleOAuthProvider clientId={clientId}>
                <AppContext.Provider
                  value={{
                    user,
                    setUser,
                    notes,
                    setNotes,
                    currrnetUser,
                    setCurrentUser,
                    selectedNote,
                    setSelectedNote,
                    text,
                    setText,
                  }}
                >
                  <RouterProvider router={router} />
                </AppContext.Provider>
              </GoogleOAuthProvider>
            </React.StrictMode>
          );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />)