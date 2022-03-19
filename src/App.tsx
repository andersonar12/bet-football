import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, initialState, TContextState, User } from "./context/AuthContext";
import { AppRouter } from "./routers/AppRouter";

function App() {
  const [user, dispatch] = useState(initialState.user);

  const setUser = (user: User) => dispatch(user);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, setUser }}>
        {/* user y el dispatch se distribuiran en el AuthContext  */}
        <AppRouter />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
