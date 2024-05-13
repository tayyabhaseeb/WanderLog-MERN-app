import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./pages/UserPage";
import NewPlace from "./pages/NewPlace";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/header/Header";
import PlacePage from "./pages/PlacePage";
import EditPlace from "./pages/EditPlace";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<UserPage />} />
            <Route path=":id/places" element={<PlacePage />} />
            <Route path="places/new" element={<NewPlace />} />
            <Route path="/places/:id" element={<EditPlace />} />
            <Route path="/auth" element={<AuthPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
