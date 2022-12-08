import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { ButtonDeletePost } from '../ButtonDeletePost';
import React, { useState } from 'react';

function PostsTable() {

    const posts = useSelector((state: AppStore) => state.post);

    const [filter, setFilter] = useState('');
    const [currentFilter, setCurrentFilter] = useState('');

    const handleChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
    }

    const handleFilter = () => {
        setCurrentFilter(filter);
    }

    return (
        <>
            {
                posts.length ? (
                    <div className='flex flex-col p-4 mb-4'>

                        <h2>My posts</h2>

                        <div className='flex gap-4 item-center justify-between mb-4'>
                            <input className='w-full h-8' name="filter" type="text" placeholder="Search by name..." onChange={handleChangeFilter} value={filter} />
                            <button onClick={handleFilter}>Search</button>
                        </div>

                        <table className='w-full boder-1 p-2 border-collapse'>
                            <thead>
                                <tr>
                                    <th className='boder-1 p-2'>Name</th>
                                    <th className='boder-1 p-2'>Description</th>
                                    <th className='boder-1 p-2'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts
                                        .filter(post => post.name.toLowerCase() === currentFilter.toLowerCase() || currentFilter === '')
                                        .map(post => (
                                            <tr key={post.id}>
                                                <td className='boder-1 p-2'>
                                                    {post.name}
                                                </td>
                                                <td className='boder-1 p-2'>
                                                    {post.description}
                                                </td>
                                                <td className='boder-1 p-2'>
                                                    <ButtonDeletePost postId={post.id} />
                                                </td>
                                            </tr>
                                        ))
                                }
                            </tbody>
                        </table>
                    </div>

                ) : (
                    <h1>Create your first post</h1>
                )
            }
        </>

    );
};

export default PostsTable;