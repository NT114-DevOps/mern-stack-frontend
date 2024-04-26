import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';


export default function CreateForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [username, setUsername] = useState("");

    const history = useHistory();

    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const post = {
            title, body, username
        };

        const res = await fetch(process.env.REACT_APP_API + '/posts', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(post)
        });

        if (res.status === 201) {
            toast.success('Post created successfully');
            setTimeout(() => {
                history.push('/');
            }, 3500);
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
            <span>Description:</span>
            <textarea
              required
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </label>
          <label>
            <span>Username:</span>
            <input
              required 
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </label>
          <button 
            className="btn-primary" 
            disabled={isLoading}
          >
          {isLoading && <span>Creating...</span>}
          {!isLoading && <span>Create post</span>}
        </button>
        <ToastContainer autoClose={3000} />
      </form>
    )
}