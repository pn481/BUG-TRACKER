import { render, expect, screen, waitFor } from '@testing-library/react';
import BugList from '../components/BugList';
import axios from 'axios';
import jest from '@testing-library/jest-dom';
import test from '@testing-library/jest-dom';

jest.mock('axios');

test('renders list of bugs from API', async () => {
  const mockBugs = [
    { _id: '1', title: 'Bug A', description: 'Details A', status: 'open' },
    { _id: '2', title: 'Bug B', description: 'Details B', status: 'resolved' },
  ];

  axios.get.mockResolvedValueOnce({ data: mockBugs });

  render(<BugList />);

  await waitFor(() => {
    expect(screen.getByText('Bug A')).toBeInTheDocument();
    expect(screen.getByText('Bug B')).toBeInTheDocument();
  });
});
