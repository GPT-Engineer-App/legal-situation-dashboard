import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CalendarPage from "./pages/Calendar.jsx";
import Notes from "./pages/Notes.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
