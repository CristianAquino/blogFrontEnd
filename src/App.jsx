import { Navbar, Main, Posts } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Posts />
      <Outlet />
    </>
  );
}

export default App;
