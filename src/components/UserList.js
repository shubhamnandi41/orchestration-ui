import { useNavigate } from 'react-router-dom';
import './UserList.css'; // Import the CSS file

const UserList = ({ users, query, onSelectUser }) => {
    return (
        <div className="user-list-dropdown">
            {query.length >= 3 && (
                users.length === 0 ? (
                    <ul className="dropdown-menu">
                        <li className='dropdown-item'>No users found</li>
                    </ul>
                    
                ) : (
                    <ul className="dropdown-menu">
                        {users.map(user => (
                            <li key={user.id} className="dropdown-item" onClick={() => onSelectUser(user.id)}>
                                <span className="user-name">{user.firstName} {user.lastName}</span>
                                <span className="user-ssn">{user.ssn}</span>
                            </li>
                        ))}
                    </ul>
                )
            )}
        </div>
    );
};

export default UserList;
