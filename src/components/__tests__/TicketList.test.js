import React from 'react';
import { render } from '@testing-library/react';
import TicketList from '../TicketList';

jest.mock('react-router-dom', () => ({
    Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe('TicketList Component', () => {
    test('renders without crashing', () => {
        render(<TicketList />);
    });

    test('displays no open tickets message when there are no tickets', () => {
        const { getByText } = render(<TicketList />);
    });

    test('displays tickets correctly', () => {
        const tickets = [
            {
                _id: '1',
                title: 'Sample Ticket 1',
                body: 'This is a sample ticket body.',
                priority: 'high',
            },
            {
                _id: '2',
                title: 'Sample Ticket 2',
                body: 'This is another sample ticket body.',
                priority: 'medium',
            },
        ];

        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(tickets),
                ok: true,
            })
        );

        const { getByText } = render(<TicketList />);

        tickets.forEach(ticket => {
        });
    });
});
