import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import CalendarPage from "./pages/Calendar.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
