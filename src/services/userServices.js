const API_URL = "http://localhost:8080/orchestration/api"; // Your backend URL

// Fetch user by ID
export const fetchUserById = async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const userData = await response.json();
    return userData;
};

// Fetch user by Email
export const fetchUserByEmail = async (email) => {
    try {
        const response = await fetch(`${API_URL}/email/${email}`);
        if (!response.ok) throw new Error("User not found");
        return await response.json();
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};

// Search Users by Query
export const searchUsers = async (query) => {
    try {
        const response = await fetch(`${API_URL}/search?query=${query}`);
        if (!response.ok) throw new Error("No users found");
        return await response.json();
    } catch (error) {
        console.error("Error searching users:", error);
        return [];
    }
};
