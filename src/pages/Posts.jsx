import React from 'react';
import PostList from '../components/PostList';

export default function Posts() {
    return (
        <main>
            <nav className="ticket-nav">
                <div>
                    <h2>Blogs</h2>
                    <p><small>View all blog posts</small></p>
                </div>
                <a href="/posts/create">
                    <button className="btn-primary">Create</button>
                </a>
            </nav>
            <PostList />
        </main>
    );
}