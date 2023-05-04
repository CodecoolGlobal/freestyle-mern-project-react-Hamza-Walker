import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const [text, setText] = useState('# A demo of `react-markdown`\n\n`react-markdown` is a markdown component for React.\n\n👉 Changes are re-rendered as you type.\n\n👈 Try writing some markdown on the left.\n\n## Overview\n\nA component by [Espen Hovlandsdal](https://espen.codes/)');
  
  const context = {
    text,
    setText,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
