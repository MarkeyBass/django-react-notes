import "./App.css";
import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container dark" id="App">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage />} exact />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
