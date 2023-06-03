import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import RepoDetails from './RepoDetails';

// Test case: RepoDetails renders correctly
test('RepoDetails renders correctly', () => {
  // Define a mock repository object
  const repo = {
    name: 'my-repo',
    description: 'My test repository',
    created_at: '2022-01-01',
    commits: [
      { commit: { message: 'Commit 1' } },
      { commit: { message: 'Commit 2' } },
      { commit: { message: 'Commit 3' } },
    ],
  };

  // Render the RepoDetails component using a MemoryRouter
  const component = renderer.create(
    <MemoryRouter>
      <RepoDetails repo={repo} />
    </MemoryRouter>
  );

  // Generate a snapshot of the rendered component
  const tree = component.toJSON();

  // Compare the generated snapshot with the stored snapshot
  expect(tree).toMatchSnapshot();
});
