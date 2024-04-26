import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';


export default function CreateComment({ postId }) {
    const [body, setBody] = useState("");
    const [username, setUsername] = useState("");

    const history = useHistory();
    
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const comment = {
            postId, body, username
        };

        const res = await fetch(process.env.REACT_APP_API + '/comments', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(comment)
        });

        if (res.status === 201) {
            toast.success('Comment created successfully');
            setTimeout(() => {
              history.go(0);
          }, 3500);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="comment-form">
          <label>
            <span className="font-semibold">Post a comment:</span>
            <textarea
              placeholder="Join the discussion"
              required
              onChange={(e) => setBody(e.target.value)}
              value={body}
            />
          </label>
          <label>
            <span>Username:</span>
            <input
                className="user-input"
                required 
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />
          </label>
          <button 
            className="btn-post" 
            disabled={isLoading}
          >
          {isLoading && <span>Creating...</span>}
          {!isLoading && <span>Comment</span>}
        </button>
        <ToastContainer autoClose={3000} />
      </form>
    )
}