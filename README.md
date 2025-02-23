Orchestration UI - User Search
--------------------------------------------------
Overview
--------------------------------------------------
This React-based frontend provides an interactive user search functionality integrated with the Orchestration API. It features typeahead/autocomplete search, fetching user details dynamically, and displaying user information upon selection.

--------------------------------------------------
Features
--------------------------------------------------

🔍 Typeahead search for users by first name, last name, or SSN.

📄 Displays user details, including an image, upon selection.

⚡ Fetches data from the backend API (Spring Boot application).

🎨 Responsive UI with clean design principles.

🏗️ Follows Atomic Design, modular structure, and reusable components.

🔥 Lazy loading for optimized performance.

✅ Unit testing and error handling.

--------------------------------------------------
Tech Stack
--------------------------------------------------

Frontend: React, React Router, Axios

State Management: React Hooks

Styling: CSS

Build Tool: Create-React-App

--------------------------------------------------
Prerequisites
--------------------------------------------------
☑️ Node.js (v18+ recommended)

☑️ npm or yarn

☑️ A running backend API (orchestration-api)

--------------------------------------------------
Setup & Installation
--------------------------------------------------

Clone the Repository
--------------------------------------------------
	  git clone https://github.com/shubhamnandi41/orchestration-ui.git
	  cd orchestration-ui
	 
--------------------------------------------------
Install Dependencies
--------------------------------------------------

	npm install  # or yarn install
 --------------------------------------------------
Run the Application
--------------------------------------------------

	npm start  # or yarn start

The UI will be available at http://localhost:3000.

--------------------------------------------------
API Integration
--------------------------------------------------
The frontend interacts with the backend API for fetching users.

🔎 Search Users (Typeahead)

	GET /api/users/search?query={text}

Fetches a filtered list of users based on free-text search.

📌 Get User Details

	GET /api/users/{id}

Retrieves full user details by ID.

--------------------------------------------------

🚀 Future Enhancements
--------------------------------------------------

Improve UI accessibility and animations.

Implement authentication for secure access.

Add caching mechanisms for performance improvements.

--------------------------------------------------
📜 License
--------------------------------------------------

This project is licensed under the MIT License.

