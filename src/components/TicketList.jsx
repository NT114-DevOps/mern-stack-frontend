import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


export default function TicketList() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const getTickets = async() => {
            try {
                const response = await fetch(process.env.REACT_APP_API + '/tickets');
                const data = await response.json();
                if (response.ok) {
                    setTickets(data);
                }
            } catch(err) {
                console.log(err);
            }
        }
        getTickets();
    }, []);

    return (
        <div>
            {
                tickets.map((ticket) => {
                    return (
                        <div key={ticket._id} className="card">
                            <div className='title-wrapper'>
                                <h3>{ticket.title}</h3>
                                <Link to={`/tickets/${ticket._id}`}>
                                    <p><small>More details {'>'}</small></p>
                                </Link>
                            </div>
                            <p>{ticket.body.slice(0,200)}...</p>
                            <div className={`pill ${ticket.priority}`}>
                                {ticket.priority} priority
                            </div>
                        </div>
                    )
                })
            }
            {
                tickets.length === 0 && (
                    <p className="text-center">
                        There are no open tickets, YAY!
                    </p>
                )
            }
        </div>
    )
}