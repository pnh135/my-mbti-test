import AuthProvider from "./context/AuthProvider";
import Router from "./shared/Router";

function App() {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
