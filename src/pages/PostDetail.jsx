import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useParams, useHistory } from 'react-router-dom';
import CommentList from '../components/CommentList';
import CreateComment from '../components/CreateComment';

function PostDetail() {
    const params = useParams();
    const history = useHistory();
    const id = params.id;
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async() => {
            const response = await fetch(process.env.REACT_APP_API + '/posts/' + id);
            const data = await response.json();
            if (response.ok) {
                setPost(data);
            }
        }
        getPost();
    }, []);

    const handleDelete = async() => {
        const res = await fetch(process.env.REACT_APP_API + '/posts/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        });
        if (res.ok) {
            toast.success('Post deleted successfully');
            setTimeout(() => {
                history.push('/');
            }, 3500);
        }
        else {
            toast.error('Failed to delete post');
        }
    }


    return (
    <main>
        <nav>
            <h2>Blog Details</h2>
        </nav>
        <div className="card">
            <div className="header">
                <div>
                    <h3>{post.title}</h3>
                    <small>Created by {post.username}</small>
                </div>
                <div>
                    <button className="btn-primary" onClick={handleDelete}>Discard</button>
                    <ToastContainer autoClose={3000} />
                </div>
            </div>
            <p>{post.body}</p>
        </div>
        <h2 className='mt-20 text-center text-lg border-b-2 border-gray-300'>Comments</h2>
        <CreateComment postId={id} />
        <CommentList postId={id} />
    </main>
  )
}

export default PostDetail