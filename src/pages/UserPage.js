// filepath: /d:/Intellij Workspace/orchestration-ui/src/pages/UserPage.js
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUserById, searchUsers } from '../services/userServices';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import UserList from '../components/UserList';
import './UserPage.css'; // Import the CSS file

const UserPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const getUser = async () => {
            try {
                const userData = await fetchUserById(id);
                setUser(userData);
            } catch (error) {
                setError('Error fetching user');
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, [id]);

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
            setUser(user);
            setUsers([]);
            setQuery("");
            navigate(`/user/${id}`);
        } catch (error) {
            console.error("Error fetching user:", error);
            setError("Error fetching user");
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const tabs = [
        {
            label: 'Info',
            content: (
                <div>
                    <p>Age: {user.age}</p>
                    <p>Birth Date: {user.birthDate}</p>
                    <p>Gender: {user.gender}</p>
                </div>
            ),
        },
        {
            label: 'Contacts',
            content: (
                <div>
                    <p>Phone: {user.phone}</p>
                    <p>Email: {user.email}</p>
                    <p>Address: {user.address.address}, {user.address.city}, {user.address.state}, {user.address.stateCode}-{user.address.postalCode}, {user.address.country}</p>
                    <p>Coordinates: {user.address.coordinates.lat}, {user.address.coordinates.lng}</p>
                </div>
            ),
        },
        {
            label: 'Education',
            content: (
                <div>
                    <p>University: {user.university}</p>
                </div>
            ),
        },
        {
            label: 'Employment Details',
            content: (
                <div>
                    <p>Company: {user.company.name}</p>
                    <p>Job Title: {user.company.jobTitle}</p>
                    <p>Department: {user.company.department}</p>
                    <p>Address: {user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.stateCode}-{user.company.address.postalCode}, {user.company.address.country}</p>
                    <p>Coordinates: {user.company.address.coordinates.lat}, {user.company.address.coordinates.lng}</p>
                </div>
            ),
        }
        
    ];

    return (
        <div className="user-page">
            <Header onSearch={handleSearch} />
            {query.length >= 3 && <UserList users={users} query={query} onSelectUser={handleSelectUser} />}
            <div className="user-details">
                <img src={user.image} alt={`${user.firstName}'s profile`} />
                <h2>{user.firstName} {user.lastName}</h2>
                <p>Username: {user.username}</p>
                <Tabs tabs={tabs} />
            </div>
        </div>
    );
};

export default UserPage;