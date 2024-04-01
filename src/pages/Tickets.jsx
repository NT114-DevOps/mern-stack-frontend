import React from 'react';
import TicketList from '../components/TicketList';

export default function Tickets() {
    return (
        <main>
            <nav className="ticket-nav">
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets</small></p>
                </div>
                <a href="/tickets/create">
                    <button className="btn-primary">Add</button>
                </a>
            </nav>
            <TicketList />
        </main>
    );
}