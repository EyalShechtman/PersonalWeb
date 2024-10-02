import React, { useEffect, useState } from 'react';

// Define TypeScript interfaces for the data structure
interface User {
  login: string;
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  body: string | null; // The description of the issue (can be null)
  user: User;
}


const owner = 'EyalShechtman';
const repo = 'SammamishPickleBall-App';

const GithubRequest: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`);

        if (!response.ok) {
          throw new Error('Failed to fetch issues');
        }

        const data: Issue[] = await response.json();
        setIssues(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchIssues();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>GitHub Issues</h1>
      {issues.length === 0 ? (
        <p>No issues found.</p>
      ) : (
        <ul>
          {issues.map((issue) => (
            <li key={issue.id} style={{ marginBottom: '20px' }}>
              <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                <strong>{issue.title}</strong>
              </a> by {issue.user.login}
              <p>{issue.body || 'No description available.'}</p> {/* Display the description */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GithubRequest;
