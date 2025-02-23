import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage"; // Import the UserPage component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/user/:id" element={<UserPage />} /> {/* Define the route for UserPage */}
            </Routes>
        </Router>
    );
}

export default App;
