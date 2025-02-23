// filepath: /d:/Intellij Workspace/orchestration-ui/src/components/UserDetails.js
import './UserDetails.css'; // Import the CSS file

export const UserSummary = ({ user }) => (
    <div className="user-summary">
        <img src={user.image} alt={`${user.firstName}'s profile`} className="user-image" />
        <div className="user-info">
        <h2>{user.maidenName ? `${user.firstName} ${user.maidenName} ${user.lastName}` : `${user.firstName} ${user.lastName}`}</h2>
            {/* <h2>{user.firstName} {user.lastName}</h2>   */}
            <p>Username: {user.username}</p>
            <p>Blood Group: {user.bloodGroup} </p>
            <p>Height: {user.height} CMs     Weight: {user.weight} KGs</p>
        </div>
    </div>
);

export const UserInfo = ({ user }) => (
    <div>
        <p>Age: {user.age}</p>
        <p>Birth Date: {user.birthDate}</p>
        <p>Gender: {user.gender}</p>
        <p>Eye Color: {user.eyeColor}</p>
        <p>Hair Color:{user.hair.color}</p>
        <p>Hair Type: {user.hair.type}</p>
    </div>
);

export const UserContacts = ({ user }) => (
    <div>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
        <p>SSN: {user.ssn}</p>
        <p>Address: {user.address.address}, {user.address.city}, {user.address.state}, {user.address.stateCode}-{user.address.postalCode}, {user.address.country}</p>
        <p>Coordinates: {user.address.coordinates.lat}, {user.address.coordinates.lng}</p>
    </div>
);

export const UserEmploymentDetails = ({ user }) => (
    <div>
        <p>Company: {user.company.name}</p>
        <p>EIN: {user.ein}</p>
        <p>Job Title: {user.company.title}</p>
        <p>Department: {user.company.department}</p>
        <p>Address: {user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.stateCode}-{user.company.address.postalCode}, {user.company.address.country}</p>
        <p>Coordinates: {user.company.address.coordinates.lat}, {user.company.address.coordinates.lng}</p>
    </div>
);

export const UserEducation = ({ user }) => (
    <div>
        <p>University: {user.university}</p>
    </div>
);

export const UserBankDetails = ({ user }) => (
    <div>
        <p>Card Number: {user.bank.cardNumber}</p>
        <p>Card Expiry: {user.bank.cardExpire}</p>
        <p>Card Type: {user.bank.cardType}</p>
        <p>Currency: {user.bank.currency}</p>
        <p>IBAN: {user.bank.iban}</p>
    </div>
);

export const UserCryptoDetails = ({ user }) => (
    <div>
        <p>Coin: {user.crypto.coin}</p>
        <p>Wallet Address: {user.crypto.wallet}</p>
        <p>Network: {user.crypto.network}</p>
    </div>
);

export const UserAssetDetails = ({ user }) => (
    <div>
        <p>IP Address: {user.ip}</p>
        <p>MAC Address: {user.macAddress}</p>
        <p>Browser: {user.userAgent}</p>
    </div>
);