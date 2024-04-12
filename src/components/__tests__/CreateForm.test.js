import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateForm from '../CreateForm';


describe('CreateForm component', () => {
  test('renders form elements', () => {
    render(<CreateForm />);
    
    expect(screen.getByLabelText(/Title:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Priority:/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Ticket/i)).toBeInTheDocument();
  });



  test('disables button while loading', async () => {
    const mockFetch = jest.spyOn(global, 'fetch').mockResolvedValueOnce({ status: 201 });
    
    render(<CreateForm />);
    
    fireEvent.click(screen.getByText(/Add Ticket/i));

    await waitFor(() => {
        expect(mockFetch).toHaveBeenCalledTimes(1);
    });

    expect(mockFetch).toHaveBeenCalledWith(expect.stringContaining('/tickets'), expect.objectContaining({ method: 'POST' }));
    expect(screen.getByText(/Adding.../i)).toBeInTheDocument();
    });


});



