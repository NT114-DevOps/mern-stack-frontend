import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useParams   } from 'react-router-dom';

function TicketDetail() {
    const params = useParams();
    const id = params.id;
    const [ticket, setTicket] = useState({});

    useEffect(() => {
        const getTicket = async() => {
            const response = await fetch('http://localhost:4000/api/v1/tickets/' + id);
            const data = await response.json();
            if (response.ok) {
                setTicket(data);
            }
        }
        getTicket();
    }, []);

    const handleDelete = () => {

    }


    return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className="card">
            <div className="header">
                <div>
                    <h3>{ticket.title}</h3>
                    <small>Created by {ticket.userEmail}</small>
                </div>
                <div>
                    <button className="btn-primary" onClick={handleDelete}>Discard</button>
                    <ToastContainer/>
                </div>
            </div>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>
  )
}

export default TicketDetail