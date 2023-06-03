import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const RepoDetails = () => {
  // Use useParams to get username and repo name from URL
  const { username, reponame } = useParams();
  
  // Initialize states for repository details, commits, and loading status
  const [repoDetails, setRepoDetails] = useState({});
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      // Start loading
      setLoading(true);
      try {
        // Fetch repo commit details from GitHub API
        console.log(${process.env.REACT_APP_GITHUB_API_BASE_URL}/${username}/${reponame});
        const responseRepo = await fetch(`${process.env.REACT_APP_GITHUB_API_BASE_URL}/${username}/${reponame}`);
        const dataRepo = await responseRepo.json();

        // Fetch commits from GitHub API
        const responseCommits = await fetch(dataRepo.commits_url.replace('{/sha}', ''));
        const dataCommits = await responseCommits.json();

        // Set repo details and commits
        setRepoDetails(dataRepo);
        setCommits(dataCommits.slice(0, 5));
      } catch (error) {
        console.error("Error fetching repo details:", error);
      } finally {
        // Stop loading
        setLoading(false);
      }
    };

    // Fetch repo details when component mounts
    fetchRepoDetails();
  }, [username, reponame]);

  // Show loading indicator while fetching data
  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="container">
      <Helmet>
        <title>{`${repoDetails.name} - GitHub Explorer`}</title>
      </Helmet>
      <div className="repo-info">
        <h2><a href={repoDetails.html_url} target="_blank" rel="noreferrer">{repoDetails.name}</a></h2>
        <p>{repoDetails.description}</p>
        <p>Created at: {new Date(repoDetails.created_at).toLocaleDateString()}</p>
        <p>Last commit at: {commits.length > 0 ? new Date(commits[0].commit.committer.date).toLocaleDateString() : 'N/A'}</p>
      </div>
      <h2>Recent Commits</h2>
      {commits.map((commit, index) => (
        <div key={index}>
          <p>{commit.commit.message}</p>
        </div>
      ))}
    </div>
  );
};

export default RepoDetails;
