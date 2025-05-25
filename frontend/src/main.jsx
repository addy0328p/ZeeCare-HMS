// React se required functions import kar rahe hain
import React, { createContext, useState } from "react";

// ReactDOM se root render karne ka method le rahe hain
import ReactDOM from "react-dom/client";

// Apna main App component import kar rahe hain
import App from "./App.jsx";

// Context create kar rahe hain jiska default value false hai (user logged in nahi hai)
export const Context = createContext({
  isAuthenticated: false,
});

// AppWrapper naam ka component banaya jo context provide karega
const AppWrapper = () => {
  // isAuthenticated state banayi, initially false (user logged in nahi hai)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // user ka data rakhne ke liye ek aur state banayi
  const [user, setUser] = useState({});

  return (
    // Context.Provider se App ko data pass kar rahe hain
    <Context.Provider
      value={{
        isAuthenticated,     // login status
        setIsAuthenticated,  // login status update karne ka function
        user,                // user ka data
        setUser,             // user data update karne ka function
      }}
    >
      {/* App component ko render kar rahe hain context ke andar */}
      <App />
    </Context.Provider>
  );
};

// ReactDOM ka use karke root element me AppWrapper render kar rahe hain
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
