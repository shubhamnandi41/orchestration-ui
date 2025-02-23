import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import Tabs from '../components/Tabs';
import { searchUsers, fetchUserById } from "../services/userServices";
import { UserSummary, UserInfo, UserContacts, UserEmploymentDetails, UserEducation, UserBankDetails, UserCryptoDetails, UserAssetDetails } from "../components/UserDetails";
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    const handleSearch = async (query) => {
        setQuery(query);
        if (query.length < 3) {
            setUsers([]);
            return;
        }

        setLoading(true);
        setError(null);
        try {
            console.log("Searching for:", query);
            const result = await searchUsers(query);
            console.log("Search result:", result);
            setUsers(result);
        } catch (error) {
            console.error("Error fetching users:", error);
            setError("Error fetching users");
        } finally {
            setLoading(false);
        }
    };

    const handleSelectUser = async (id) => {
        setLoading(true);
        setError(null);
        try {
            console.log("Fetching user by ID:", id);
            const user = await fetchUserById(id);
            console.log("User found:", user);
            setSelectedUser(user);
            setUsers([]); // Clear the search results
            setQuery(""); // Clear the search query
        } catch (error) {
            console.error("Error fetching user:", error);
            setError("Error fetching user");
        } finally {
            setLoading(false);
        }
    };

    const tabs = selectedUser ? [
        {
            label: 'Info',
            content: <UserInfo user={selectedUser} />,
        },
        {
            label: 'Contacts',
            content: <UserContacts user={selectedUser} />,
        },
        {
            label: 'Employment Details',
            content: <UserEmploymentDetails user={selectedUser} />,
        },
        {
            label: 'Education',
            content: <UserEducation user={selectedUser} />,
        },
        {
            label: 'Bank Details',
            content: <UserBankDetails user={selectedUser} />,
        },
        {
            label: 'Crypto Details',
            content: <UserCryptoDetails user={selectedUser} />,
        },
        {
            label: "Asset Details",
            content: <UserAssetDetails user={selectedUser}/>
        }
    ] : [];

    return (
        <div className="home-page">
            <div className="header">
                <h1>LookupPro</h1>
                <div className="search-bar">
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>
            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}
            <div className="user-list">
                <UserList users={users} query={query} onSelectUser={handleSelectUser} />
            </div>
            {selectedUser && (
                <div className="user-details">
                    <UserSummary user={selectedUser} />
                    <div className="details-and-tabs">
                        <Tabs tabs={tabs} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
