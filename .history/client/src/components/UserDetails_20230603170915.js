import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';  // Import Helmet

const UserDetails = () => {
  // Get username from URL parameters
  const { username } = useParams();

  // Initialize states for user details, user repositories, and loading status
  const [userDetails, setUserDetails] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      // Start loading
      setLoading(true);
      try {
        // Fetch user details and repos from custom API
        const response = await fetch(`http://localhost:5000/api/users/${username}`);
        const data = await response.json();

        // Set user details and repositories
        setUserDetails(data.userDetails);
        setUserRepos(data.userRepos.slice(0, 5));
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        // Stop loading
        setLoading(false);
      }
    };

    // Fetch user details when component mounts
    fetchUserDetails();
  }, [username]);

  // Show loading indicator while fetching data
  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="container">
      <Helmet>
        {/* Update page title with the user's name */}
        <title>{`${userDetails.name} - GitHub Explorer`}</title>
      </Helmet>
      <div className="user-info" style={{ textAlign: "center" }}>
        <h2>{userDetails.name}</h2>
        <img src={userDetails.avatar_url} alt="User avatar" style={{ width: "200px", height: "200px" }}/>
        <p>{userDetails.bio}</p>
      </div>
      <h2>Repositories</h2>
      <h4>Click on a repo name to view more details</h4>
      {userRepos.map((repo) => (
        <div className="repo-info" key={repo.name}>
          <Link to={`/repo/${username}/${repo.name}`} style={{ fontWeight: 'bold' }}>{repo.name}</Link>
          <a href={repo.html_url} target="_blank" rel="noreferrer" style={{ marginLeft: '10px', color: 'green' }}>Go to GitHub Repo</a>
          <p>Description: {repo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
