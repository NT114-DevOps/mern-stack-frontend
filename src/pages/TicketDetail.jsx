import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useHistory } from 'react-router-dom';

function TicketDetail() {
    const params = useParams();
    const history = useHistory();
    const id = params.id;
    const [ticket, setTicket] = useState({});

    useEffect(() => {
        const getTicket = async() => {
            const response = await fetch(process.env.REACT_APP_API + '/tickets/' + id);
            const data = await response.json();
            if (response.ok) {
                setTicket(data);
            }
        }
        getTicket();
    }, []);

    const handleDelete = async() => {
        const res = await fetch(process.env.REACT_APP_API + '/tickets/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
        if (res.ok) {
            toast.success('Ticket deleted successfully');
            setTimeout(() => {
                history.push('/');
            }, 3500);
        }
        else {
            toast.error('Failed to delete ticket');
        }
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
                    <ToastContainer autoClose={3000} />
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