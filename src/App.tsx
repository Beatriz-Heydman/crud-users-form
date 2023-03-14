import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageForm } from "./pages/form-page";
import { UsersPage } from "./pages/users-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageForm />} path="/new-user" />
        <Route element={<UsersPage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
