// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenWisp title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenWisp/i);
    expect(titleElement).toBeInTheDocument();
});
