import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function CreateForm() {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [priority, setPriority] = useState("low");
    const userEmail = "tonynguyenit2003@gmail.com";

    const [isLoading, setLoading] = useState(false);

    const confirm = () => toast.success('Ticket created!', {
        position: "top-center",
        autoClose: 2000,
        theme:'colored'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const ticket = {
            title, body, priority, userEmail
        };

        const res = await fetch("http://localhost:4000/api/v1/tickets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ticket)
        });

        if (res.status == 201) {
            confirm();
        }
    }


    return (
        <form onSubmit={handleSubmit} className="w-1/2">
          <label>
            <span>Title:</span>
            <input
              required 
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </label>
          <label>
            <span>Title:</span>
            <textarea
              required
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </label>
          <label>
            <span>Priority:</span>
            <select 
              onChange={(e) => setPriority(e.target.value)}
              value={priority}
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
          </label>
          <button 
            className="btn-primary" 
            disabled={isLoading}
          >
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Ticket</span>}
        </button>
        <ToastContainer />
      </form>
    )
}