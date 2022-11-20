import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTodoPage from "./components/AddTodoPage";
import EditPage from "./components/EditPage";
import NotFound from "./components/NotFoundPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddTodoPage/>} />
        <Route path="/add" element={<SearchPage/>} />
        <Route path="/edit-todo" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
