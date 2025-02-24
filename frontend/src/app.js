import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckoutPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
