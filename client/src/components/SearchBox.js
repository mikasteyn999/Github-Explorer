// Import necessary libraries
import React, { useState } from 'react'; // React core and useState hook
import { useNavigate } from 'react-router-dom'; // Hook for navigation
import { Helmet } from 'react-helmet'; // For secure HTTP headers

const SearchBox = () => {
    // Input state management
    const [input, setInput] = useState(""); 

    // Navigation hook initialization
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form behavior
        navigate(`/users/${input}`); // Navigate to user details
    };

    return (
        <div className="container">
            {/* Helmet for secure HTTP headers */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>GitHub API Explorer</title>
            </Helmet>

            <h1>Welcome to the GitHub API Explorer</h1>
            {/* Form for user search */}
            <form onSubmit={handleSubmit}>
                {/* Search input field */}
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} // Set state on change
                    placeholder="Search for a user..."
                />
                {/* Submit button */}
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default SearchBox;
