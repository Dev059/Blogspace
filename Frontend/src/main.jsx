import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Create the context
export const Context = createContext({
  isAuthenticated: false,
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [mode, setMode] = useState("dark");

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        blogs,
        setBlogs,
        mode,
        setMode,
      }}
    >
      <App />
    </Context.Provider>
  );
};

// Ensure `createRoot` is only called once
const container = document.getElementById('root');

if (!container._reactRootContainer) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  );
} else {
  // If the root already exists, just update it
  container._reactRootContainer.render(
    <React.StrictMode>
      <AppWrapper />
    </React.StrictMode>
  );
}
