import { User } from "interfaces/global-interfaces";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, initialState } from "./context/AuthContext";
import { AppRouter } from "./routers/AppRouter";

function App() {
  const [user, dispatch] = useState(initialState.user);

  const setUser = (user: User) => dispatch(user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        {/* user y el dispatch se distribuiran en el AuthContext  */}
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
