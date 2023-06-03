import React from 'react';
import { render } from '@testing-library/react';
import RepoDetails from './RepoDetails';

// Mock the useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ username: 'testuser', reponame: 'testrepo' }),
}));

// Test suite: RepoDetails
describe('RepoDetails', () => {
  // Test case: Renders repo details correctly
  test('renders repo details correctly', () => {
    // Define mock repo details
    const repoDetails = {
      name: 'Test Repo',
      description: 'This is a test repository',
      created_at: '2022-01-01',
      commits: [
        { commit: { message: 'Commit 1' } },
        { commit: { message: 'Commit 2' } },
        { commit: { message: 'Commit 3' } },
      ],
    };

    // Render the RepoDetails component
    const { getByText } = render(<RepoDetails />);

    // Assert that the repo details are rendered correctly
    expect(getByText(repoDetails.name)).toBeInTheDocument();
    expect(getByText(repoDetails.description)).toBeInTheDocument();
    expect(getByText(`Created at: ${new Date(repoDetails.created_at).toLocaleDateString()}`)).toBeInTheDocument();
    expect(getByText(repoDetails.commits[0].commit.message)).toBeInTheDocument();
    expect(getByText(repoDetails.commits[1].commit.message)).toBeInTheDocument();
    expect(getByText(repoDetails.commits[2].commit.message)).toBeInTheDocument();
  });
});
