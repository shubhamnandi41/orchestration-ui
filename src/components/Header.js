// filepath: /d:/Intellij Workspace/orchestration-ui/src/components/Header.js
import SearchBar from './SearchBar';
import './Header.css'; // Import the CSS file

const Header = ({ onSearch }) => {
    return (
        <header className="header">
            <h1>User Details</h1>
            <SearchBar onSearch={onSearch} />
        </header>
    );
};

export default Header;